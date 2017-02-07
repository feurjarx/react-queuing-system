/**
 * Created by Roman on 08.02.2017.
 */
import * as React from "react";
import StatelessComponent = React.StatelessComponent;

export interface EventsMonitorProps {
    eventType: string;
}

export interface EventsMonitorStates {
    logs: Array<string>;
}

export interface EventItemProps {
    eventType: string;
}

const EventItem: StatelessComponent<EventItemProps> = (props) => {
    return <p>{ props.eventType }</p>;
};

export class EventsMonitorComponent extends React.Component<EventsMonitorProps, EventsMonitorStates> {

    constructor() {
        super();

        this.state = {
            logs: []
        }
    }

    componentWillReceiveProps(nextProps: EventsMonitorProps) {
        const {logs} = this.state;
        logs.push(nextProps.eventType);
        this.setState({
            logs
        })
    }

    render() {
        return (
            <div>
                <h1>Events history:</h1>
                {
                    this.state.logs.map((eventType: string) => (
                        <EventItem eventType={ eventType }/>
                    ))
                }
            </div>
        )
    }
}
