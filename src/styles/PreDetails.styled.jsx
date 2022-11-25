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
  overflow-y: hidden;
`;

export const MovieBackground = styled.img`
  width: 100%;
  @media screen and (min-width: 992px) {
    height: 70vh;
    object-fit: cover;
  }
  @media screen and (min-width: 1400px) {
    height: 50vh;
  }
`;

export const Info = styled(MovieInfo)`
  margin: 0;
  overflow-x: hidden;
  width: 100%;
  @media screen and (min-width: 576px) {
    height: 100%;
    justify-content: center;
    row-gap: 0.6rem;
    background-image: linear-gradient(
      to left,
      rgba(0, 0, 0, 0.2),
      rgba(0, 0, 0, 0.8)
    );
  }
`;

export const GenreCont = styled(GenreContainer)`
  flex-wrap: wrap;
  row-gap: 0.5rem;
  column-gap: 0.4rem;
  animation: none;
`;

export const GenreTexts = styled(Genres)`
  @media screen and (min-width: 576px) {
    font-size: 0.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.7rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1rem;
  }
`;

export const TitleAndScore = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
  @media screen and (min-width: 576px) {
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    width: 60%;
  }
`;

export const MovieNames = styled(MovieTitle)`
  overflow: visible;
  animation: none;
  @media screen and (min-width: 576px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.7rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.9rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 2rem;
  }
`;

export const MovieVote = styled(MovieScore)`
  animation: none;
  @media screen and (min-width: 576px) {
    padding: 0.2rem;
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1200px) {
    padding: 0.3rem;
    font-size: 0.9rem;
  }
`;

export const MovieOverview = styled.p`
  @media screen and (min-width: 576px) {
    font-size: 0.8rem;
    width: 70%;
  }
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
    width: 60%;
  }
  @media screen and (min-width: 992px) {
    font-size: 0.9rem;
    width: 50%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
    width: 50%;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.1rem;
    width: 40%;
  }
`;

export const MovieDetailsBtn = styled(DetailsBtn)`
  animation: none;
  @media screen and (min-width: 576px) {
    padding: 0.3rem 0;
    width: 100px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0.4rem 0;
    width: 120px;
  }
`;
