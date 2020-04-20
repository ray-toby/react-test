import React, { Component, useContext } from 'react';

//创建上下文
const MyContext = React.createContext();
const { Provider, Consumer } = MyContext;

function Child(prop) {
    return (
        <div>
            child: {prop.foo}
        </div>
    )
}

// 使用hook消费
function Child2() {
    const ctx = useContext(MyContext)
    return (
        <div>
            child2: {ctx.foo}
        </div>
    )
}

//使用class指定静态contextType
class Child3 extends Component {
    static contextType = MyContext;
    render() {
        return <div>child3: {this.context.foo}</div>  
    } 
}

class ContextTest extends Component {
    constructor(props) {
        super(props);

    }
    render() {
        return (
            <div>
                
                <Provider value={{foo: 'bar'}}>
                    <Consumer>
                        {/* 隔代传值 消费方法一  Consumer */}
                        {value => <Child {...value} />}
                       
                    </Consumer>

                     {/* 消费方法二  使用useContext hook */}
                     <Child2 />

                     {/* 消费方法三  使用 contextType */}
                     <Child3 />
                </Provider>

            </div>
        );
    }
}


export default ContextTest;