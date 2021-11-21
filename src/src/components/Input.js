import { number, string, oneOfType, func, bool } from "prop-types";

function Input({
  id,
  name,
  value,
  handleInput,
  type,
  placeholder,
  disabled,
  error,
  label,
}) {
  return (
    <div>
      <label>{label}</label>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        onChange={handleInput}
      />
      {error && <p>{error}</p>}
    </div>
  );
}

Input.propTypes = {
  placeholder: string,
  type: string,
  disabled: bool,
  error: string,
  id: string.isRequired,
  label: string.isRequired,
  name: string.isRequired,
  value: oneOfType([string, number]).isRequired,
  handleInput: func.isRequired,
};

Input.defaultProps = {
  type: "text",
  placeholder: "",
  disabled: false,
  error: "",
};

export default Input;