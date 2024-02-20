import React from 'react';
import { Alert } from 'react-bootstrap';

const AlertExercise = ({ variant, title, message }) => {
  return (
    <Alert variant={variant}>
      {title && <Alert.Heading>{title}</Alert.Heading>}
      <p>{message}</p>
    </Alert>
  );
};

export default AlertExercise;
