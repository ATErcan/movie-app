import styled from "styled-components";
import { ImArrowDown } from "react-icons/im";

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 0 0 auto;
  position: relative;
  width: 200px;
  height: auto;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  &:hover {
    opacity: 0.7;
    transform: scale(1.1);
  }
  @media screen and (min-width: 768px) {
    width: 250px;
  }
  @media screen and (min-width: 1200px) {
    width: 270px;
  }
`;

export const CardMoviePoster = styled.img`
  width: 100%;
`;

export const CardTitleContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  position: absolute;
  bottom: 1rem;
  left: 0;
  right: 0;
  width: 100%;
  height: auto;
  margin: auto;
  text-align: center;
  justify-content: center;
  color: #fff;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0.5rem;
  overflow: hidden;
  opacity: ${({ showTitle }) => (showTitle ? "1" : "0")};
  animation: ${({ showTitle }) =>
    showTitle ? "titleIn .3s linear 1" : "titleOut .3s linear 1"};
  @keyframes titleIn {
    0% {
      opacity: 0;
      transform: translateX(-100%);
    }
    100% {
      opacity: 1;
      transform: translateX(0);
    }
  }
  @keyframes titleOut {
    0% {
      opacity: 1;
      transform: translateX(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-100%);
    }
  }
`;

export const CardMovieTitle = styled.h3`
  font-size: 1.2rem;
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;

export const CardMovieStatistics = styled.div`
  display: flex;
`;

export const CardMovieScore = styled.span``;

export const CardMoviePopularity = styled.span``;

export const CardMovieDate = styled.span``;

export const CardMovieOverview = styled.p``;
