// Core
import React, { Component, createRef } from 'react';
import { render } from 'react-dom';

// Функциональным компонентам нельзя передавать ref
// потому что у них нет экземпляров
class Input extends Component {
    state = {
        isCoral: true,
    };

    _toggleColor = () => this.setState(({ isCoral }) => ({ isCoral: !isCoral }));

    render() {
        const { isCoral } = this.state;

        const text = isCoral ? 'coral' : 'rebeccapurple';

        return (
            <h1 style = {{ color: isCoral ? 'coral' : 'rebeccapurple' }}>
                🐈 {text}
            </h1>
        );
    }
}

class Parent extends Component {
    // Будучи привязанной к классовому компоненту
    // получает ссылку на его экземпляр
    inputRef = createRef();

    _handleClick = () => {
        this.inputRef.current._toggleColor();
    };

    render() {
        return (
            <>
                <Input ref = { this.inputRef } />
                <button onClick = { this._handleClick }>Click</button>
            </>
        );
    }
}

render(<Parent />, document.getElementById('app'));
