import * as React from "react";
import * as ReactDOM from "react-dom";
import {root} from "../app";

export interface Lesson13Props {
    counter?: number;
}

export interface Lesson13States {
    counter: number;
}

export class Lesson13Component extends React.Component<Lesson13Props, Lesson13States> {

    public static defaultProps: Lesson13Props = {
        counter: 0
    };

    constructor() {
        super();

        this.clickHandle = this.clickHandle.bind(this);
        /*this.state = {
            counter: 0
        };*/
    }

    componentWillReceiveProps(nextProps: Lesson13Props) {
        debugger
    }

    clickHandle() {
        ReactDOM.render(<Lesson13Component counter={ this.props.counter + 1 }/>, root);
        /*const counter = this.state.counter + 1;
        this.setState({
            counter
        })*/
    }

    render() {
        return (
            <button onClick={ this.clickHandle }>
                { this.props.counter }
                {/*{ this.state.counter }*/}
            </button>
        )
    }
}
