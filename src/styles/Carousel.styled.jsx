import styled from "styled-components";

export const CarouselContainer = styled.div`
  position: relative;
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  margin-top: -0.3rem;
  padding: 1rem;
  background-color: #000;
  color: #fff;
  overflow: hidden;
  @media screen and (min-width: 576px) {
    margin-top: 0;
    padding: 2rem;
    position: absolute;
    z-index: 5;
    top: 50%;
    transform: translateY(-50%);
    background-color: unset;
  }
  @media screen and (min-width: 1400px) {
    padding-left: 4rem;
  }
  @keyframes slide {
    0% {
      transform: translateY(100%);
      visibility: hidden;
    }
    100% {
      transform: translate(0);

      visibility: visible;
    }
  }
`;

export const GenreContainer = styled.div`
  display: flex;
  column-gap: 0.7rem;
  animation: slide 0.5s linear 1;
  @media screen and (min-width: 576px) {
    column-gap: 1rem;
  }
`;

export const Genres = styled.h6`
  padding: 0.5rem 0.7rem;
  background-color: rgba(150, 150, 150, 0.3);
  border-radius: 30px;
  font-size: 0.7rem;
  @media screen and (min-width: 576px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 768px) {
    background-color: rgba(200, 200, 200, 0.3);
    backdrop-filter: blur(10px);
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
    padding: 0.7rem 1rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const MovieTitle = styled.h2`
  overflow: hidden;
  animation: slide 0.5s linear 1;
  font-size: 2rem;
  @media screen and (min-width: 576px) {
    font-size: 2.5rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 3rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 4rem;
  }
`;

export const MovieScore = styled.div`
  width: max-content;
  padding: 0.5rem;
  background-color: #f9c500;
  font-weight: bold;
  color: #555;
  box-shadow: rgba(0, 0, 0, 0.08) 0px 4px 12px;
  animation: slide 0.5s linear 1;
  @media screen and (min-width: 576px) {
    padding: 0.6rem;
    font-size: 1.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.8rem;
  }
`;

export const DetailsBtn = styled.button`
  background-color: #fff;
  color: #000;
  border: none;
  border-radius: 20px;
  width: 120px;
  padding: 0.5rem 0;
  animation: slide 0.5s linear 1;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 576px) {
    padding: 0.7rem 0;
    width: 140px;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1rem;
  }
`;
