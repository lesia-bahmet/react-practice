// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Wizard extends Component {
    state = {
        name: 'Gendalf',
        age:  6000,
    };

    renders = 0;

    _increaseAge = () => {
        this.setState(({ age }) => ({
            age: age + 1,
        }));
    };

    _getPowers = () => {
        setTimeout(() => {
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
            this._increaseAge();
        }, 1000);
    };

    render() {
        const { name, age } = this.state;

        this.renders += 1;
        console.log('→ renders:', this.renders);

        return (
            <>
                <h1>
                    Greetings. My name is {name} and I am {age} years old.
                </h1>
                <button onClick = { this._getPowers }>Get powers!</button>
            </>
        );
    }
}

render(<Wizard />, document.getElementById('app'));
