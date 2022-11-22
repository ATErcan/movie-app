import styled from "styled-components";

export const Page = styled.section`
  background-color: #000;
  color: #fff;
  padding: 1rem 1rem 2rem;
`;

export const PageTitleContainer = styled.div`
  margin: 1rem 0;
  @media screen and (min-width: 576px) {
    grid-area: 1 / 1 / 2 / 3;
  }
  @media screen and (min-width: 992px) {
    grid-area: 1 / 1 / 2 / 4;
  }
  @media screen and (min-width: 1400px) {
    grid-area: 1 / 1 / 2 / 5;
  }
`;

export const PageTitle = styled.h2`
  text-indent: 1rem;
  @media screen and (min-width: 576px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.4rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 2.5rem;
  }
`;

export const MovieGridContainer = styled.div`
  display: grid;
  grid-template-columns: 90%;
  grid-template-rows: auto;
  gap: 1.5rem;
  justify-content: center;
  max-width: 75rem;
  margin: auto;

  @media screen and (min-width: 576px) {
    grid-template-columns: 45% 45%;
  }
  @media screen and (min-width: 992px) {
    grid-template-columns: 30% 30% 30%;
  }
  @media screen and (min-width: 1400px) {
    grid-template-columns: 24% 24% 24% 24%;
    max-width: 85rem;
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  cursor: pointer;
  overflow-y: hidden;
  max-width: 280px;
  margin: auto;
  &:hover {
    opacity: 0.8;
  }
  @media screen and (min-width: 1400px) {
    max-width: 300px;
  }
`;

export const MoviePoster = styled.img`
  width: 100%;
`;

export const MovieDescription = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem;
  background-color: rgba(0, 0, 0, 0.5);
  position: absolute;
  bottom: 0;
  opacity: ${({ showDesc }) => (showDesc ? "1" : "0")};
  animation: ${({ showDesc }) =>
    showDesc ? "aniSlide 0.5s linear 1" : "aniSlideOut 0.5s linear 1"};
  @keyframes aniSlide {
    0% {
      opacity: 0;
      transform: translateY(100%);
    }
    100% {
      opacity: 1;
      transform: translateY(0);
    }
  }
  @keyframes aniSlideOut {
    0% {
      opacity: 1;
      transform: translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateY(100%);
    }
  }
`;

export const MovieTitle = styled.h3`
  @media screen and (min-width: 576px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.5rem;
  }
`;

export const MovieOverview = styled.p`
  font-size: 0.75rem;
  overflow-y: auto;
  @media screen and (min-width: 576px) {
    font-size: 0.85rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 1400px) {
    font-size: 1.1rem;
  }
`;
