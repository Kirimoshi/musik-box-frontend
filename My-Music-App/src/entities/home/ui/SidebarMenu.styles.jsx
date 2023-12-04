import styled, { css } from 'styled-components';
import { NavLink } from 'react-router-dom';
import { flexHorizontalCenter } from '../../../shared/Shared.styles';

const flexVerticalCenter = css`
  display: flex;
  align-items: center;
`;

export const MenuContainer = styled.nav`
  margin-top: 25px;
  margin-bottom: 12px;
  color: var(--m-3-sys-dark-on-surface, #e6e0e9);
`;

export const MenuItem = styled.li`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const MenuLink = styled(NavLink)`
  text-decoration: none;
  cursor: inherit;
  color: white;
  ${flexVerticalCenter}
  width: 100%;
  min-height: 56px;
  border: 1px solid transparent;
  padding: 8px 16px;

  &.active {
    background: #030109;
    border: 1px solid #49454f;
    border-radius: 18px;
  }

  & .link__icon {
    font-size: 24px;
    margin-right: 16px;
  }

  & .link__text {
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
    letter-spacing: 0.5px;
  }

  & .link__counter {
    width: 21px;
    margin-left: 8px;
    ${flexHorizontalCenter}

    color: var(--m-3-sys-light-on-error, #fff);
    text-align: center;
    font-size: 11px;
    font-weight: 500;
    line-height: 16px;
    letter-spacing: 0.5px;
    border-radius: 100px;
    background: var(--m-3-sys-light-error, #b3261e);
  }
`;
