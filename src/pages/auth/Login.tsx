import React from "react";
import { useRecoilValue } from "recoil";
import LoginContainer from "../../components/login/LoginContainer";
import Redirections from "../../handler/Redirections";
import { isLoggedIn } from "../../store/authState";

type Props = {};

const Login = (props: Props) => {
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
  return <LoginContainer />;
};

export default Login;
