import React, { Component } from 'react';
import store from '../store/store';

export default function ReduxTest() {
    return (
        <div>
            <p>{store.getState()}</p>
            <div>
                <button onClick={() => store.dispatch({type: 'add'})}>+</button>
                <button onClick={() => store.dispatch({type: 'minus'})}>-</button>
            </div>
        </div>
    );
}
