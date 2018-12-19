// Core
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import { updateIntl } from 'react-intl-redux';

// Instruments
import Styles from './styles.m.css';
import {book} from './../../routes/book';

import messages_ru from "./../../translations/ru.json";
import messages_uk from "./../../translations/uk.json";

const messages = {
    'ru': messages_ru,
    'uk': messages_uk
};

const mapState = state => ({
    intl: state.intl,
});

const mapDispatch = {
    updateLocale: updateIntl,
};

const LocaleButton = props => {

    const handleChangeLocale = () => {
        const locale = props.intl.locale === 'ru' ? 'uk' : 'ru';
        props.updateLocale({
            messages: messages[locale],
            locale
        });
    };

    return (
        <button className = {Styles.updateLocale} onClick={handleChangeLocale}>
        <span>{props.intl.locale === 'uk' ? '🇷🇺' : '🇺🇦'}&nbsp;
            <FormattedMessage id="nav.language" />
        </span>
        </button>
    )
};

const UpdateLocaleButton = connect(mapState, mapDispatch)(LocaleButton);

@withRouter
export class Nav extends Component {

    goToProfile = () => {
        this.props.history.push(book.profile);
    };

    goToPanel = () => {
        this.props.history.push(book.panel);
    };

    goToBridge = () => {
        this.props.history.push(book.root);
    };

    render() {
        const { location } = this.props;
        if(location.pathname === book.root) {
            return <section className = { Styles.nav }>
                <UpdateLocaleButton />
            </section>;
        }

        return <section className = { Styles.nav }>
            <button onClick={this.goToBridge} className = {Styles.bridge}>
                🛰&nbsp;
                <FormattedMessage
                    id="nav.bridge"
                />
            </button>
            <button onClick={this.goToProfile}>
                👩🏼‍🚀&nbsp;
                <FormattedMessage
                    id="nav.profile"
                />
            </button>
            <button onClick={this.goToPanel}>
                🖥&nbsp;
                <FormattedMessage
                    id="nav.panel"
                />
            </button>
            <UpdateLocaleButton />
        </section>;
    }
}
