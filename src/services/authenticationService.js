import axios from 'axios';

const logIn = async (username, password) => {
    try {
        const response = await axios.post('...account/logIn', {
            Username: username,
            Password: password
        });
        localStorage.setItem('access_token', response.data.Data.Jwt);
        return response.data.Message;
    } catch (error) {
        const errorMessage = error.response && error.response.data
            ? error.response.data.Message || 'An error occurred'
            : 'An error occurred';
        throw new Error(errorMessage);
    }
};

const register = async (username, email, password) => {
    try {
        const response = await axios.post('...account/register', {
            Username: username,
            Email: email,
            Password: password
        });
        return response.data.Message;
    } catch (error) {
        const errorMessage = error.response && error.response.data
            ? error.response.data.Message || 'An error occurred'
            : 'An error occurred';
        throw new Error(errorMessage);
    }
};

const logOut = async () => {
    localStorage.removeItem('access_token');
};

export {logIn, register, logOut};
  
  
  
  
  
  
  