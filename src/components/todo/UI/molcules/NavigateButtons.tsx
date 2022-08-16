import React from 'react';
import { ButtonGroup, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const NavigateButtons = () => {
  const navigate = useNavigate();
  return (
    <ButtonGroup
      size="small"
      color="primary"
      aria-label="outlined primary button group"
    >
      <Button onClick={() => navigate(-1)}>
        <ArrowBack />
      </Button>
      <Button onClick={() => navigate(1)}>
        <ArrowForward />
      </Button>
    </ButtonGroup>
  );
};

export default NavigateButtons;
