import { createContext, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import {logIn, logOut, register} from '../services/authenticationService.js';

export const AuthenticationContext = createContext()

export const AuthenticationProvider = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    const navigate = useNavigate();

    const handleLogin = async () => {
        try {
            const message = await logIn(username, password);
            setIsAuthenticated(true);
            navigate('/');
            console.log('Login successful:', message);
        } catch (error) {
            console.error('Login failed:', error.message);
            setLoginError(error.message);
        }
    };

    const handleRegister = async () => {
        try {
            const message = await register(username, email, password);
            navigate('/login');
            console.log(message);
        } catch (error) {
            console.error(error.message);
        }
    };

    const handleLogOut = async () => {
        try {
            await logOut(); 
            setIsAuthenticated(false);
            navigate('/login'); 
            console.log('Logout successful');
        } catch (error) {
            console.error('Logout failed:', error.message);
        }
    };

    return (
        <AuthenticationContext.Provider value={{
            loginError, username, password, 
            setPassword, setUsername, handleLogin,
            handleLogOut ,handleRegister ,isAuthenticated}}>
            {children}
        </AuthenticationContext.Provider>
    )
}

export const useAuthenticationContext = () => {
    return useContext(AuthenticationContext);
};