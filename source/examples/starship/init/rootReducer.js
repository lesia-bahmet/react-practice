// Core
import { combineReducers } from 'redux';
import { intlReducer as intl } from 'react-intl-redux'

// Reducers
import { feedReducer as feed } from '../bus/feed/reducer';
import { profileReducer as profile } from '../bus/profile/reducer';
import { starshipReducer as starship } from '../bus/starship/reducer';

export const rootReducer = combineReducers({
    feed,
    profile,
    starship,
    intl,
});
