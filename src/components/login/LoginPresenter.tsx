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
                    content: '"ππ»ββοΈ"',
                    display: 'inline',
                    width: '100%',
                    height: '1px',
                    backgroundColor: 'primary',
                    marginLeft: '0.5rem',
                  },
                }}
              >
                λ‘κ·ΈμΈ
              </Typography>
              <Divider />
              <TextField
                error={email !== '' && !isValidEmail}
                helperText={
                  isValidEmail || email === ''
                    ? ' '
                    : 'μ¬λ°λ₯Έ μ΄λ©μΌμ μλ ₯ν΄μ£ΌμΈμ'
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
                  isValidPassword ? ' ' : 'μ¬λ°λ₯Έ λΉλ°λ²νΈλ₯Ό μλ ₯ν΄μ£ΌμΈμ'
                }
                FormHelperTextProps={
                  isValidPassword ? { error: false } : { error: true }
                }
                name="password"
                type="password"
                placeholder="λΉλ°λ²νΈ"
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
                λ‘κ·ΈμΈ
              </LoadingButton>
              <Typography
                variant="body2"
                align="center"
                sx={{ display: 'block', textAlign: 'end', marginY: 2 }}
              >
                μμ§ νμμ΄ μλλΌλ©΄?
                <Link
                  component={RouterLink}
                  to="/signup"
                  color="primary"
                  paddingLeft={2}
                  sx={{ textDecoration: 'none' }}
                >
                  νμκ°μ
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
