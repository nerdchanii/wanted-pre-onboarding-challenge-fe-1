import React from 'react';
import { CardContent, CardHeader } from '@mui/material';
import { Todo } from '../../../../Apis/types';
import TodoDate from '../Atoms/TodoDate';
import ItemLayout from './ItemLayout';

type Props = {
  todo: Todo;
};

const TodolistItem = ({ todo }: Props) => {
  return (
    <ItemLayout id={todo.id}>
      <CardHeader title={todo.title} sx={{ flex: 1 }} />
      <CardContent>
        <TodoDate title="생성일" date={todo.createdAt} />
        <TodoDate title="최종수정일" date={todo.updatedAt} />
      </CardContent>
    </ItemLayout>
  );
};

export default TodolistItem;
