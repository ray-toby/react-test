import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../../component/List';
import { loadTaskList } from '../../component/List/indexRedux';
import { updateTaskList, deleteTaskList } from '../../component/Listitem/indexRedux';
import { addTaskList } from '../../component/SubmitDialog/index';

class TodoList extends React.Component {
    render() {
        return(
            <List {...this.props} />
        )
    }
}

export default connect( state => {
    return {
        loading: state.taskListData.loading,
        error: state.taskListData.error,
        taskList: state.taskListData.taskList
    }
}, dispatch => {
    return {
        loadTaskList: bindActionCreators(loadTaskList, dispatch),
        updateTaskList: bindActionCreators(updateTaskList, dispatch),
        deleteTaskList: bindActionCreators(deleteTaskList, dispatch),
        addTaskList: bindActionCreators(addTaskList, dispatch)
    }
})(TodoList)