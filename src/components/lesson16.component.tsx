import * as React from "react";
import ChangeEvent = React.ChangeEvent;

declare var Babel: {
    transform: (code: string, obj: {
        presets: Array<string>
    }) => {
        code: string
    };
};

export class Lesson16Component extends React.Component<any, any> {
    constructor() {
        super();

        this.state = {
            text: 'babel test',
            output: null,
            error: null
        };

        this.update = this.update.bind(this);
    }

    update(event: ChangeEvent<HTMLTextAreaElement>) {
        const suggestedCode = event.target.value;
        try {

            const compileObject = Babel.transform(suggestedCode, {
                presets: ['es2015', 'react']
            });

            this.setState({
                output: compileObject.code,
                error: ''
            })

        } catch (e) {

            this.setState({
                error: e.message
            })
        }

    }

    render() {
        return (
            <div>
                <h1>{ this.state.error }</h1>
                <div className="container">
                    <textarea
                        onChange={this.update }
                        defaultValue={ this.state.text }
                    />
                    <pre>{ this.state.output }</pre>
                </div>
            </div>
        )
    }
}
