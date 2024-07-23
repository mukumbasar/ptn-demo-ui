import axios from 'axios';

const logIn = (username, password) => {
    return new Promise((resolve, reject) => {
        axios.post('...account/logIn', {
            Username: username,
            Password: password
        })
        .then(response => {
                localStorage.setItem('access_token', response.data.Data.Jwt);
                resolve(response.data.Message);
        })
        .catch(error => {
            const errorMessage = error.response.data
                ? error.response.data.Message || 'An error occurred'
                : 'An error occurred';
            reject(new Error(errorMessage));
        });
    });
};

const register = (username, email, password) => {
    return new Promise((resolve, reject) => {
        axios.post('...account/register', {
            Username: username,
            Email: email,
            Password: password
        })
        .then(response => {
            console.log('Registration successful.');
            resolve(response.data.Message);
        })
        .catch(error => {
            const errorMessage = error.response.data
                ? error.response.data.Message || 'An error occurred'
                : 'An error occurred';
            reject(new Error(errorMessage));
        });
    });
};

const logOut = async () => {
    localStorage.removeItem('access_token');
    console.log('Logged out successfully');
};

export {logIn, register, logOut};
  
  
  
  
  
  
  