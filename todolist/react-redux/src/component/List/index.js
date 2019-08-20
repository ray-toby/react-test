import React from 'react';
import PropTypes from 'prop-types';
import SubmitDialog from '../SubmitDialog';
import ListItem from '../Listitem';
import './index.css';

class TodoList extends React.Component {
    static propTtpes = {
        loading: PropTypes.bool.loading,
        error: PropTypes.bool,
        loadTaskList: PropTypes.func,
        taskList: PropTypes.arrayOf(PropTypes.object),
        updateTask: PropTypes.func,
        addTask: PropTypes.func,
        deleteTask: PropTypes.func
    }

    componentDidMount() {
        this.props.loadTaskList();
    }

    getFinished = () => {
        let sum = 0;
        this.props.taskList.forEach(element => {
            if(element.status) {
                sum++
            }
        });
        return sum;
    }

    render() {
        const { loading, error, taskList, updateTask, deleteTask, addTask } = this.props;
        if(loading) {
            return <p>loading...</p>
        }
        if(error) {
            return <p>something error !!!</p>
        }
        if(taskList) {
            const totalFinish = this.getFinished();
            return(
                <div>
                    <h1>TodoList</h1>
                    <ul>
                        {taskList.map((item, index) => {
                            <ListItem 
                                item={item}
                                key={index}
                                updateTask={updateTask}
                                deleteTask={deleteTask}
                            />
                        })}
                        <li>{totalFinish}已完成&nbsp;/&nbsp;{taskList.length}总数</li>
                    </ul>
                    <SubmitDialog addTask={addTask} />
                </div>
            )
        }
    }
}

export default TodoList;