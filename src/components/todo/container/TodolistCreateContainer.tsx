import React from 'react';
import { useNavigate } from 'react-router-dom';
import { TodoContent } from '@apis/types';
import CreateItemPresenter from '../UI/presenter/CreateItemPresenter';
import { useCreateTodo } from '@hooks/todos';

const TodolistCreateContainer = () => {
  const navigate = useNavigate();
  const { mutateAsync: create } = useCreateTodo();
  const [todoContent, setTodoContent] = React.useState<TodoContent>({
    title: '',
    content: '',
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTodoContent({ ...todoContent, [e.target.name]: e.target.value });
  };

  const onCreate = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const todo = await create(todoContent);
    navigate(`/todos/${todo.id}`, { replace: true });
  };

  return (
    <CreateItemPresenter
      todo={todoContent}
      onChange={onChange}
      onSave={onCreate}
    />
  );
};

export default TodolistCreateContainer;
