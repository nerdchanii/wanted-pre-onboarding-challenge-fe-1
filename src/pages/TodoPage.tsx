import React from "react";
import { Grid } from "@mui/material";
import { Outlet } from "react-router-dom";
import TodoListContainer from "../components/todo/container/TodolistContainer";

type Props = {};

const TodoPage = (props: Props) => {
  return (
    <Grid container spacing={3} sx={{ backgorund: "#628", width: "fullWidth" }}>
      <Grid item xs={12} sm={12} md={6} lg={4}>
        <TodoListContainer />
      </Grid>
      <Grid item xs={12} sm={12} md={6} lg={8}>
        <Outlet />
      </Grid>
    </Grid>
  );
};

export default TodoPage;
