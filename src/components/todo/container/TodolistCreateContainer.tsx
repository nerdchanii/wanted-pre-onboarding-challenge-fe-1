import React from "react";
import { useNavigate } from "react-router-dom";
import { TodoContent } from "../../../Apis/types";
import todoService from "../../../services/todo.service";
import CreateItemPresenter from "../UI/presenter/CreateItemPresenter";

const TodolistCreateContainer = () => {
  const navigate = useNavigate();
  const [todoContent, setTodoContent] = React.useState<TodoContent>({
    title: "",
    content: "",
  });
  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setTodoContent({ ...todoContent, [e.target.name]: e.target.value });
  };

  const onSave = async (e: React.MouseEvent<HTMLButtonElement>) => {
    console.log(todoContent);
    const response = await todoService.createTodo(todoContent);
    console.log(response);
    if (response.result)
      navigate(`/todos/${response.data.id}`, { replace: true });
    else console.log(response.details);
  };

  return (
    <CreateItemPresenter
      todo={todoContent}
      onChange={onChange}
      onSave={onSave}
    />
  );
};

export default TodolistCreateContainer;
