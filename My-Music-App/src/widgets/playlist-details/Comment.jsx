import React, { useState, useEffect } from "react";
import { AiOutlineCloseCircle } from "react-icons/ai";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

import "./comment.css";
import commentData from "./CommentData";
import { Validate } from "./CommentValidations";
import { constants } from "./constansts";
export default function Comment() {
  let [input, updateInput] = useState("");
  const [commentErrors, setCommentErrors] = useState({});
  let [commentList, updateCommentList] = useState(commentData);
  const [clickCount, setClickCount] = useState(0);
  const [lastClickTimestamp, setLastClickTimestamp] = useState(null);
  const [isButtonDisabled, setButtonDisabled] = useState(false);

  const addNewComment = () => {
    if (input) {
      const newCommentList = [
        ...commentList,
        {
          image:
            "https://i.scdn.co/image/ab67616d00001e021630dd349221a35ce03a0ccf",
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
    updateInput("");
  };

  useEffect(() => {
    setCommentErrors(Validate(input));
  }, [input]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setClickCount(0);
      setLastClickTimestamp(null);
      setButtonDisabled(false);
    }, constants.timeOut);
    return () => clearTimeout(timer);
  }, [clickCount]);

  const handleClick = () => {
    const currentTime = Date.now();
    setCommentErrors({});
    if (
      currentTime - lastClickTimestamp <= constants.timeOut &&
      clickCount >= constants.timerLength
    ) {
      setButtonDisabled(true);
    } else {
      setClickCount((prevClickCount) => prevClickCount + 1);
      setLastClickTimestamp(currentTime);
    }
  };
  return (
    <div className="commentsection">
      <div className="comments-section1">
        <p>Comments</p>
        {commentList.length}
      </div>
      <div className="comment-section2">
        <div className="commenttextfield">
          <label htmlFor="commenttextbox">comment</label>
          <div className="input-and-close-circle">
            <textarea
              type="text"
              name="comment"
              className="commenttextinput"
              id="commenttextbox"
              rows="3"
              cols="40"
              value={input}
              onChange={(e) => {
                updateInput(e.target.value);
              }}
            />
            <AiOutlineCloseCircle
              className="close-circle"
              data-testid="closetest2"
              onClick={() => clearFunc()}
            />
          </div>
        </div>
      </div>
      <p className="comment-error">{commentErrors.input}</p>
      <Tippy
        placement="right"
        content="You cannot add more that 3 comments in 1 minute."
        disabled={!isButtonDisabled}
      >
        <div className="comment-button">
          <button
            className={`button-submit ${
              isButtonDisabled ? "button-disable" : ""
            }`}
            disabled={commentErrors.input || isButtonDisabled}
            onClick={() => {
              addNewComment();
              handleClick();
              clearFunc();
            }}
          >
            leave a comment
          </button>
        </div>
      </Tippy>
      <ul className="comments-list">
        {commentList.map((comment) => {
          return (
            <li key={comment.id} className="comment-details">
              <div className="commentor-details">
                <div className="commentor-image">
                  <img
                    src="https://i.scdn.co/image/ab67616d00001e021630dd349221a35ce03a0ccf"
                    alt=""
                    className="image"
                  />
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
