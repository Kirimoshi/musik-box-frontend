import React from 'react';
import PropTypes from 'prop-types';
import { GenreCard, GenresContainer, GenresList } from './Genres.styles';
import { GENRES_COLORS } from '../constants/constants';
function Genres({ genres, className }) {
  return (
    <GenresContainer className={className}>
      <h3 className='genres__title'>Top genres</h3>
      <GenresList className='genres__list'>
        {genres.map(({ id, attributes: { title } }, index) => (
          <GenreCard key={id} $color={GENRES_COLORS[index]} data-genre-id={id}>
            {title}
          </GenreCard>
        ))}
      </GenresList>
    </GenresContainer>
  );
}

Genres.propTypes = {
  genres: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      attributes: PropTypes.shape({
        title: PropTypes.string.isRequired,
      }),
    })
  ).isRequired,
  className: PropTypes.string,
};

export default Genres;
