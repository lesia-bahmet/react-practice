// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

export default class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    setLoop(){
        while(true) console.log('111111');
    }

    render() {
        const { name, age } = this.state;

        // :(
        this.setState({
            age: 6001,
        });
        this.setLoop();

        return (
            <h1>
                Greetings! I am {name} and I am {age} years old!
            </h1>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
