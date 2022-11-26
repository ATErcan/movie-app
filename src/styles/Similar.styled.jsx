import styled from "styled-components";

export const SimilarCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  height: auto;
  width: 120px;
  position: relative;
  cursor: pointer;
  @media screen and (min-width: 576px) {
    width: 150px;
  }
  @media screen and (min-width: 768px) {
    width: 180px;
  }
  @media screen and (min-width: 992px) {
    width: 200px;
  }
`;

export const SimilarImage = styled.img`
  width: 100%;
`;

export const SimilarTitleContainer = styled.div`
  display: flex;
  align-items: center;
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

export const SimilarTitle = styled.h3`
  font-size: 1.2rem;
  @media screen and (min-width: 1200px) {
    font-size: 1.5rem;
  }
`;
