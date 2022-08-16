import React from 'react';
import { Grid, Input, InputLabel } from '@mui/material';

const TodoTitle = ({
  id,
  value,
  editable,
  onChange,
  label,
}: {
  id: string;
  value: string | undefined;
  editable: boolean;
  onChange: (e: any) => void;
  label: string;
}) => {
  return (
    <Grid container spacing={1}>
      <Grid item alignItems="center">
        <InputLabel
          sx={{
            fontSize: '1.5rem',
            marginY: '1rem',
            ':after': { display: 'inline', content: '":"' },
          }}
          color="primary"
          htmlFor={id}
        >
          {label}
        </InputLabel>
      </Grid>
      <Grid item flex={1} alignItems="center">
        <Input
          id={id}
          placeholder={label}
          fullWidth
          readOnly={!editable}
          value={value}
          name={id}
          onChange={onChange}
          sx={{
            mx: 2,
            border: 'none',
            fontSize: '1.25rem',
            height: '100%',
            cursor: editable ? 'text' : 'default',
          }}
        />
      </Grid>
    </Grid>
  );
};

export default TodoTitle;
