import * as React from "react";

/*export interface HelloProps {
    title: string;
    body?: string;
}*/

/*export interface HelloStates {

    body: string;
}*/

export class Hello extends React.Component<any, any> {

    render() {
        return (
            <div>
                <h1>Test { this.props.title }</h1>
                <p>{ this.props.body }</p>
            </div>
        )
    }
}
