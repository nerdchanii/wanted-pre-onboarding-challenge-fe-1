import React from 'react';
import TodoListPresenter from '../UI/presenter/TodoListPresenter';
import { useGetTodos } from '@hooks/todos';

type Props = {};

const TodoListContainer = (props: Props) => {
  const { todos, isError, isLoading } = useGetTodos();

  if (isLoading) {
    return <div>Loading...</div>;
  }
  if (isError) {
    console.log(isError);
    return <div>다시 시도해주세요</div>;
  }
  if (todos) return <TodoListPresenter todos={todos} />;
  return <div>다시 시도해주세요</div>;
};

export default TodoListContainer;
