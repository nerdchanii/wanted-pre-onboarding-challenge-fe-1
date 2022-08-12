import React from "react";
import { useRecoilValue } from "recoil";
import Redirections from "./Redirections";
import { isLoggedIn } from "../store/authState";

const AuthHandler = (WrappedComponent: any) => {
  const isLogin = useRecoilValue(isLoggedIn);
  if (isLogin) return <WrappedComponent />;
  return (
    <Redirections
      to="/login"
      title="로그인이 필요합니다"
      message="로그인페이지로 이동합니다"
    />
  );
};

export default AuthHandler;
