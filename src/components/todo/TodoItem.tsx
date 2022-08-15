import React from "react";
import { CardContent, Divider, SxProps } from "@mui/material";
import TodoContent from "./UI/Atoms/TodoContent";
import TodoTitle from "./UI/Atoms/TodoTitle";
import { TodoContent as TypeTodoContent } from "../../Apis/types";

const TodoItem = ({
  todo: { title, content },
  onChange,
  editable,
  sx,
}: {
  sx?: SxProps;
  todo: TypeTodoContent;
  editable: boolean;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
}) => {
  return (
    <CardContent
      sx={{ ...sx, mx: 1, display: "flex", flexDirection: "column" }}
    >
      <TodoTitle
        id={"title"}
        onChange={onChange}
        value={title}
        editable={editable}
        label="제목"
      />
      <Divider flexItem sx={{ my: 2 }} />
      <TodoContent
        HTMLid={"content"}
        onChange={onChange}
        value={content}
        editable={editable}
        label="내용"
      />
    </CardContent>
  );
};

export default TodoItem;
