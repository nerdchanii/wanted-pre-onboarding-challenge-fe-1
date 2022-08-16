import {
  Link,
  FormControl,
  Grid,
  TextField,
  Typography,
  Divider,
} from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import AlertContainer from '../Alert/AlertContainer';

type Props = {
  loginInputValues: {
    email: string;
    password: string;
  };
  onChangeInputs: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loginSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  loading: boolean;
  alertMessages: string[];
  setAlertMessages: (alertMessage: string[]) => void;
  isValidEmail: boolean;
  isValidPassword: boolean;
};

const LoginPresenter = (props: Props) => {
  const {
    loginInputValues,
    onChangeInputs,
    loginSubmit,
    loading,
    alertMessages,
    setAlertMessages: setAlertMessage,
    isValidEmail,
    isValidPassword,
  } = props;
  const { email, password } = loginInputValues;

  return (
    <>
      <AlertContainer
        alertMessages={alertMessages}
        setAlertMessages={setAlertMessage}
      />
      <Grid
        container
        alignItems="center"
        minHeight={'100vh'}
        justifyContent="center"
      >
        <Grid item xs={8} sm={6} md={4}>
          <FormControl fullWidth margin="dense">
            <form onSubmit={loginSubmit}>
              <Typography
                component="h1"
                variant="h6"
                align="left"
                marginY={2}
                sx={{
                  ':after': {
                    content: '"🙋🏻‍♂️"',
                    display: 'inline',
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'primary',
                    marginLeft: '0.5rem',
                  },
                }}
              >
                로그인
              </Typography>
              <Divider />
              <TextField
                error={email !== '' && !isValidEmail}
                helperText={
                  isValidEmail || email === ''
                    ? ' '
                    : '올바른 이메일을 입력해주세요'
                }
                FormHelperTextProps={
                  isValidPassword ? { error: false } : { error: true }
                }
                name="email"
                type="text"
                placeholder="email"
                value={email}
                onChange={onChangeInputs}
                color="primary"
                variant="outlined"
                label="email"
                required
                sx={{ flex: 1, width: '100%' }}
              />
              <TextField
                error={password !== '' && !isValidPassword}
                helperText={
                  isValidPassword ? ' ' : '올바른 비밀번호를 입력해주세요'
                }
                FormHelperTextProps={
                  isValidPassword ? { error: false } : { error: true }
                }
                name="password"
                type="password"
                placeholder="비밀번호"
                label="password"
                value={password}
                onChange={onChangeInputs}
                color="primary"
                required
                sx={{ flex: 1, width: '100%' }}
              />
              <LoadingButton
                loading={loading}
                loadingPosition="center"
                type="submit"
                size="large"
                variant="contained"
                disabled={!(isValidEmail && isValidPassword)}
                sx={{
                  height: '100%',
                  whiteSpace: 'nowrap',
                  width: '100%',
                  '[disabled]': {
                    cursor: 'not-allowed',
                  },
                }}
              >
                로그인
              </LoadingButton>
              <Typography
                variant="body2"
                align="center"
                sx={{ display: 'block', textAlign: 'end', marginY: 2 }}
              >
                아직 회원이 아니라면?
                <Link
                  component={RouterLink}
                  to="/signup"
                  color="primary"
                  paddingLeft={2}
                  sx={{ textDecoration: 'none' }}
                >
                  회원가입
                </Link>
              </Typography>
            </form>
          </FormControl>
        </Grid>
      </Grid>
    </>
  );
};

export default LoginPresenter;
