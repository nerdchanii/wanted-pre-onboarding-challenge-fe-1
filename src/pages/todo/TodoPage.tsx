import React, { Suspense } from 'react';
import { Grid } from '@mui/material';
import { Outlet } from 'react-router-dom';
import TodoListContainer from '../../components/todo/container/TodolistContainer';

type Props = {};

const TodoPage = (props: Props) => {
  return (
    <Grid container spacing={3} sx={{ backgorund: '#628', width: 'fullWidth' }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        {/* 
          //TODO: suspense UI 처리 
          //TODO: error boundary 처리
        */}
        <Suspense fallback={<h1>폴백</h1>}>
          <TodoListContainer />
        </Suspense>
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        {/* 
          //TODO: suspense UI 처리 
          //TODO: error boundary 처리
        */}
        <Suspense fallback={<h1>폴백2</h1>}>
          <Outlet />
        </Suspense>
      </Grid>
    </Grid>
  );
};

export default TodoPage;
