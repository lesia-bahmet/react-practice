// Core
import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { Formik, withFormik } from 'formik';

// Instruments
import Styles from './styles.m.css';
import { delay, schema, saveCredentials, getCredentials } from '../helpers';

// Components
import { LoginForm } from './LoginForm';

const {email, password, remember} = getCredentials();
const EnhancedLoginForm = withFormik({
    mapPropsToValues: () => ({
        email: email,
        password: password,
        remember: remember,
    }),
    validate: values => {
        const errors = {};

        if (!values.email) {
            errors.email = 'Required';
        }

        if(!values.password) {
            errors.password = 'Required';
        }

        return errors;
    },
    handleSubmit: (values, { setSubmitting }) => {
        const {email, password, remember} = values;

        if(remember){
            saveCredentials({ email, password, remember });
        }

        delay(5000).then(()=>{
            setSubmitting(false);
        })
    }
})(LoginForm);

@hot(module)
export class LoginPage extends Component {
    render() {
        return (
            <section className={Styles.loginPage}>
                <EnhancedLoginForm />
            </section>
        );
    }
}