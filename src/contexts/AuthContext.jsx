import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

const AuthProvider = ({ children }) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');

    const loginFields = [
        { type: 'text', value: username, onChange: setUsername, placeholder: 'Username:' },
        { type: 'password', value: password, onChange: setPassword, placeholder: 'Password:' },
      ];
    const registerFields = [
        { type: 'email', value: email, onChange: setEmail, placeholder: 'Email:' },
        { type: 'text', value: username, onChange: setUsername, placeholder: 'Username:' },
        { type: 'password', value: password, onChange: setPassword, placeholder: 'Password:' },
      ];  

    return (
        <AuthContext.Provider value={{
            username, password, email,
            setUsername, setPassword, setEmail,
            loginFields, registerFields}}>
            {children}
        </AuthContext.Provider>
    );
};

const useAuthContext = () => useContext(AuthContext);

export { AuthProvider, useAuthContext };