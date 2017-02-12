import * as React from "react";
import * as ReactDOM from "react-dom";

import ChangeEvent = React.ChangeEvent;

export class Lesson20 extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            red: 0,
            green: 0,
            blue: 0
        };

        this.update = this.update.bind(this);
    }

    update(obj: any) {

        const {

            red = this.state.red,
            green = this.state.green,
            blue = this.state.blue

        } = obj;

        this.setState({
            red,
            green,
            blue
        });
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

                <div>
                    <Slider type="red" update={ this.update }/>
                    <h2>{this.state.red}</h2>
                </div>
                <div>
                    <Slider type="green" update={ this.update }/>
                    <h2>{this.state.green}</h2>
                </div>
                <div>
                    <Slider type="blue" update={ this.update }/>
                    <h2>{this.state.blue}</h2>
                </div>
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
                    onChange={ (e: ChangeEvent<HTMLInputElement>) => (
                        this.props.update({
                            [this.props.type]: e.target.value
                        })
                    )}
                />
            </div>
        )
    }
}
