import React, { Component } from 'react';

class ClassCounter2 extends Component {
    constructor() {
        super()
        this.state({
            count: 0
        })
    }

    incrementCounter = () => {
        this.state(prevState => (
            prevState + 5
        ))
    }
    decrementCounter = () => {
        this.state(prevState => (
            prevState - 5
        ))
    }

    resetCounter = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>   <h5>Counter : {this.state.count}</h5>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button></div>
        );
    }
}

export default componentName;
