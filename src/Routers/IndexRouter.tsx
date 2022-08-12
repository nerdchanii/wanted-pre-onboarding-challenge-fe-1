import React from "react";
import { Route, Routes } from "react-router-dom";
import AuthHandler from "../handler/AuthHandler";
import Login from "../pages/auth/Login";
import Logout from "../pages/auth/Logout";
import Signup from "../pages/auth/Signup";
import Home from "../pages/Home";
import TodoPage from "../pages/TodoPage";

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todolist/*" element={AuthHandler(TodoPage)} />
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default IndexRouter;
