import { logInAsync, logOutAsync, registerAsync } from '../services/authService.js';
import { useNavigate, useLocation } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthContext } from '../contexts/AuthContext.jsx';
import Cookies from 'js-cookie';

const useAuthMethods = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {username, email, password, setUsername, setEmail, setPassword} = useAuthContext();

    const handleLogInAsync = async () => {
        try {
            const message = await logInAsync(username, password);
            resetForm();
            checkIfAuthenticated();
            toast.success(message);
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleRegisterAsync = async () => {
        try {
            const message = await registerAsync(username, email, password);
            toast.success(message);
            resetForm();
            navigate('/login');
        } catch (error) {
            toast.error(error.message);
        }
    };

    const handleLogOutAsync = async () => {
        try {
            await logOutAsync();
            resetForm();
            checkIfAuthenticated();
        } catch (error) {
            toast.error(error.message);
        }
    };

    const checkIfAuthenticated = () => {
        const jwt = Cookies.get('jwt');
        if (jwt) {
            navigate('/');
            return true;
        }
        if(location.pathname == '/') navigate('/login');
        return false;
    };

    const resetForm = () => {
        setUsername(''); 
        setEmail(''); 
        setPassword('');
    }

    return { handleLogInAsync, handleRegisterAsync, handleLogOutAsync, checkIfAuthenticated };
};

export default useAuthMethods;
