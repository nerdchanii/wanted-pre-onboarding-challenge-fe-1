import { Container, SxProps } from '@mui/material';
import React from 'react';

type Props = {
  children: React.ReactNode;
  sx?: SxProps;
};

const PagesContainer = ({ sx, children }: Props) => {
  if (sx) {
    return <Container sx={sx}>{children}</Container>;
  }
  return <Container>{children}</Container>;
};

export default PagesContainer;
