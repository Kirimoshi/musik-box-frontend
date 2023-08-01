import React from "react";
export function PlaylistTypeConfirmation({
  dialogSubmit,
  handleConfirmationDialog,
}) {
  return (
    <div className="playlistType-confirmationdialog-main">
      <div className="playlistType-confirmation-dialog-message">
        <p>Are you sure you want to submit these changes?</p>
      </div>
      <hr className="playlistType-dialog-divider" />
      <div className="playlistType-confirmation-dialog-btns">
        <div className="playlistType-confirmation-dialog">
          <button
            onClick={() => {
              handleConfirmationDialog("submit", dialogSubmit);
            }}
            className="playlistType-confirmation-dialog-submit-btn"
          >
            Submit
          </button>
        </div>
        <div className="playlistType-confirmation-dialog">
          <button
            onClick={() => {
              handleConfirmationDialog("discard");
            }}
            className="playlistType-confirmation-dialog-discard-btn"
          >
            Discard
          </button>
        </div>
      </div>
    </div>
  );
}
