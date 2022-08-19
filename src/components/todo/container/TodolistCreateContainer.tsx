import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { TodoContent } from '@apis/types';
import todoService from '@services/todo.service';
import todosState from '../../../store/todosState';
import CreateItemPresenter from '../UI/presenter/CreateItemPresenter';

const TodolistCreateContainer = () => {
  const navigate = useNavigate();
  const setTodos = useSetRecoilState(todosState);
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
    const todo = await todoService.createTodo(todoContent);
    setTodos((todos) => [...todos, todo]);
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
