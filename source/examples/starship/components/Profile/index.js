// Core
import React, { Component } from 'react';
import {connect} from 'react-redux';
import { withFormik } from 'formik';
import { FormattedMessage } from 'react-intl';

// Instruments
import Styles from './styles.m.css';
import {fillProfile} from '../../bus/profile/actions';

const mapState = state => ({
    profile: state.profile,
});

const mapDispatch = {
    fillProfile,
};

const Form = (props) => {
    const {
        values,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
    } = props;
    return (
        <form onSubmit={handleSubmit}>
            <input
                className={isSubmitting ? Styles.disabled: ''}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.firstName}
                name="firstName"
            />
            <input
                className={isSubmitting ? Styles.disabled: ''}
                type="text"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.lastName}
                name="lastName"
            />
            <button type="submit" className={isSubmitting ? Styles.disabled: ''}>
                {isSubmitting ? '⏳ ' : '✅ '}
                {
                    isSubmitting ?
                        <FormattedMessage id="profile.updating"/> :
                        <FormattedMessage id="profile.update"/>
                }
            </button>
        </form>
    );
};

const EnhancedForm = withFormik({
    mapPropsToValues: (props) => {
        const {firstName, lastName} = props;
        return { firstName, lastName };
    },

    handleSubmit: (values, {props, setSubmitting}) => {
        setSubmitting(true);
        setTimeout(() => {
            props.handleSubmit(values);
            setSubmitting(false);
        }, 2000);
    },

    displayName: 'BasicForm',
})(Form);

@connect(mapState, mapDispatch)
export class Profile extends Component {
    render() {
        const {
            profile: { firstName, lastName },
            fillProfile,
        } = this.props;

        return (
            <section className = { Styles.profile }>
                <h1>
                    👩🏼‍🚀 {firstName} {lastName}
                </h1>

                <EnhancedForm
                    firstName={firstName}
                    lastName={lastName}
                    handleSubmit={fillProfile}
                />

            </section>
        );
    }
}
