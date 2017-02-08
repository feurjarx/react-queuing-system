import * as React from "react";
import axios from 'axios';
import {AxiosResponse} from "axios";
import {AxiosError} from "axios";

export interface Lesson14ComponentStates {
    data: Array<any>;
}

export class Lesson14Component extends React.Component<any, Lesson14ComponentStates> {
    constructor() {
        super();

        this.state = {
            data: []
        }
    }

    getData() {
        debugger
        axios
            .get('/data')
            .then((response: AxiosResponse) => {
                debugger
                return this.setState({
                    data: response.data
                });
            })
            .catch((err: AxiosError) => {
                debugger
            });
    }

    componentWillMount() {
        this.getData()
    }

    render() {
        return (
            <div>
                { this.state.data.map(() => {
                    debugger
                })}
            </div>
        )
    }
}
