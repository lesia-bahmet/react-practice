// Types
import {
    REMOVE_POST,
    CREATE_POST,
    CREATE_POST_ASYNC,
} from '../core/bus/posts/types';

// Instruments
import { Post } from 'helpers';

const initialState = [{ id: '123', comment: 'first reducer comment.' }];

export const prependReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case CREATE_POST:
        case CREATE_POST_ASYNC:
            return [ new Post('☝🏼 Prepended post'), ...state ];

        case REMOVE_POST:
            return state.filter((post) => post.id !== payload);

        default:
            return state;
    }
};
