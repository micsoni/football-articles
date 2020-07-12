import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setError } from "../store/actions/error";
import Alert from "react-bootstrap/Alert";

export default function ErrorAlert() {
  const dispatch = useDispatch();
  const error = useSelector((state) => state.error);
  if (error === null) {
    return null;
  }
  return (
    <Alert
      variant="danger"
      onClose={() => dispatch(setError(null))}
      dismissible
    >
      <Alert.Heading>Ops! Something went wrong!</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
}
