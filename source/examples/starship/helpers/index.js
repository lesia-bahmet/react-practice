export const createRouteFromName = (name) => {
    return name.replace('-', ' ').split(' ').join('-').toLowerCase();
};