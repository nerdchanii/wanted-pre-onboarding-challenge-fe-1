import React from 'react';
import { Typography } from '@mui/material';

const TodoDate = ({ title, date }: { title: string; date: string | Date }) => (
  <Typography variant="caption" component="p" textAlign="end">
    {title} : {new Date(date).toLocaleDateString()}
  </Typography>
);

export default TodoDate;
