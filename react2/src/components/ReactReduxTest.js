import React from 'react';
import { connect } from 'react-redux';

const mapStateToProps = state => ({ num: state });
const mapDispatchToProps = {
    add: () => ({ type: 'add'}),
    minus: () => ({ type: 'minus' })
};

function ReactReduxTest({ num, add, minus }) {
    return (
        <div>
            <p>{num}</p>
            <button onClick={add}>+</button>
            <button onClick={minus}>-</button>
        </div>
    )
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps
)(ReactReduxTest)