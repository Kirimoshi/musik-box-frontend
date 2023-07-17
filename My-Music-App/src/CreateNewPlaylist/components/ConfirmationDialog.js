import React from "react";
export const ConfirmationDialog = ({
  handleCreatePlaylistModal,
  handleConfirmationDialog,
}) => {
  return (
    <div className="confirmationdialog-main">
      <div className="confirmation-dialog-message">
        <p>Are you sure you want to discard these changes?</p>
      </div>
      <hr className="dialog-divider" />
      <div className="confirmation-dialog-btns">
        <div className="confirmation-dialog">
          <button
            onClick={handleCreatePlaylistModal}
            className="confirmation-dialog-submit-btn"
          >
            Discard
          </button>
        </div>
        <div className="confirmation-dialog">
          <button
            onClick={handleConfirmationDialog}
            className="confirmation-dialog-discard-btn"
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};
