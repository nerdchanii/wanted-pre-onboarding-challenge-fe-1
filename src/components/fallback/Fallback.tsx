import React from 'react';
import { CircularProgress } from '@mui/material';
import FallbakContainer from './FallbackContainer';

type Props = {};

const Fallback = () => {
  return (
    <FallbakContainer>
      <h1>로딩중</h1>
      <CircularProgress />
    </FallbakContainer>
  );
};

export default Fallback;
