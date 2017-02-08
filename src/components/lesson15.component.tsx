import * as React from "react";
import Props = React.Props;

export interface ButtonComponentProps extends Props<any> {

}

class ButtonComponent extends React.Component<ButtonComponentProps, any> {

    render() {
        return (
            <button>{ this.props.children }</button>
        )
    }
}

export class Lesson15Component extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <ButtonComponent>OK</ButtonComponent>
            </div>
        )
    }
}
