import * as React from "react";
import Props = React.Props;

export interface Person {
    id: number;
    name: string;
}

export interface Lesson18States {
    persons: Array<Person>;
}

export class Lesson18 extends React.Component<any, Lesson18States> {
    constructor() {
        super();

        /*this.state = {
            persons: [{
                id: 1,
                name: 'Nikolay'
            },{
                id: 2,
                name: 'Ivan'
            },{
                id: 3,
                name: 'Anna'
            }]
        }*/
    }

    render() {
        return (
            <PersonList>
                <div>One</div>
            </PersonList>
        )
    }
}

class PersonList extends React.Component<Props<any>, any> {
    constructor() {
        super();
    }

    render() {

        // const items = this.props.children.map(jsx => jsx); // BAD
        const items = React.Children.map(this.props.children, jsx => jsx); // GOOD

        return (
            <div />
        )
    }
}