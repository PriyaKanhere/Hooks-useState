import React, { Component } from 'react'

class ClassCounter extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.incrementCounter.bind(this)
    }

    incrementCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    decrementCounter = () => {
        this.setState({
            count: this.state.count - 1
        })
    }

    resetCounter = () => {
        this.setState({
            count: 0
        })
    }
    render() {
        return (
            <div>
                <h5>Counter : {this.state.count}</h5>
                <button onClick={this.incrementCounter}>Increment</button>
                <button onClick={this.decrementCounter}>Decrement</button>
                <button onClick={this.resetCounter}>Reset</button>
            </div >
        )
    }
}

export default ClassCounter
