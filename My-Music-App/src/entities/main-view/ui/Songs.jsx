import React from 'react';
import { BsArrowRightShort, BsArrowLeftShort } from 'react-icons/bs';
import { Title, Subtitle, BaseCarouselControls } from '../Shared.styles';
import {
  SongsContainer,
  SongsCarouselContainer,
  SongsCarousel,
  SongsCarouselItem,
} from './Songs.styles';

function Songs() {
  return (
    <SongsContainer data-section-name='Songs'>
      <Title>Songs</Title>
      <SongsCarouselContainer>
        <Subtitle>Most popular</Subtitle>
        <SongsCarousel>
          <SongsCarouselItem>
            <span>Lorem</span>
          </SongsCarouselItem>
        </SongsCarousel>
        <BaseCarouselControls>
          <span>
            <BsArrowLeftShort />
          </span>
          <span>
            <BsArrowRightShort />
          </span>
        </BaseCarouselControls>
      </SongsCarouselContainer>
    </SongsContainer>
  );
}

export default Songs;
