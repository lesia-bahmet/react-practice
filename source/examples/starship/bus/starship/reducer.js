// Instruments
import { SET_CURRENT_STARSHIP } from './types';

const initialState = null;

export const starshipReducer = (state = initialState, { type, payload }) => {
    switch (type) {
        case SET_CURRENT_STARSHIP:
            return payload;

        default:
            return state;
    }
};
