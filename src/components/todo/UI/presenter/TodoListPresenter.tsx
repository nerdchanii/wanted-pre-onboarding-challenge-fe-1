import React from 'react';
import { Grid } from '@mui/material';
import { Todo } from '../../../../apis/types';
import ListHeader from '../lists/Header';
import Lists from '../lists/Lists';
type Props = {
  todos: Todo[];
};

const TodoListPresenter = ({ todos }: Props) => {
  if (!todos) {
    <div>Loading...</div>;
  }
  return (
    <Grid
      container
      spacing={1}
      height="100vh"
      direction="column"
      p={2}
      sx={{ borderRight: '1px solid primary.main' }}
    >
      <ListHeader />
      <Grid
        item
        container
        flexWrap={'nowrap'}
        direction={'column'}
        overflow="scroll"
        sx={{
          scrollbarWidth: 'none',
          '&::-webkit-scrollbar': {
            width: '0px',
            background: 'transparent',
          },
        }}
        flex={1}
      >
        <Lists todos={todos} />
      </Grid>
    </Grid>
  );
};

export default TodoListPresenter;
