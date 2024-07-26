import React, {useEffect} from 'react';
import styles from './RegisterPage.module.css';
import RegisterForm from '../../components/PageSpecific/register/RegisterForm.jsx';
import useAuthMethods from '../../hooks/useAuthMethods.js';
import Header from '../../components/Header/Header.jsx';

const RegisterPage = () => {
    const { checkIfAuthenticated, resetForm } = useAuthMethods();

    useEffect(() => {
        checkIfAuthenticated(); 
        resetForm(); 
    }, []);

    return (
        <div className={styles.pageContainer}>
            <Header/>
            <div className={styles.registerContainer}>
            <div className={styles.header}>
            <h2 className={`${styles.headerItem} ${styles.white}`}>
                    Register to add and delete 
                    <span className={`${styles.black}`}>
                    buildings
                    </span>
                    via data grid.
                </h2>
            </div>
            <RegisterForm/>
        </div>
        </div>
        
    );
};

export default RegisterPage;
