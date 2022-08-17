import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../store/authState';
import SignupContainer from '../../components/signup/SignupContainer';
import { Navigate } from 'react-router-dom';

type Props = {};

const Signup = (props: Props) => {
  const isLogin = useRecoilValue(isLoggedIn);
  if (isLogin) return <Navigate to="/" />;
  return <SignupContainer />;
};

export default Signup;
