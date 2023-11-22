import styled from 'styled-components';
import { Subtitle, Title } from '../../../../shared/Shared.styles';

export const TopUserTitle = styled(Title)`
  margin-bottom: 12px;
`;

export const TopUserSubtitle = styled(Subtitle)`
  margin-bottom: 8px;
`;

export const TopUserList = styled.ul`
  width: fit-content;
  display: grid;
  grid-template-columns: repeat(5, auto);
  gap: 24px;
  margin-bottom: 24px;
`;
