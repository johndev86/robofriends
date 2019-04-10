import React, { Component } from 'react';

interface IAppProps {
    color: string;
}

interface IAppState {
    count: number;
}

class CounterButton extends Component<IAppProps, IAppState> {

    constructor(props: IAppProps) {
        super(props);
        this.state = {
            count: 0
        }
    }

    shouldComponentUpdate(nextProps: IAppProps, nextState: IAppState) {
        return this.state.count !== nextState.count;
    }

    updateCount = () => {
        this.setState(state => { 
            return { count: state.count + 1}
        });
    }

    render() {
        return (
            <button id='counter' color={this.props.color} onClick={this.updateCount}>
                Count: {this.state.count}
            </button>
            );
    }
}

export default CounterButton;