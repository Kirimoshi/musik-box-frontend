import styled, { css } from 'styled-components';
import { BaseButton } from '../../../shared/Shared.styles';

export const FriendCustomButton = styled(BaseButton)`
  color: #ffffff;
  background-color: transparent;
`;

export const FriendModalContainer = styled.dialog`
  &[open] {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);

    min-width: 312px;
    max-width: 1128px;
    width: max-content;
    position: relative;

    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 18px;

    padding: 16px;

    border: none;
    border-radius: 4px;
    background: #211f26;
    box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
      0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  }
`;

export const FriendModalTitleWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;

  & > h3 {
    color: var(--m-3-white, #fff);
    font-family: Roboto, sans-serif;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;
  }

  & > button {
    position: absolute;
    right: 0;
    top: 0;
    padding: 8px;
    border: none;
    background: transparent;
    color: var(--m-3-white, #fff);
    font-family: Roboto, sans-serif;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0.25px;

    & > svg {
      cursor: pointer;
    }
    & > svg:hover {
      color: var(--m-3-sys-dark-error, #f2b8b5);
    }
  }
`;

const inputStyles = css`
  color: var(--m-3-sys-dark-on-surface, #e6e0e9);
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;

  border-radius: 28px;
  background: var(--m-3-sys-dark-surface-container-high, #2b2930);
  padding: 12px;
  width: 100%;
`;

export const FriendModalFormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 18px;
  width: 100%;

  & > input {
    ${inputStyles}
  }
`;

export const ActionButton = styled(BaseButton)`
  background-color: transparent;
  color: #ffffff;
  font-weight: 500;
`;
