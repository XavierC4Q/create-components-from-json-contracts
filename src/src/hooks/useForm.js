import { createElement } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Input from "../components/Input";

function useForm({ contract }) {
  const Form = {};

  const createHeader = (props) => createElement(Header, { heading: contract.header, ...props });
  const createButton = (props) => createElement(
    Button,
    {
      ...props
    },
    "Submit"
  );

  Form.Header = createHeader;
  Form.Button = createButton

  return { Form };
}

export default useForm;
