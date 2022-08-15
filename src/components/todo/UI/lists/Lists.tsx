import React from "react";
import { Todo } from "../../../../Apis/types";
import TodolistItem from "./Item";

type Props = {
  todos: Array<Todo>;
};

const Lists = ({ todos }: Props) => {
  return (
    <>
      {todos.map((todo) => (
        <TodolistItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Lists;
