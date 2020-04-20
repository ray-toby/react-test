import React, { Component, useState, useEffect } from 'react';
// import PropTypes from 'prop-types';


//自定义钩子  名称用’use‘开头
function useAge() {
    const [age, setAge] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setAge(20)
        }, 2000);
    });

    return age;
}

export default function HookTest() {
    //hook使用
    const [count, setCount] = useState(0);

    //useEffect  副作用钩子  \每次渲染都会执行
    useEffect(() => {
        document.title = `你点击了${count}次`;
    });
    //如果仅执行一次，  传递第二个参数为[]
    //componentDidMount   如果其他依赖状态变化  其他没有变化  设置第二个参数依赖  [count]
    useEffect(() => {
        //api调用
        console.log('api调用')
    }, []);

    const age = useAge();

    const [fruit, setFruit] = useState('banana');

    const [fruits, setFruits] = useState(['apple', 'banana']);

    const [input, setInput] = useState('');

    return (
        <div>
            <p>点击了{count} 次</p>
            <button onClick={() => setCount(count + 1)}>点击</button>
            <p>年龄{age ? age : 'loading...'}</p>
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

