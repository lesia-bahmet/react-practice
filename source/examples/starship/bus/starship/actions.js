import {SET_CURRENT_STARSHIP} from './types';

export const setCurrentStarship = (starship) => ({
    type:    SET_CURRENT_STARSHIP,
    payload: starship,
});
