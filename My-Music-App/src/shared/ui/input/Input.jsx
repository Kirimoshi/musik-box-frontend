import PropTypes from "prop-types";

import { Input } from "./Input.styles";

function InputComponent({ type, placeholder, value, onChange, name }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      name={name}
      className="input-component"
    />
  );
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.string,
};

export default InputComponent;
