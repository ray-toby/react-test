import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../redux/configureStore';
import BasicLayout from '../layouts';

export default class RouterApp extends React.Component {
    render(){
        return(
            <Provider store={store}>
                <Router>
                    <Route path='/' component={BasicLayout}/>
                </Router>
            </Provider>
        )
    }
}