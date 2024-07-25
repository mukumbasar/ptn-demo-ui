import { logIn as apiLogIn, logOut as apiLogOut, register as apiRegister } from '../services/authService.js';

export const handleLogIn = async (username, password, navigate) => {
    try {
        const message = await apiLogIn(username, password);
        navigate('/');
        // touch notification with message
    } catch (error) {
        const errorMessage = error.message || 'A login error occurred.';
        // touch notification with errorMessage
    }
};

export const handleRegister = async (username, email, password, navigate) => {
    try {
        await apiRegister(username, email, password);
        navigate('/login');
    } catch (error) {
        // touch notification - get as input
    }
};

export const handleLogOut = async (navigate) => {
    try {
        await apiLogOut();
        navigate('/login');
    } catch (error) {
        // touch notification - get as input
    }
};