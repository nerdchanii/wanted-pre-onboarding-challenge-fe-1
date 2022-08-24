import React from 'react';
import TodoListPresenter from '../UI/presenter/TodoListPresenter';
import { useGetTodos } from '@hooks/todos';
import { CircularProgress } from '@mui/material';

type Props = {};

const TodoListContainer = (props: Props) => {
  const { todos, isLoading } = useGetTodos();

  if (isLoading) {
    return <CircularProgress />;
  }

  if (todos) return <TodoListPresenter todos={todos} />;

  return <div>아직 등록된 일정이 없습니다</div>;
};

export default TodoListContainer;
