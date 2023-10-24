import styled from 'styled-components';
import {
  CardDescription,
  PlaylistCard,
} from '../../playlists-small/ui/PlaylistsSmall.styles';
import { Title, oneLineEllipsis } from '../../../../shared/Shared.styles';

export const SonglistTitle = styled(Title)`
  margin: 36px 0 12px;
`;

export const SonglistCard = styled(PlaylistCard)`
  grid-template-rows: auto 24px 24px;
  grid-template-areas:
    'cover cover'
    'title title'
    'author author';
  height: 242px;
`;

export const CardAuthors = styled(CardDescription)`
  grid-area: author;
  display: block;
  ${oneLineEllipsis}
`;
