import React, { Suspense } from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TodoListContainer from '../../components/todo/container/TodolistContainer';
import ErrorBoundary from '@/Routers/handler/ErrorBoundary';
import Error from '@/components/fallback/Error';
import Fallback from '@/components/fallback/Fallback';
type Props = {};

const TodoPage = (props: Props) => {
  return (
    <Grid
      container
      spacing={3}
      sx={{
        backgorund: '#628',
        width: 'fullWidth',
        height: '100vh',
        border: '1px solid blue',
      }}
    >
      <ErrorBoundary>
        <Suspense fallback={<Fallback />}>
          <Grid item xs={12} sm={12} md={6} lg={4}>
            <TodoListContainer />
          </Grid>
          <Grid item xs={12} sm={12} md={6} lg={8}>
            <Outlet />
          </Grid>
        </Suspense>
      </ErrorBoundary>
    </Grid>
  );
};

export default TodoPage;
