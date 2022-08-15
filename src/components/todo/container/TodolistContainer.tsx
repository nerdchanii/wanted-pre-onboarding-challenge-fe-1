import React, { useEffect } from "react";
import todoService from "../../../services/todo.service";
import TodoListPresenter from "../UI/presenter/TodoListPresenter";

type Props = {};

const TodoListContainer = (props: Props) => {
  const [todolist, setTodolist] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await todoService.getTodos();
      if (response.result) setTodolist(response.data);
      setLoading(false);
    }
    fetchData();
  }, []);

  if (todolist.length === 0)
    return <div>{loading ? "Loading..." : "No todos"}</div>;
  return <TodoListPresenter todos={todolist} />;
};

export default TodoListContainer;
