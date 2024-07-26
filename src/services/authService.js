import axios from 'axios';

const logInAsync = async (username, password) => {
    try {
        const formData = new FormData();
        formData.append('Username', username);
        formData.append('Password', password);

        const response = await axios({
            method: 'POST',
            url: 'https://ptndemoapi.azurewebsites.net/account/log-in',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${response.data.data.jwt}`;
        return response.data.message || 'Login Success';
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'A login error occurred.';
        throw new Error(errorMessage);
    }
};

const registerAsync = async (username, email, password) => {
    try {
        const formData = new FormData();
        formData.append('Username', username);
        formData.append('Email', email);
        formData.append('Password', password);

        const response = await axios({
            method: 'POST',
            url: 'https://ptndemoapi.azurewebsites.net/account/register',
            data: formData,
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        });

        return response.data.message || "Register Success";
    } catch (error) {
        const errorMessage = error.response?.data?.message || 'An error occurred';
        throw new Error(errorMessage);
    }
};

const logOutAsync = async () => {
    delete axios.defaults.headers.common['Authorization'];
};

export { logInAsync, registerAsync, logOutAsync };