import React from "react";
import { useNavigate } from "react-router-dom";
import useAuthService from "../hooks/useAuthService";
import LoginPresenter from "./LoginPresenter";
import { loginValidator } from "../../utils/validator";
type Props = {};

const LoginContainer = (props: Props) => {
  const navigate = useNavigate();
  const [loading, login] = useAuthService("login");
  const [alertMessages, setAlertMessages] = React.useState<string[]>([]);
  const [loginRequestData, setLoginRequestData] = React.useState({
    email: "",
    password: "",
  });
  const [formValidations, setFormValidations] = React.useState({
    isValidEmail: false,
    isValidPassword: false,
  });

  const onChangeInputs = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { target } = e;
    setLoginRequestData((prev) => ({ ...prev, [target.name]: target.value }));
    setFormValidations(
      loginValidator({ ...loginRequestData, [target.name]: target.value })
    );
  };

  const loginSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = loginRequestData;
    const { result, message } = await login({ email, password });
    if (!result) setAlertMessages([...alertMessages, message]);
    else navigate("/");
  };

  return (
    <LoginPresenter
      loginSubmit={loginSubmit}
      loginInputValues={loginRequestData}
      onChangeInputs={onChangeInputs}
      loading={loading}
      alertMessages={alertMessages}
      setAlertMessages={setAlertMessages}
      isValidEmail={formValidations.isValidEmail}
      isValidPassword={formValidations.isValidPassword}
    />
  );
};

export default LoginContainer;
