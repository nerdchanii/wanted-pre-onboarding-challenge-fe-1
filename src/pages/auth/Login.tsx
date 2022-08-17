import React from 'react';
import { Navigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import LoginContainer from '../../components/login/LoginContainer';
import { isLoggedIn } from '../../store/authState';

type Props = {};

const Login = (props: Props) => {
  const isLogin = useRecoilValue(isLoggedIn);
  if (isLogin) return <Navigate to="/" />;
  return <LoginContainer />;
};

export default Login;
