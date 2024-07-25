import React, {useEffect} from 'react';
import styles from './RegisterPage.module.css';
import { useAuthenticationContext } from '../../contexts/AuthenticationContext.jsx';
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
    const { registerError, username, email, password, setUsername, 
        setEmail, setPassword, handleRegister, isAuthenticated, handleLogOut 
    } = useAuthenticationContext();
    
    const navigate = useNavigate();

    useEffect(() => {
        setUsername('');
        setPassword('');
        setEmail('');
    }, [setUsername, setPassword, setEmail]);

    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        }
    }, []);

    return (
        <div className={styles.registerContainer}>
            <div className={styles.header}>
                <h2 className={`${styles.headerItem} ${styles.white}`}>
                    Register to add and delete <span className={styles.black}>buildings </span>
                - on a datagrid.</h2>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleRegister();
                }}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        className={styles.inputField}
                    />
                    <input 
                        type="email" 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)} 
                        placeholder="Email" 
                        className={styles.inputField}
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.submitButton}>Register</button>
                    {registerError && <p className={styles.errorMessage}>{registerError}</p>}
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;
