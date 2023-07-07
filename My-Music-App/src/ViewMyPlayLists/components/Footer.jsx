import React from "react";
import "../styles/footer.css";
const Footer = () => {
  const date = new Date();
  return (
    <div className="footer-container">
      <div className="footer-details">
        <div className="copy-right">&copy; {date.getFullYear()} Music Box</div>
        <div className="rights-reserved">All Rights Reserved</div>
      </div>
    </div>
  );
};

export default Footer;
