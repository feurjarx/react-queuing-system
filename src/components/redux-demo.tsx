import * as React from "react";
import { createStore } from "redux";


export class ReduxDemo extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            counter: 0
        };

        this.incrementHandle = this.incrementHandle.bind(this);
        this.decrementHandle = this.decrementHandle.bind(this);
    }

    incrementHandle() {
        let { counter } = this.state;
        counter++;
        this.setState({
            counter
        });
    }

    decrementHandle() {
        let { counter } = this.state;
        counter--;
        this.setState({
            counter
        });
    }

    render() {
        return (
            <div>
                <h1>{ this.state.counter }</h1>
                <ButtonGroup
                    onIncrement={ this.incrementHandle }
                    onDecrement={ this.decrementHandle }
                />
            </div>
        )
    }
}

const ButtonGroup = (props: any) => (
    <div>
        <button onClick={props.onIncrement}>+</button>
        <button onClick={props.onDecrement}>-</button>
    </div>
);