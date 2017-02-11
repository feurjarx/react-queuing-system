import * as React from "react";
import JSXElement = JSX.JSXElement;

export class Lesson19 extends React.Component<any, any> {
    constructor() {
        super();
    }

    render() {
        return (
            <Buttons>
                <button key="1">A</button>
                <button key="2">B</button>
                <button key="3">C</button>
            </Buttons>
        )
    }
}

class Buttons extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            selected: 'None'
        };
    }

    selectButton(selected: string) {
        this.setState({
            selected
        });
    }

    render() {

        const items = React.Children.map(this.props.children, (child: JSXElement) => (
            React.cloneElement(child, {
                onClick: this.selectButton.bind(this, child.key)
            })
        ));

        console.log(items);

        return (
            <div>
                <h1>{ this.state.selected }</h1>
                { items }
            </div>
        )
    }
}