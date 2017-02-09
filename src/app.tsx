import * as React from "react";
import * as ReactDOM from "react-dom";

import {Lesson9Component} from "./components/lesson9.component";
import {Lesson15Component} from "./components/lesson15.component";
import {Lesson14Component} from "./components/lesson14.component";
import {Lesson13Component} from "./components/lesson13.component";

import Props = React.Props;
import ChangeEvent = React.ChangeEvent;
import Component = React.Component;
import JSXElement = JSX.JSXElement;
import StatelessComponent = React.StatelessComponent;

export const root = document.getElementById('root');
const lessons: {[key: string]: JSXElement} = {
    lesson9: <Lesson9Component />,
    lesson13: <Lesson13Component />,
    lesson14: <Lesson14Component />,
    lesson15: <Lesson15Component />,
};

export interface AppStates {
    activeLesson: JSXElement;
    activeLessonName: string;
}

interface SwitchOptionProps {
    value: string;
    active: boolean;
}

const SwitchOption: StatelessComponent<SwitchOptionProps> = (props) => (
    <span>
        <label htmlFor={ props.value + '-input' }>{ props.value }</label>
        <input
            id={ props.value + '-input' }
            type="radio"
            name="lesson"
            value={ props.value }
            defaultChecked={ props.active }
        />
    </span>
);

const LOCALSTORAGE_LESSON_KEY = 'lesson'

export class App extends React.Component<any, AppStates> {

    constructor() {
        super();

        this.state = {
            activeLesson: null,
            activeLessonName: null
        };

        this.selectHandle = this.selectHandle.bind(this);
    }

    componentWillMount() {

        let lessonKey = localStorage.getItem(LOCALSTORAGE_LESSON_KEY);
        if (!lessonKey) {
            lessonKey = 'lesson9';
        }

        this.mountComponent(lessonKey);
    }

    selectHandle(event: ChangeEvent<any>) {
        this.unmount();
        const selectedLessonName = event.target['value'];
        this.mountComponent(selectedLessonName);
    }

    mountComponent(activeLessonName: string) {
        const activeLesson = lessons[activeLessonName];
        ReactDOM.render(activeLesson, root);

        this.setState({
            activeLesson,
            activeLessonName
        });

        localStorage.setItem(LOCALSTORAGE_LESSON_KEY, activeLessonName);
    }

    unmount() {
        ReactDOM.unmountComponentAtNode(root);
    }

    render() {
        return (

            <div onChange={ this.selectHandle }>

                {
                    Object.keys(lessons).map((lessonName: string) => (
                        <SwitchOption
                            key={ lessonName }
                            value={lessonName}
                            active={ lessonName === this.state.activeLessonName }
                        />
                    ))
                }

            </div>
        )
    }
}
