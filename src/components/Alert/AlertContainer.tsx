import { Alert, Container } from "@mui/material";
import React from "react";

type Props = {
  alertMessages: string[];
  setAlertMessages: (alertMessage: string[]) => void;
};

const AlertContainer = ({ alertMessages, setAlertMessages }: Props) => {
  return (
    <Container sx={{ position: "absolute" }}>
      {alertMessages.map((alertMessage, index) => (
        <Alert
          key={index}
          severity="error"
          onClose={() =>
            setAlertMessages(alertMessages.filter((message, i) => i !== index))
          }
        >
          {alertMessage}
        </Alert>
      ))}
    </Container>
  );
};

export default AlertContainer;
