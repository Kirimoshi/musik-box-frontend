import React from "react";
import {RiPencilFill,RiDeleteBin6Line} from 'react-icons/ri'

import '../Styles/modal.css'
export default function Modal() {
  return (
    <div>
        <div className="submodal-container">
          <div className="submodal-delete-item">
            <RiDeleteBin6Line />
            <span className="delete-name">Delete playlist</span>
          </div>

          <div className="division" />

          <div className="submodal-edit-item">
            <RiPencilFill />

            <span className="edit-name">Edit</span>
          </div>

          <div className="division" />


          <div className="submodal-change-playlist">
            <span className="p1">Make Private</span>
            <span className="p2">Make Shared</span>
            <span className="p3">Make Public</span>
          </div>


        </div>
    </div>
  );
}
