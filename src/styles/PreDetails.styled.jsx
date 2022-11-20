import styled from "styled-components";
import {
  DetailsBtn,
  GenreContainer,
  Genres,
  MovieInfo,
  MovieScore,
  MovieTitle,
} from "./Carousel.styled";

export const PreDetailsContainer = styled.div`
  position: relative;
  margin-top: 0.5rem;
`;

export const MovieBackground = styled.img`
  width: 100%;
`;

export const Info = styled(MovieInfo)`
  margin: 0;
`;

export const GenreCont = styled(GenreContainer)`
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 0.4rem;
`;

export const GenreTexts = styled(Genres)``;

export const MovieNames = styled(MovieTitle)``;

export const MovieVote = styled(MovieScore)``;

export const MovieDetailsBtn = styled(DetailsBtn)``;
