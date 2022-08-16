import { Button } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {};

const AddButton = (props: Props) => {
  const navigate = useNavigate();
  return (
    <Button
      variant="contained"
      onClick={() => navigate('new')}
      sx={{ height: '100%' }}
    >
      추가
    </Button>
  );
};

export default AddButton;
