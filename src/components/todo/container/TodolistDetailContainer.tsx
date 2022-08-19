import React, { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Todo } from '@apis/types';
import TodolistDetailPresenter from '../UI/presenter/DetailsPresenter';
import { useDeleteTodo } from '@/components/hooks/todos';
import { useUpdateTodo } from '@/components/hooks/todos';
import { useGetTodo } from '@/components/hooks/todos';

type Props = {};

const TodolistDetailContainer = (props: Props) => {
  const { id } = useParams();
  const [canEdit, setCanEdit] = React.useState(false);
  const navigate = useNavigate();
  const { data, error, isError } = useGetTodo(id!);
  const { mutate: update } = useUpdateTodo(id!);
  const { mutateAsync: deleteTodo, isError: deleteError } = useDeleteTodo(id!);
  const [todo, setTodo] = React.useState<Todo>(data!);

  useEffect(() => {
    setTodo(data!);
    console.log(data);
  }, [data]);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    update(todo);
  };

  const onRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    await deleteTodo();
    if (!deleteError) navigate(-1);
  };

  if (todo !== undefined) {
    return (
      <TodolistDetailPresenter
        editable={canEdit}
        setEditable={setCanEdit}
        todo={todo}
        onChange={onChange}
        onRemove={onRemove}
        onSave={onSave}
      />
    );
  }
  return <div>...loading</div>;
};

export default TodolistDetailContainer;
