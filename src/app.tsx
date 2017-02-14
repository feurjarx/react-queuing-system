import * as React from "react";
import * as ReactDOM from "react-dom";

import {Lesson9Component} from "./components/lesson9.component";
import {Lesson10} from "./components/lesson10";
import {Lesson13Component} from "./components/lesson13.component";
import {Lesson14Component} from "./components/lesson14.component";
import {Lesson16Component} from "./components/lesson16.component";
import {Lesson18} from "./components/lesson18.component";
import {Lesson19} from "./components/lesson19.component";
import {Lesson20} from "./components/lesson20";
import {Lesson20Mod} from "./components/lesson20mod";
import {ReduxDemo} from "./components/redux-demo";

import Props = React.Props;
import ChangeEvent = React.ChangeEvent;
import Component = React.Component;
import JSXElement = JSX.Element;
import StatelessComponent = React.StatelessComponent;

export const root = document.getElementById('root');
const lessons: {[key: string]: JSXElement} = {
    lesson9: <Lesson9Component />,
    lesson10: <Lesson10 />,
    lesson13: <Lesson13Component />,
    lesson14: <Lesson14Component />,
    lesson16: <Lesson16Component />,
    lesson18: <Lesson18 />,
    lesson19: <Lesson19 />,
    lesson20: <Lesson20 />,
    lesson20mod: <Lesson20Mod />,
    reduxDemo: <ReduxDemo />
};

export interface AppStates {
    activeLesson: JSX.Element;
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
