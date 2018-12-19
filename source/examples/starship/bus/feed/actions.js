// Types
import {
    FILL_STARSHIPS,
    FETCH_STARSHIPS_ASYNC,
    START_FETCHING,
    STOP_FETCHING,
} from './types';

export const fillStarships = (starships) => ({
    type:    FILL_STARSHIPS,
    payload: starships,
});

export const fetchStarshipsAsync = () => ({
    type:    FETCH_STARSHIPS_ASYNC,
});

export const startFetching = () => ({
    type: START_FETCHING,
});

export const stopFetching = () => ({
    type: STOP_FETCHING,
});
