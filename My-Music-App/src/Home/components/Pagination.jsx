import React from "react";
import PropTypes from "prop-types";
import { PaginationControls } from "./Pagination.styles";
import { BsArrowRightShort, BsArrowLeftShort } from "react-icons/bs";

function Pagination({
  onClickLeft,
  onClickRight,
  isLeftActive = false,
  isRightActive = false,
}) {
  return (
    <PaginationControls>
      <button disabled={!isLeftActive} onClick={onClickLeft}>
        <BsArrowLeftShort />
      </button>
      <button disabled={!isRightActive} onClick={onClickRight}>
        <BsArrowRightShort />
      </button>
    </PaginationControls>
  );
}

Pagination.propTypes = {
  onClickLeft: PropTypes.func.isRequired,
  onClickRight: PropTypes.func.isRequired,
  isLeftActive: PropTypes.bool,
  isRightActive: PropTypes.bool,
};

export default Pagination;
