import { Button, Card, Grid } from '@mui/material';
import React from 'react';
import { TodoContent } from '@apis/types';
import TodoItem from '../../TodoItem';

type Props = {
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  todo: TodoContent;
  onChange: (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => void;
};

const CreateItemPresenter = ({ onSave, todo, onChange }: Props) => {
  return (
    <Card sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <TodoItem
        todo={todo}
        editable={true}
        sx={{ flex: 1 }}
        onChange={onChange}
      />
      <Grid container justifyContent={'flex-end'} p={2}>
        <Button variant="contained" color="primary" onClick={onSave}>
          저장
        </Button>
      </Grid>
    </Card>
  );
};

export default CreateItemPresenter;
