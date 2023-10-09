import styled from 'styled-components';

export const MenuContainer = styled.ul`
  padding: 8px 0;
  width: 212px;
  border-radius: 4px;
  background: var(--m-3-sys-dark-surface-container, #211f26);
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 2px 6px 2px rgba(0, 0, 0, 0.15);
  list-style-type: none;
  position: absolute;
  top: 48px;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.5px;
`;

export const MenuItem = styled.li`
  padding: 8px 12px;
  display: flex;
  gap: 12px;
  align-items: center;
  cursor: pointer;

  & > svg {
    font-size: 24px;
  }

  &.profile-menu__delete {
    color: var(--m-3-sys-dark-error, #f2b8b5);
  }

  &.profile-menu__edit {
    cursor: not-allowed;
  }
`;

export const MenuDivider = styled.hr`
  width: 100%;
  height: 1px;
  border: none;
  background: #49454f;
  margin: 8px 0;
`;
