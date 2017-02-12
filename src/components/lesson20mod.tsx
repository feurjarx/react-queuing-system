import * as React from "react";
import * as ReactDOM from "react-dom";

import ChangeEvent = React.ChangeEvent;

export class Lesson20Mod extends React.Component<any, any> {

    private colors = ['red', 'green', 'blue'];

    constructor() {
        super();

        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.update = this.update.bind(this);
    }

    update() {

        let state: any = {};

        this.colors.forEach(colorName => {
            const div = ReactDOM.findDOMNode(this.refs[colorName]);
            const input:  HTMLInputElement = div.querySelector('input');
            state[colorName] = input.value;
        });

        this.setState(state);
    }

    render() {

        const rgb = 'rgb(' + [this.state.red, this.state.green, this.state.blue].join(',') + ')';

        const boxStyle = {
            width: '100px',
            height: '100px',
            backgroundColor: rgb
        };

        return (
            <div>

                <div style={ boxStyle }></div>

                {
                    this.colors.map(colorName => (
                        <div key={ colorName }>
                            <Slider type={ colorName }
                                    update={ this.update }
                                    ref={ colorName }
                            />
                            <h2>{this.state[colorName]}</h2>
                        </div>
                    ))
                }

            </div>
        )
    }
}

class Slider extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <input
                    type="range"
                    defaultValue="0"
                    min={0}
                    max={255}
                    onChange={ this.props.update }
                />
            </div>
        )
    }
}
