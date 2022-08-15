import React from "react";
import { Link } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { authState } from "../store/authState";

type Props = {};

const Home = (props: Props) => {
  const auth = useRecoilValue(authState);
  if (auth !== null) {
    return (
      <div>
        <h1>Home</h1>
        <p>{auth.email}</p>
        <Link to="/logout">로그아웃</Link>
        <Link to="/todos">Todo</Link>
      </div>
    );
  }
  return (
    <div>
      <Link to="/login">로그인</Link>
      <Link to="/signup">회원가입</Link>
      <Link to="/todos">TodoList</Link>
    </div>
  );
};

export default Home;
