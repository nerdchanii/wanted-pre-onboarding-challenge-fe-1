import React, { useEffect } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { Todo } from "../../../Apis/types";
import todoService from "../../../services/todo.service";
import TodolistDetailPresenter from "../UI/presenter/DetailsPresenter";

type Props = {};

const TodolistDetailContainer = (props: Props) => {
  const { id } = useParams();
  const [canEdit, setCanEdit] = React.useState(false);
  const [todo, setTodo] = React.useState<Todo>({} as Todo);
  const navigate = useNavigate();
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodo({ ...todo, [e.target.name]: e.target.value });
  };

  const onSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { result } = await todoService.updateTodo(todo);
    if (result) alert("수정되었습니다.");
    setCanEdit(false);
  };

  const onRemove = async (e: React.MouseEvent<HTMLButtonElement>) => {
    const { result } = await todoService.deleteTodo(todo.id);
    if (result) {
      alert("삭제되었습니다.");
      navigate(-1);
    } else alert("삭제에 실패했습니다.");
  };

  useEffect(() => {
    async function fetchTodo() {
      if (id !== undefined) {
        const response = await todoService.getTodoById(id);
        if (response.result) setTodo(response.data);
        else console.log(response.details);
      }
    }
    fetchTodo();
  }, [id]);

  if (todo.id !== undefined) {
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
