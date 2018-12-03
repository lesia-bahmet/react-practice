// Core
import React, { Component } from 'react';
import { render } from 'react-dom';

const Child = (props) => {
    props.profile.name = 'Vasya';
    return (
        <React.Fragment>
        <h1>{props.message}</h1>
        <p>{props.profile.name}</p>
        </React.Fragment>
    );
};

class Parent extends Component {
    data = {
        message: 'Lumus!',
        profile: {
            name: 'test',
        }
    };
    render() {
        return <Child {...this.data} />;
    }
}

render(<Parent />, document.getElementById('app'));
