import React, { useState } from "react";
import "../Styles/comment.css";
import { AiOutlineCloseCircle } from "react-icons/ai";
import commentData from "./CommentData";
export default function Comment() {
  let [input, updateInput] = useState("");
  let [commentList, updateCommentList] = useState(commentData);
  const addNewComment = () => {
    if (input) {
      const newCommentList = [
        ...commentList,
        {
          image: "https://i.scdn.co/image/ab67616d00001e021630dd349221a35ce03a0ccf",
          name: "vijay",
          email: "vijay@epam.com",
          comment: input,
          posted: "3 days ago",
        },
      ];
      updateCommentList(newCommentList);
    }
  };
  const clearFunc = () => {
    updateInput(" ");
  };

  return (
    <div className="commentsection">
      <div className="comments-section1">
        <p>Comments</p>
        {2}
      </div>

      <div className="comment-section2">
        <div className="commenttextfield">
          <label htmlFor="commenttextbox">comment</label>
          <div className="input-and-close-circle">
          <input
            type="text"
            className="commenttextinput"
            id="commenttextbox"
            value={input}
            onChange={(e) => {
              updateInput(e.target.value);
            }}
          />
          <AiOutlineCloseCircle
                    className="close-circle"
                    data-testid='closetest2'
                    onClick={() => clearFunc()}
                  />
          </div>
        </div>
      </div>

      <div className="comment-button">
        <button onClick={addNewComment}>leave a comment</button>
      </div>
      <ul className="comments-list">
        {commentList.map((comment) => {
          return (
            <li className="comment-details">
              <div className="commentor-details">
                <div className="commentor-image">
                <img src="https://i.scdn.co/image/ab67616d00001e021630dd349221a35ce03a0ccf" alt="" className="image"/>
                </div>
                <div className="commentor-info">
                <p className="commentor-name">{comment.name}</p>
                <p className="commentor-email">{comment.email}</p>
                </div>
              </div>
              <div className="commentor-comment">
              <p>{comment.comment}</p>
              <p>{comment.posted}</p>
              </div>
              <div className="comment-divider"></div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
