import React from "react";
import { Navigate, useNavigate } from "react-router-dom";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { authState } from "../../store/authState";

type Props = {};

const Logout = (props: Props) => {
  const logout = useSetRecoilState(authState);
  logout(null);

  return <Navigate to="/" />;
};

export default Logout;
