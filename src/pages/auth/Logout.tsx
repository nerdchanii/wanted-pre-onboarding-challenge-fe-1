import React, { useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { useLogout } from '@hooks/auth';

type Props = {};

const Logout = (props: Props) => {
  const logout = useLogout();
  useEffect(() => {
    logout();
  }, [logout]);

  return <Navigate to="/" />;
};

export default Logout;
