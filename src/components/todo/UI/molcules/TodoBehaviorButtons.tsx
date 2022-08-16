import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { Add } from '@mui/icons-material';

const TodoBehaviorButtons = ({
  editable,
  onEdit,
  onSave,
  onRemove,
}: {
  editable: boolean;
  onEdit?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}) => {
  const navigate = useNavigate();
  return (
    <ButtonGroup>
      <Button variant="outlined" onClick={() => navigate('/todos/new')}>
        <Add />
      </Button>
      {editable ? (
        <Button variant="outlined" onClick={onSave}>
          저장
        </Button>
      ) : (
        <Button variant="outlined" onClick={onEdit}>
          수정
        </Button>
      )}
      <Button color="warning" onClick={onRemove}>
        삭제
      </Button>
    </ButtonGroup>
  );
};

export default TodoBehaviorButtons;
