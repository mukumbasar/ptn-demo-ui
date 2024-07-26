import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import useAuthMethods from '../../hooks/useAuthMethods';
import styles from './Header.module.css';

const Header = () => {
    const { handleLogOutAsync } = useAuthMethods();
    const pathname = useLocation().pathname;
    const navigate = useNavigate();

    const linkDestination = pathname === '/login' ? '/register' : '/login';
    const linkText = pathname === '/login' ? 'Register' : 'Login';

    const handleClick = async (event) => {
        event.preventDefault();
        if (pathname === '/') {
            await handleLogOutAsync();
            navigate('/login');
        }
    };

    return (
        <header className={styles.header}>
            <nav className={styles.nav}>
                <ul>
                    {pathname === '/' ? (
                        <li>
                            <Link
                                className={styles.link}
                                to="#"
                                onClick={handleClick}
                            >
                                Log Out
                            </Link>
                        </li>
                    ) : (
                        <li>
                            <Link className={styles.link} to={linkDestination}>
                                {linkText}
                            </Link>
                        </li>
                    )}
                </ul>
            </nav>
        </header>
    );
};

export default Header;