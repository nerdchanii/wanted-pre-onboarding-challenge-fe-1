import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLogin } from '@hooks/auth';
import LoginPresenter from './LoginPresenter';
import { loginValidator } from '@utils/validator';
import { useMutation } from '@tanstack/react-query';
type Props = {};

const LoginContainer = (props: Props) => {
  const navigate = useNavigate();
  const { login, isLoading } = useLogin();

  const [alertMessages, setAlertMessages] = React.useState<string[]>([]);
  const [loginForm, setLoginForm] = React.useState({
    email: '',
    password: '',
  });
  const [formValidations, setFormValidations] = React.useState({
    isValidEmail: false,
    isValidPassword: false,
  });

  const onChangeInputs = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    setLoginForm((prev) => ({ ...prev, [target.name]: target.value }));
    setFormValidations(
      loginValidator({ ...loginForm, [target.name]: target.value }),
    );
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { result, message } = await login(loginForm);
    if (!result) setAlertMessages([...alertMessages, message]);
    else navigate('/');
  };

  return (
    <LoginPresenter
      loginSubmit={loginSubmit}
      loginInputValues={loginForm}
      onChangeInputs={onChangeInputs}
      loading={isLoading}
      alertMessages={alertMessages}
      setAlertMessages={setAlertMessages}
      isValidEmail={formValidations.isValidEmail}
      isValidPassword={formValidations.isValidPassword}
    />
  );
};

export default LoginContainer;
