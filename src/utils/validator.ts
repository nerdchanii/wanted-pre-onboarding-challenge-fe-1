import { InterfaceAuthenticationRequest } from '../apis/types';

interface InterfaceAuthRequestFormData extends InterfaceAuthenticationRequest {
  passwordConfirm: string;
}

const isEmail = (email: string) => {
  // const emailRegex = /^[a-Z0-9._%+-]{4,}+@[a-Z0-9.-]{3,}+\.[a-Z]{2,4}$/i;
  const emailRegex = /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,4}$/;
  return emailRegex.test(email);
};

const hasLength = (value: string, min: number) => {
  return value.length >= min;
};

const loginValidator = (data: InterfaceAuthenticationRequest) => {
  return {
    isValidEmail: isEmail(data.email),
    isValidPassword: hasLength(data.password, 8),
  };
};

const signUpValidator = (data: InterfaceAuthRequestFormData) => {
  const { email, password, passwordConfirm } = data;
  console.log(email, password, passwordConfirm);
  return {
    isValidEmail: isEmail(email),
    isValidPassword: hasLength(password, 8),
    isValidPasswordConfirm: password === passwordConfirm,
  };
};

export { loginValidator, signUpValidator };
