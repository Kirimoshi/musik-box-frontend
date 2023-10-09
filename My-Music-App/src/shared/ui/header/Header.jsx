import PropTypes from 'prop-types';

import { HeaderStyled } from './Header.styles';

function Header({ title }) {
  return <HeaderStyled> {title} </HeaderStyled>;
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
