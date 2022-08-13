import {
  CircularProgress,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { delay } from "../utils/delay";

type Props = {
  to: string;
  title: string;
  message: string;
};

const Redirections = ({ to, message, title }: Props) => {
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      await delay(2);
      navigate(to);
    })();
  }, [navigate, to]);

  return (
    <Dialog open>
      <DialogTitle marginY={2}>{title}</DialogTitle>
      <DialogContentText sx={{ display: "flex", justifyContent: "center" }}>
        {message}
      </DialogContentText>
      <DialogContent
        sx={{ display: "flex", justifyContent: "center", marginY: 2 }}
      >
        <CircularProgress />
      </DialogContent>
    </Dialog>
  );
};

export default Redirections;
