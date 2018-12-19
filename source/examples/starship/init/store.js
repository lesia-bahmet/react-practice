// Core
import { createStore, applyMiddleware } from 'redux';

// Instruments
import { rootReducer } from './rootReducer';
import { rootSaga } from './rootSaga';
import { composeEnhancers, middleware, sagaMiddleware } from './middleware';

import { addLocaleData } from 'react-intl';
import ru from 'react-intl/locale-data/ru';
import uk from 'react-intl/locale-data/uk';

addLocaleData(ru);
addLocaleData(uk);

import messages_ru from "./../translations/ru.json";
import messages_uk from "./../translations/uk.json";

const messages = {
    'ru': messages_ru,
    'uk': messages_uk
};

const initialState = {
    intl: {
        locale: 'uk',
        messages: messages['uk'],
    },
};

export const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(applyMiddleware(...middleware)),
);

sagaMiddleware.run(rootSaga);
