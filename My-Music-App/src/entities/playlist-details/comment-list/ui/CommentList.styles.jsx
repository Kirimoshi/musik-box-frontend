import styled from 'styled-components';

export const CommentsSection = styled.section`
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 10px;
  font-family: Roboto, sans-serif;
`;
export const CommentsHeader = styled.h2`
  font-size: 22px;
  font-weight: 400;
  line-height: 28px;
  letter-spacing: 0;
  text-align: left;

  & > .header__no-comments-msg {
    font-size: 16px;
    font-weight: 500;
    line-height: 24px;
    letter-spacing: 0.15px;
    text-align: left;
    color: #aea9b4;
  }

  & > .header__comments-count {
    color: #aea9b4;
  }
`;

export const NewCommentForm = styled.form`
  width: 550px;
  height: 116px;

  & > fieldset {
    border-radius: 4px;
    width: 100%;
    height: 100%;
    position: relative;
  }

  & > fieldset > legend {
    font-size: 12px;
    font-weight: 400;
    line-height: 16px;
    letter-spacing: 0;
    text-align: left;
    color: #cac4d0;
    padding: 0 4px;
    margin-left: 8px;
  }
`;

export const CommentTextField = styled.textarea`
  border: none;
  width: 100%;
  height: 100%;
  color: #fff;
  padding: 10px 13px;
  background: transparent;
  resize: none;
  outline: none;
  margin-bottom: 12px;

  &::placeholder {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
    text-align: left;
    color: #e6e0e9;
  }
`;

export const CommentClearButton = styled.button`
  position: absolute;
  top: 5%;
  right: 1%;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  cursor: pointer;

  & > .clear-icon {
    width: 24px;
    height: 24px;
    color: #cac4d0;
  }
`;

export const CommentSubmitButton = styled.button`
  width: 328px;
  height: 40px;
  margin-bottom: 36px;
  border: 1px solid #938f99;
  border-radius: 100px;
  background: none;
  padding: 8px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  letter-spacing: 0.1px;
  text-align: center;
  color: #d0bcff;

  &.button-disable {
    border: 1px solid #e6e0e91f;
    color: #e6e0e91f;
    cursor: not-allowed;
  }
`;
export const CommentError = styled.p`
  font-size: small;
  color: #d0bcff;
  margin-top: -36px;
`;
export const CommentListContainer = styled.section`
  width: 100%;
`;
export const CommentContainer = styled.article`
  font-style: normal;
  color: var(--m-3-white, #fff);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(5, auto);
  grid-template-areas:
    'avatar name'
    'avatar email'
    'description description'
    'date date'
    'divider divider';
  gap: 8px;
  padding-top: 21px;
`;

export const CommentAuthorInfo = styled.figure`
  display: flex;
  flex-direction: row;
  column-gap: 8px;
`;
export const CommentAuthorAvatar = styled.img`
  grid-area: avatar;
  width: 44px;
  height: 44px;
  border-radius: 50%;
`;
export const CommentAuthorTextWrapper = styled.figcaption``;
export const CommentAuthorName = styled.span`
  grid-area: name;
  font-size: 16px;
  font-weight: 500;
  line-height: 24px;
  letter-spacing: 0.15px;
  text-align: left;
`;
export const CommentAuthorEmail = styled.p`
  grid-area: email;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
  color: #aea9b4;
`;
export const CommentDescription = styled.p`
  grid-area: description;
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  letter-spacing: 0.25px;
  text-align: left;
`;
export const CommentDate = styled.span`
  grid-area: date;
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  letter-spacing: 0;
  text-align: left;
  color: #aea9b4;
  margin-bottom: 16px;
`;

export const CommentDivider = styled.hr`
  grid-area: divider;
  width: 100%;
  height: 1px;
  background-color: #49454f;
  border: none;
`;
