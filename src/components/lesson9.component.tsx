import * as React from "react";
import ChangeEventHandler = React.ChangeEventHandler;
import EventHandler = React.EventHandler;
import ChangeEvent = React.ChangeEvent;
import StatelessComponent = React.StatelessComponent;
import Props = React.Props;
import {EventsMonitorComponent} from "./lesson9.components/event-monitor.component";

export class Lesson9Component extends React.Component<any, any> {

    constructor() {
        super();

        this.state = {
            eventType: '...'
        };

        this.showEventType = this.showEventType.bind(this);
    }

    showEventType(event: any) {
        this.setState({
            eventType: event.type
        });
    }

    render() {
        return (
            <div>
                <label>
                    <EventsMonitorComponent eventType={ this.state['eventType'] }/>
                    <hr />
                    <input
                        onBlur={ this.showEventType }
                        onCut={ this.showEventType }
                        onDoubleClick={ this.showEventType }
                        onFocus={ this.showEventType }
                        onChange={ this.showEventType }
                        onClick={ this.showEventType }
                        onKeyDown={ this.showEventType }
                        onKeyDownCapture={ this.showEventType }
                        onKeyPress={ this.showEventType }
                        onKeyPressCapture={ this.showEventType }
                        onKeyUp={ this.showEventType }
                        onKeyUpCapture={ this.showEventType }
                    />
                </label>
            </div>
        )
    }
}
