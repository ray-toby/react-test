import React, { Component } from 'react';
import 'antd/dist/antd.css';
import {
    Input,
    Button,
    List,
    message,
} from 'antd';
import axios from 'axios';
import store from '../store/index';
import { getInputChangeAction, getAddTodoItem, getDelData } from '../action/index';

export default class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = store.getState();
        store.subscribe(this.handleStoreChange)
    }

    handleAdd = () => {
        const action = getAddTodoItem();
        store.dispatch(action);
    }

    handleDel = index => {
        const action  = getDelData(index);
        store.dispatch(action); 
    }

    handleChange = (e) => {
        const action = getInputChangeAction(e.target.value);
        store.dispatch(action);
    }

    handleAjax = () => {
        axios.get('/todoList.json')
        .then(res => {
            console.log(res.data);
            this.setState(
                () => {
                    return {
                        dataObj: [...this.state.dataObj].concat(res.data)
                    };
                },
                () => { message.success('success', 0.4)}
            )
        })
        .catch(err => {
            message.error('fail!!', 1)
        })
    }

    handleClean = () => {
        this.setState(
            () => {
                return {
                    dataObj: []
                };
            },
            () => {
                message.success('清除成功', 0.4)
            }
        )
    }

    handleStoreChange = () => {
        this.setState(store.getState());
    }

    render() {
        return(
            <div style={{ margin: "10px"}}>
                <Input
                    value={this.state.inputValue}
                    placeholder="add todo"
                    onChange={this.handleChange}
                    style={{ width:"60%"}}

                />
                <Button
                    type="primary"
                    onClick={this.handleAdd}
                >
                    Add
                </Button>
                <Button
                    type="primary"
                    onClick={this.handleAjax}
                >
                    Export
                </Button>
                <Button
                    type="primary"
                    onClick={this.handleClean}
                >
                    Clean
                </Button>
                <List
                    header={<div style={{ textAlign: "center" }}>** TodoList **</div>}
                    footer={
                        <div style={{ textAlign: "center", fontSize: "10px" }}>
                            
                        </div>
                    }
                    bordered
                    dataSource={this.state.dataObj}
                    renderItem={item => (
                    <List.Item onClick={this.handleDel}>
                        <ul>
                            <li>{item}</li>
                        </ul>
                    </List.Item>
                    )}
                    style={{ width: "20rem", margin: "0.5rem" }}
                />
            </div>
        )
    }
}