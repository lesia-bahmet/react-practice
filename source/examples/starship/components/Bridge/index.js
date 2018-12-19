// Core
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';
import observatory from './observatory.jpg';
import { Link } from 'react-router-dom';
import {book} from '../../routes/book';

const mapState = state => ({
    profile: state.profile,
});

@connect(mapState)
export class Bridge extends Component {
    render() {
        const { profile } = this.props;

        return (
            <section className = { Styles.bridge }>
                <h1>
                    <FormattedMessage id="bridge.welcome"/>, {profile.firstName}
                    &nbsp;
                    {profile.lastName}!
                </h1>
                <img src = { observatory } />
                <Link to={book.panel}>
                    <button>
                        🖥 &nbsp;
                        <FormattedMessage id="bridge.control"/>
                    </button>
                </Link>
            </section>
        );
    }
}
