import { CardActions, Grid } from '@mui/material';
import React from 'react';
import NavigateButtons from './NavigateButtons';
import TodoBehaviorButtons from './TodoBehaviorButtons';

type Props = {
  editable: boolean;
  onEdit: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSave: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onRemove: (e: React.MouseEvent<HTMLButtonElement>) => void;
};

const DetailActionButtons = ({ editable, onEdit, onSave, onRemove }: Props) => {
  return (
    <Grid container flexDirection={'row'} justifyContent="space-between">
      <Grid item>
        <NavigateButtons />
      </Grid>
      <Grid item>
        <TodoBehaviorButtons
          editable={editable}
          onEdit={onEdit}
          onSave={onSave}
          onRemove={onRemove}
        />
      </Grid>
    </Grid>
  );
};

export default DetailActionButtons;
