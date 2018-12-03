// Core
import { combineReducers } from 'redux';

// Reducers
import { postsReducer as posts } from '../reducers/posts';

export const rootReducer = combineReducers({
    posts,
});
