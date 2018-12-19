const swapiUrl = 'https://swapi.co/api';

export const fetchStarsips = () => {
    return fetch(`${swapiUrl}/starships`);
};
