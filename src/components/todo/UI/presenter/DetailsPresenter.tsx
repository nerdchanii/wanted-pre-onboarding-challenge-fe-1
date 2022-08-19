import React from 'react';
import { Todo } from '@apis/types';
import TodoDate from '../Atoms/TodoDate';
import TodoItem from '../../TodoItem';
import DetailActionButtons from '../molcules/DetailActionButtons';
import { Card, CardActions } from '@mui/material';

type Props = {
  todo: Todo;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  editable: boolean;
  setEditable: React.Dispatch<React.SetStateAction<boolean>>;
};

const TodolistDetailPresenter = ({
  editable,
  setEditable,
  todo,
  onSave,
  onRemove,
  onChange,
}: Props) => {
  const { title, content, createdAt, updatedAt } = todo;

  return (
    <Card
      sx={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        p: 1,
        boxSizing: 'border-box',
      }}
    >
      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end' }}>
        <DetailActionButtons
          editable={editable}
          onEdit={(e: React.MouseEvent<HTMLButtonElement>) =>
            setEditable(!editable)
          }
          onSave={onSave}
          onRemove={onRemove}
        />
      </CardActions>
      <TodoDate date={updatedAt} title="최종수정일" />
      <TodoDate date={createdAt} title="생성일" />
      <TodoItem
        todo={{ title, content }}
        editable={editable}
        onChange={onChange}
        sx={{ flexGrow: 1 }}
      />
    </Card>
  );
};

export default TodolistDetailPresenter;
