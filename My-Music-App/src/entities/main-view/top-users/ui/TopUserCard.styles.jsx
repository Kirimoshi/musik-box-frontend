import styled from 'styled-components';
import { flexColumnCenter } from '../../../../shared/Shared.styles';

export const TopUserCardItem = styled.li`
  gap: 4px;
  & > figure {
    ${flexColumnCenter}
    gap: 4px;

    & > figcaption {
      ${flexColumnCenter}
      gap: 4px;
    }
  }

  & .top-users-card__avatar {
    height: 79px;
    aspect-ratio: 1/1;
    border-radius: 50%;
    overflow: hidden;
  }
`;
