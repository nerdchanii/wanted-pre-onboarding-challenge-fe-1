import { Grid, Typography } from '@mui/material';
import React from 'react';
import AddButton from '../Atoms/AddTodoItem';

type Props = {};

const Header = (props: Props) => {
  return (
    <Grid item container>
      <Grid item flex={1}>
        <Typography
          variant="h5"
          textAlign={'center'}
          sx={{
            fontWeight: 'bold',
          }}
          py={1}
        >
          투두 리스트
        </Typography>
      </Grid>
      <Grid item>
        <AddButton />
      </Grid>
    </Grid>
  );
};

export default Header;
