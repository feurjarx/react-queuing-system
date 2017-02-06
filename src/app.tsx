import * as React from "react";

import {Hello} from "./components/hello";

export class App extends React.Component<any, any> {

    private helloList: Array<any>;

    constructor() {
        super();

        this.helloList = [{
            title: 'Jetbrains is best IDE',
            body: 'Infa 100%'
        }, {
            title: 'Atom is gavno IDE',
            body: 'Infa 100% too'
        }];
    }

    render() {
        return (
            <div>
                {
                    this.helloList.map(data => (
                        <Hello
                            title={ data['title']}
                            body={ data['body'] }
                        />
                    ))
                }
            </div>
        );
    }
}
