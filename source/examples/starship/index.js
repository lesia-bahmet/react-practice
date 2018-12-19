// Core
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router } from 'react-router-dom';

// Instruments
import { store } from './init/store';
import { history } from './init/middleware';

// Components
import { Routes } from './routes';

// Intl
import { IntlProvider } from 'react-intl-redux'

render(
    <Provider store = { store }>
        <IntlProvider>
            <Router history = { history }>
                <Routes />
            </Router>
        </IntlProvider>
    </Provider>,
    document.getElementById('app'),
);
