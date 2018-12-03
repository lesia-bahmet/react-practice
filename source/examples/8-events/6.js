// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

class Parent extends Component {
    state = {
        answer: '',
    };

    _handleChange = (event) => {
        console.log('→ previous state:', this.state.answer);
        console.log('→     next state:', event.target.value);

        event.persist();
        this.setState(() => ({
            answer: event.target.value,
        }));

        // this.setState({
        //     answer: event.target.value,
        // });
    };

    render() {
        const { answer } = this.state;

        return (
            <div
                style = {{
                    display:         'flex',
                    justifyContent:  'center',
                    alignItems:      'center',
                    flexDirection:   'column',
                    height:          '100vh',
                    backgroundColor: '#070a13',
                }}>
                <h1 style = {{ color: 'wheat' }}>How do you do?</h1>
                <input
                    placeholder = 'Type here'
                    type = 'text'
                    value = { answer }
                    onChange = { this._handleChange }
                />
            </div>
        );
    }
}

render(<Parent />, document.getElementById('app'));
