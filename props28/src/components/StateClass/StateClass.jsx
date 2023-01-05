import styles from './stateClass.module.scss';
import React from 'react';

//через спред и классы
export default class StateClass extends React.Component {

//это для дефортных пропсов:
    static defaultProps = {
        name: "Hello!"
    }
    
    constructor(props) {
        super(props);
        this.state = {
            pressed: false
        };
    };

        handleChange = () => {
            this.setState(
                {pressed: !this.state.pressed}
            );
        }
    render() {


        // по дефолту:
        const name = this.props.name;
        const {...props} = this.props;
        return (
            <button {...props} onClick={this.handleChange}>
                {this.state.pressed? "Pressed": "Click on me"}
            </button>
        );
    }
}

 