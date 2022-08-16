import React from 'react';
import { useRecoilValue } from 'recoil';
import { isLoggedIn } from '../../store/authState';
import Redirections from '../../handler/Redirections';
import SignupContainer from '../../components/signup/SignupContainer';

type Props = {};

const Signup = (props: Props) => {
  const isLogin = useRecoilValue(isLoggedIn);

  if (isLogin) {
    return (
      <Redirections
        to="/"
        message="홈으로 이동합니다"
        title="이미 로그인중입니다"
      />
    );
  }
  return <SignupContainer />;
};

export default Signup;
