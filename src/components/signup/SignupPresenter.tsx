import { LoadingButton } from '@mui/lab';
import { FormControl, Grid, Link, TextField, Typography } from '@mui/material';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AlertContainer from '../Alert/AlertContainer';

type Props = {
  signupSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  onChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  inputs: {
    email: string;
    password: string;
    passwordConfirm: string;
  };
  loading: boolean;
  alertMessages: string[];
  setAlertMessages: (alertMessages: string[]) => void;
  validations: {
    isValidEmail: boolean;
    isValidPassword: boolean;
    isValidPasswordConfirm: boolean;
  };
};

const SignupPresenter = ({
  signupSubmit,
  onChangeInputs,
  inputs,
  validations,
  loading,
  alertMessages,
  setAlertMessages,
}: Props) => {
  const { email, password, passwordConfirm } = inputs;
  const { isValidEmail, isValidPassword, isValidPasswordConfirm } = validations;

  return (
    <>
      <AlertContainer
        alertMessages={alertMessages}
        setAlertMessages={setAlertMessages}
      />
      <Grid
        container
        alignItems="center"
        minHeight={'100vh'}
        justifyContent="center"
      >
        <Grid item xs={8} sm={6} md={4}>
          <FormControl fullWidth margin="dense">
            <form onSubmit={signupSubmit}>
              <Typography
                component="h1"
                variant="h6"
                align="left"
                marginY={2}
                sx={sx.Title}
              >
                회원가입
              </Typography>
              <TextField
                name="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={onChangeInputs}
                color="primary"
                variant="outlined"
                label="email"
                required
                error={!isValidEmail && email !== ''}
                helperText={
                  isValidEmail
                    ? ' '
                    : email === ''
                    ? ' '
                    : '올바른 이메일 형식이 아닙니다'
                }
                sx={sx.Input}
              />
              <TextField
                name="password"
                type="password"
                placeholder="비밀번호"
                label="password"
                value={password}
                onChange={onChangeInputs}
                color="primary"
                required
                error={!isValidPassword && password !== ''}
                helperText={
                  isValidPassword
                    ? ' '
                    : password === ''
                    ? ' '
                    : '올바른 비밀번호 형식이 아닙니다'
                }
                sx={sx.Input}
              />
              <TextField
                name="passwordConfirm"
                type="password"
                placeholder="비밀번호 확인"
                label="passwordConfirm"
                value={passwordConfirm}
                onChange={onChangeInputs}
                color="primary"
                required
                error={!isValidPasswordConfirm && passwordConfirm !== ''}
                helperText={
                  isValidPasswordConfirm
                    ? ' '
                    : passwordConfirm === ''
                    ? ' '
                    : '비밀번호가 일치하지 않습니다'
                }
                sx={sx.Input}
              />
              <LoadingButton
                loading={loading}
                loadingPosition="center"
                type="submit"
                size="large"
                variant="contained"
                disabled={
                  !(isValidEmail && isValidPassword && isValidPasswordConfirm)
                }
                sx={sx.Button}
              >
                회원가입
              </LoadingButton>
              <Typography
                variant="body2"
                align="right"
                sx={{ textAlign: 'end', marginY: 2 }}
              >
                아이디가 있으신가요?
                <Link
                  component={RouterLink}
                  to="/login"
                  color="primary"
                  paddingLeft={2}
                  sx={{ textDecoration: 'none' }}
                >
                  로그인
                </Link>
              </Typography>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default SignupPresenter;

const sx = {
  Title: {
    ':after': {
      content: '"✍️"',
      display: 'inline',
      width: '100%',
      height: '1px',
      backgroundColor: 'primary',
      marginLeft: '0.5rem',
    },
  },
  Input: {
    width: '100%',
    m: 1,
  },
  Button: {
    m: 1,
    height: '100%',
    width: '100%',
    whiteSpace: 'nowrap',
  },
};
