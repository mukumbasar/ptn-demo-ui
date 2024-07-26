import React from 'react';
import Form from '../../../Form/Form.jsx';
import useAuthMethods from '../../../../hooks/useAuthMethods.js';
import { useAuthContext } from '../../../../contexts/AuthContext.jsx';

const LoginForm = () => {
  
  const { loginFields} = useAuthContext();
  const { handleLogInAsync } = useAuthMethods();

  return (
    <Form
      fields={loginFields}
      onSubmit={handleLogInAsync}
    />
  );
};

export default LoginForm;