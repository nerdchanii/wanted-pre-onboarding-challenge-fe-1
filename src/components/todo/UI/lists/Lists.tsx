import { Grid, LinearProgress } from "@mui/material";
import React from "react";
import { Todo } from "../../../../Apis/types";
import TodolistItem from "./Item";

type Props = {
  todos: Array<Todo>;
};

const Lists = ({ todos }: Props) => {
  if (todos.length === 0) {
    return (
      <div>
        <p>아직 등록된 일정이 없습니다</p>
        <LinearProgress />
      </div>
    );
  }
  return (
    <>
      {todos.map((todo) => (
        <TodolistItem key={todo.id} todo={todo} />
      ))}
    </>
  );
};

export default Lists;
