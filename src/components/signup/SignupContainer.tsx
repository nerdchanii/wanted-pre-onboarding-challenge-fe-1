import React from 'react';
import { useNavigate } from 'react-router-dom';
import SignupPresenter from './SignupPresenter';
import useAuthService from '@hooks/useAuthService';
import { signUpValidator } from '@utils/validator';

// 상태와 action, api 주입
const SignupContainer = () => {
  const [loading, signup] = useAuthService('signup');

  const [inputs, setInputs] = React.useState({
    email: '',
    password: '',
    passwordConfirm: '',
  });
  const [alertMessages, setAlertMessages] = React.useState<string[]>([]);
  const [validations, setValidations] = React.useState({
    isValidEmail: false,
    isValidPassword: false,
    isValidPasswordConfirm: false,
  });
  const navigate = useNavigate();

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
    setValidations(signUpValidator({ ...inputs, [name]: value }));
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { email, password } = inputs;
    const response = await signup({ email, password });
    if (!response) return setAlertMessages(['서버 오류']);
    else {
      if (response.result) {
        navigate('/');
      } else {
        setAlertMessages([...alertMessages, response.message]);
      }
    }
  };

  return (
    <SignupPresenter
      signupSubmit={onSubmit}
      onChangeInputs={onChange}
      inputs={inputs}
      loading={loading}
      alertMessages={alertMessages}
      setAlertMessages={setAlertMessages}
      validations={validations}
    />
  );
};

export default SignupContainer;
