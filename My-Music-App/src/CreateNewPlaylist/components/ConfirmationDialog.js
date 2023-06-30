import React from "react";
export const ConfirmationDialog=()=>{
    return(
        <div className="confirmationdialog-main">
            <div className="confirmation-dialog-message">
                <p>Are you sure you want to discard these changes?</p>
            </div>
            <hr className="dialog-divider"/>
            <div className="confirmation-dialog-btns">
                <div className="confirmation-dialog">
                    <button className="confirmation-dialog-submit-btn">Submit</button>
                </div>
                <div className="confirmation-dialog">    
                    <button className="confirmation-dialog-discard-btn">Discard</button>
                </div>
            </div>
        </div>
    );
}