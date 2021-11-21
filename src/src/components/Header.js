import { createElement } from "react";
import { string } from "prop-types";

function Header({ heading, size }) {
  return createElement("div", {}, createElement(size, {}, heading));
}

Header.propTypes = {
  heading: string.isRequired,
  size: string,
};

Header.defaultProps = {
  size: "h1",
};

export default Header;