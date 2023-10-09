import React from 'react';
import { FooterContainer, FooterDetails } from './Footer.styles';

function Footer() {
  const date = new Date();
  return (
    <FooterContainer>
      <FooterDetails>
        <div>&copy; {date.getFullYear()} Music Box</div>
        <div>All Rights Reserved</div>
      </FooterDetails>
    </FooterContainer>
  );
}
export default Footer;
