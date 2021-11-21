import { string, func, bool } from "prop-types";

function Button({ type, disabled, id, handleClick, children }) {
  return (
    <button type={type} disabled={disabled} id={id} onClick={handleClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  type: string,
  handleClick: func,
  disabled: bool,
  id: string.isRequired,
  children: string.isRequired,
};

Button.defaultProps = {
  type: "button",
  handleClick: undefined,
  disabled: false,
};

export default Button;