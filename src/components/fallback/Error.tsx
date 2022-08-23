import {
  ErrorOutline,
  ErrorOutlineOutlined,
  ErrorOutlineRounded,
  ErrorRounded,
  ErrorSharp,
  ErrorTwoTone,
  NearbyErrorSharp,
} from '@mui/icons-material';
import { Divider, Typography } from '@mui/material';
import { Container } from '@mui/system';
import React from 'react';
import FallbackContainer from './FallbackContainer';

type Props = {
  error: {
    code: number | string;
    message: string;
  };
};

const Error = (props: Props) => {
  return (
    <FallbackContainer>
      <Typography variant="h3" component="p">
        {props.error.message}
      </Typography>
      <Typography variant="h4" component="span">
        <ErrorOutlineRounded />
        Erorr Code: {props.error.code}
      </Typography>
    </FallbackContainer>
  );
};

export default Error;
