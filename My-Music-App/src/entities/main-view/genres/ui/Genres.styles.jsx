import styled from 'styled-components';

export const GenresContainer = styled.section`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  & > h3 {
    line-height: 24px;
    letter-spacing: 0.15px;
    margin-bottom: 12px;
  }
`;

export const GenresList = styled.ul`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 32px;
`;

export const GenreCard = styled.li`
  display: flex;
  height: 32px;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  background: ${({ $color }) => $color};
  box-shadow: 0px 1px 2px 0px rgba(0, 0, 0, 0.3),
    0px 1px 3px 1px rgba(0, 0, 0, 0.15);
  padding: 6px 16px;
  font-size: 14px;
  line-height: 20px;
  letter-spacing: 0.1px;
`;
