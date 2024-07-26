import React from 'react';
import Form from '../../Form/Form.jsx';
import useAuthMethods from '../../../hooks/useAuthMethods.js'
import { useAuthContext } from '../../../contexts/AuthContext.jsx';

const RegisterForm = () => {

  const { registerFields } = useAuthContext();
  const { handleRegisterAsync } = useAuthMethods();  

  return (
    <Form
      fields={registerFields}
      onSubmit={handleRegisterAsync}
    />
  );
};

export default RegisterForm;