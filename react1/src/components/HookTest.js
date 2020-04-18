import React, { Component, useState } from 'react';
// import PropTypes from 'prop-types';

export default function HookTest() {
    //hook使用
    const [count, setCount] = useState(0);

    const [age] = useState(20);

    const [fruit, setFruit] = useState('banana');

    const [fruits, setFruits] = useState(['apple', 'banana']);

    const [input, setInput] = useState('');

    return (
        <div>
            <p>点击了{count} 次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <p>年龄{age}</p>
            <p>选择的水果：{fruit}</p>
            <ul>
                {fruits.map(f => (<li key={f} onClick={() => setFruit(f)} >{f}</li>))}
            </ul>

            <p>
                <input type='text' value={input} onChange={e => setInput(e.target.value)}></input>
                <button onClick={() => setFruits([...fruits, input])}>新增水果</button>
            </p>

        </div>
    )
}

