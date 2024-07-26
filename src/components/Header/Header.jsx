import React from 'react';
import { Link } from 'react-router-dom';
import useAuthMethods from '../../hooks/useAuthMethods';
import styles from './Header.module.css';
import { useLocation } from 'react-router-dom';

const Header = () => {
    const { handleLogOutAsync } = useAuthMethods();

    const pathname = useLocation().pathname;

    const linkDestination = pathname === '/login' ? '/register' : '/login';
    const linkText = pathname === '/login' ? 'Register' : 'Login';

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    {pathname == '/' ? (
                        <li>
                            <button className={styles.button} onClick={() => handleLogOutAsync()}>Logout</button>
                        </li>
                    ) : (
                        <li>
                            <Link className={styles.link} to={linkDestination}>{linkText}</Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;
