import React, { useEffect } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/LoginForm/LoginForm.jsx';
import { useAuthContext } from '../../contexts/AuthContext.jsx'

const LoginPage = () => {
    
    useEffect(() => {
        if(isAuthenticated) {
            navigate('/');
        }
    }, []);

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
            <LoginForm/>
        </div>
    );
};

export default LoginPage;
