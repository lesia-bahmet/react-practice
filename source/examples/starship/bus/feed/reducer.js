// Instruments
import { FILL_STARSHIPS, STOP_FETCHING, START_FETCHING } from './types';

const initialState = {
    starships: [],
    isFetching: false,
};

export const feedReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case FILL_STARSHIPS:
            return { ...state, starships: payload };

        case START_FETCHING:
            return {...state, isFetching: true};

        case STOP_FETCHING:
            return {...state, isFetching: false};

        default:
            return state;
    }
};
