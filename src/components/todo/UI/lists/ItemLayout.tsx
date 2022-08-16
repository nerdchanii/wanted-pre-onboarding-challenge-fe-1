import { Card, CardActionArea, Grid } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

type Props = {
  children: React.ReactNode;
  id: string;
};

const ItemLayout = ({ id, children }: Props) => {
  const navigate = useNavigate();

  return (
    <Card sx={{ marginY: 1, overflow: 'visible' }}>
      <CardActionArea onClick={() => navigate(id)}>
        <Grid container direction="column">
          <Grid container item direction="row" justifyContent="space-between">
            {children}
          </Grid>
        </Grid>
      </CardActionArea>
    </Card>
  );
};

export default ItemLayout;
