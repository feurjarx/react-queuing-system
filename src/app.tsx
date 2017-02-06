import * as React from "react";

import {Hello} from "./components/hello";
import SyntheticEvent = React.SyntheticEvent;

export class App extends React.Component<any, any> {

    private helloList: Array<any>;

    constructor() {
        super();

        this.state = {
            labelText: 'Label for text input'
        };

        this.helloList = [{
            title: 'Jetbrains is best IDE',
            body: 'Infa 100%'
        }, {
            title: 'Atom is gavno IDE',
            body: 'Infa 100% too'
        }];
    }

    handleInputChange(event: SyntheticEvent<HTMLInputElement>) {
        this.setState({
            labelText: event.currentTarget.value
        });
    }

    render() {

        return (
            <div>

                <label>{ this.state.labelText }
                    <input type="text" onChange={ this.handleInputChange.bind(this) }/>
                </label>

                {
                    this.helloList.map((data, idx) => (
                        <Hello
                            key={ idx }
                            title={ data['title']}
                            body={ data['body'] }
                        />
                    ))
                }

            </div>
        );
    }
}
