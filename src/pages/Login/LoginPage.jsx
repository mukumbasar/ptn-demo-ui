import React from 'react';
import styles from './LoginPage.module.css';
import { useAuthenticationContext } from '../../contexts/AuthenticationContext.jsx';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const { loginError, username, password, setPassword, setUsername, handleLogin } = useAuthenticationContext();
    const navigate = useNavigate();
    
    const handleRegister = () => {
        navigate('/register');
    };
    
    return (
        <div className={styles.loginContainer}>
            <div className={styles.header}>
                <h2 className={`${styles.headerItem} ${styles.black}`}>
                    Panteon
                </h2>
                <h2 className={`${styles.headerItem} ${styles.white}`}>
                    <span>Demo Project</span>
                </h2>
            </div>
            <div className={styles.formContainer}>
                <form onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}>
                    <input 
                        type="text" 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        placeholder="Username" 
                        className={styles.inputField}
                    />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        placeholder="Password" 
                        className={styles.inputField}
                    />
                    <button type="submit" className={styles.submitButton}>Log In</button>
                    <button type="button" className={styles.submitButton} onClick={handleRegister}>Register</button>
                    {loginError && <p className={styles.errorMessage}>{loginError}</p>}
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
