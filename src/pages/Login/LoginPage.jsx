import React, { useEffect } from 'react';
import styles from './LoginPage.module.css';
import LoginForm from '../../components/PageSpecific/login/LoginForm/LoginForm.jsx';
import useAuthMethods from '../../hooks/useAuthMethods.js';
import Header from '../../components/Header/Header.jsx'
const LoginPage = () => {
    const { checkIfAuthenticated, resetForm } = useAuthMethods();

    useEffect(() => {
        checkIfAuthenticated(); 
        resetForm(); 
    }, []);

    return (<div className={styles.pageContainer}>
                <Header/>
                <div className={styles.loginContainer}>
                    <div className={styles.header}>
                        <h2 className={`${styles.headerItem} ${styles.black}`}>
                            Panteon 
                            <span className={`${styles.white}`}>
                            Demo Project
                             </span>
                        </h2>
                    </div>
                <LoginForm/>
                </div>
            </div>
    );
};

export default LoginPage;
