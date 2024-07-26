import { logInAsync, logOutAsync, registerAsync } from '../services/authService.js';
import { useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { toast } from 'react-toastify';
import { useAuthContext } from '../contexts/AuthContext.jsx';

const useAuthMethods = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {username, email, password, setUsername, setEmail, setPassword} = useAuthContext();

    const handleLogInAsync = async () => {
        try {
            const message = await logInAsync(username, password);
            const isAuthenticated = checkIfAuthenticated();
            console.log(message);
            if(isAuthenticated) 
            {
                toast.success(message);
            }
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleRegisterAsync = async () => {
        try {
            const message = await registerAsync(username, email, password);
            toast.success(message);
            completeRegistration();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleLogOutAsync = async () => {
        try {
            await logOutAsync();
            checkIfAuthenticated();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const checkIfAuthenticated = () => {
        const authHeader = axios.defaults.headers.common['Authorization'];
        const isJwt = authHeader && authHeader.startsWith('Bearer ');
        if (isJwt) {
            navigate('/');
            return true;
        }
        if(location.pathname !== '/register')
            navigate('/login');
        return false;
    };

    const completeRegistration = () => {
        setUsername(''); 
        setEmail(''); 
        setPassword('');
        navigate('/login');
    }

    return { handleLogInAsync, handleRegisterAsync, handleLogOutAsync, checkIfAuthenticated };
};

export default useAuthMethods;
