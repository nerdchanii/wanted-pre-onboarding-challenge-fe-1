import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../store/authState';
import { Navigate } from 'react-router-dom';

const AuthHandler = (WrappedComponent: any) => {
  const isLogin = useRecoilValue(isLoggedIn);
  if (isLogin) return <WrappedComponent />;
  return <Navigate to="/login" />;
};

export default AuthHandler;
