import PropTypes from 'prop-types';

import { Input } from './Input.styles';

function InputComponent({ type, placeholder, value, onChange, onKeyUp, name }) {
  return (
    <Input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      onKeyUp={onKeyUp}
      name={name}
      className='input-component'
    />
  );
}

InputComponent.propTypes = {
  type: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  value: PropTypes.string,
};

export default InputComponent;
