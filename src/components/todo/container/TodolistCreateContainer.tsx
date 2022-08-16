import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useSetRecoilState } from 'recoil';
import { TodoContent } from '../../../Apis/types';
import todoService from '../../../services/todo.service';
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
    const response = await todoService.createTodo(todoContent);
    if (response.result) {
      setTodos((todos) => [...todos, response.data]);
      navigate(`/todos/${response.data.id}`, { replace: true });
    } else console.log(response.details);
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
