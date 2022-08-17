import React from 'react';
import { Route, Routes } from 'react-router-dom';
import TodolistCreateContainer from '../components/todo/container/TodolistCreateContainer';
import TodolistDetailContainer from '../components/todo/container/TodolistDetailContainer';
import AuthHandler from './AuthHandler';
import Login from '../pages/auth/Login';
import Logout from '../pages/auth/Logout';
import Signup from '../pages/auth/Signup';
import Home from '../pages/home/Home';
import TodoPage from '../pages/todo/TodoPage';

const IndexRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/todos" element={AuthHandler(TodoPage)}>
        <Route path="new" element={<TodolistCreateContainer />} />
        <Route path=":id" element={<TodolistDetailContainer />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/logout" element={<Logout />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
};

export default IndexRouter;
