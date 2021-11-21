import useForm from "../hooks/useForm";
import { object, func, string } from "prop-types";
import { useState } from "react";

function Form({ contract, id, onSubmit }) {
  const {
    Form: { Header, Button },
  } = useForm({ contract });

  return (
    <form id={id} onSubmit={onSubmit}>
      <Header />
      <Button />
    </form>
  );
}

Form.propTypes = {
  id: string.isRequired,
  contract: object.isRequired,
  onSubmit: func.isRequired,
};

export default Form;
