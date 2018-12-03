// Core
import React, { Component } from 'react';
import classNames from 'classnames';
import { Field } from 'formik';

// Instruments
import Styles from './styles.m.css';

export class LoginForm extends Component {
    render() {

        console.log(this.props);
        const {
            values,
            errors,
            isSubmitting,
            handleSubmit,
        } = this.props;

        const nameClasses = classNames({
            [Styles.invalidInput]: errors.email,
            [Styles.disabled]: isSubmitting,
        });
        const passwordClasses = classNames({
            [Styles.invalidInput]: errors.password,
            [Styles.disabled]: isSubmitting,
        });
        const submitClasses = classNames({
            [Styles.disabled]: errors.email || errors.password || isSubmitting,
        });

        return (
            <form onSubmit={handleSubmit}>
                <Field
                    className={nameClasses}
                    type="email"
                    name="email"
                    value={values.email}
                />
                <Field
                    className={passwordClasses}
                    type="password"
                    name="password"
                    value={values.password}
                />
                <label>
                    <Field
                        type="checkbox"
                        name="remember"
                        value={values.remember}
                        />
                    <span>Запомнить меня</span>
                </label>
                <button type="submit" className={submitClasses}>
                    Войти
                </button>
            </form>
        );
    }
}
