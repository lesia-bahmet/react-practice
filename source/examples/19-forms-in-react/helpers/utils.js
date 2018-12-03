export const delay = (timeout) => new Promise((resolve) => setTimeout(resolve, timeout));

export const schema = null;

export const saveCredentials = ({email, password, remember}) => {
    localStorage.setItem('email', email);
    localStorage.setItem('password', password);
    localStorage.setItem('remember', remember ? 1 : 0);
};

export const getCredentials = () => ({
   email: localStorage.getItem('email') || '',
   password: localStorage.getItem('password') || '',
   remember: localStorage.getItem('remember'),
});
