import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import useAuthService from '../../components/hooks/useAuthService';

type Props = {};

const Logout = (props: Props) => {
  const [, logout] = useAuthService('logout');
  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/" />;
};

export default Logout;
