import * as React from "react";
import * as ReactDOM from "react-dom";
import Component = React.Component;
import Props = React.Props;

export interface Lesson10InputsStates {
    [key: string]: string;
}
export interface Lesson10States {
    inputs: Lesson10InputsStates;
}

export class Lesson10 extends React.Component<any, Lesson10States> {

    private inputsNames = ['one', 'two', 'three'];

    constructor() {
        super();

        this.updateText = this.updateText.bind(this);

        let state: Lesson10States = {
            inputs: {}
        };

        this.inputsNames.forEach(name => state.inputs[name] = null);

        this.state = state;
    }

    updateText() {

        let inputsStates: Lesson10InputsStates = {};
        this.inputsNames
            .forEach(name => {
                const input =  ReactDOM.findDOMNode(this.refs[name]) as HTMLInputElement;
                inputsStates[name] = input.value;
            });

        this.setState({
            inputs: inputsStates
        })
    }

    render() {
        return (
            <div>

                {
                    this.inputsNames.map(name => (
                        <p key={ name }>
                            <label htmlFor={ name + '-input'}>{ this.state.inputs[name] }</label>
                            <br />
                            <Input
                                ref={ name }
                                onChange={ this.updateText }
                                id={ name + '-input' }
                            />
                        </p>
                    ))
                }

            </div>
        )
    }
}

class Input extends React.Component<any, any> {
    render() {
        return (
            <input type="text" id={this.props.id} onChange={this.props.onChange} />
        )
    }
}