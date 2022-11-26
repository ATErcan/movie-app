import styled from "styled-components";

export const ArrowsContainer = styled.div`
  display: flex;
  justify-content: center;
  column-gap: 1rem;
  margin: 2rem 0 1rem;
`;

export const LeftArrowBtn = styled.button`
  background-color: unset;
  border: 0.5px solid #333;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  width: 150px;
  cursor: pointer;
  display: ${({ noPrevPage }) => (noPrevPage ? "none" : "block")};
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 576px) {
    padding: 0.7rem 1rem;
    width: 170px;
    font-size: 1.4rem;
  }
`;
export const RightArrowBtn = styled.button`
  background-color: unset;
  border: 0.5px solid #333;
  border-radius: 5px;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 0.8rem;
  width: 150px;
  display: ${({ noNextPage }) => (noNextPage ? "none" : "block")};
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
  @media screen and (min-width: 576px) {
    padding: 0.7rem 1rem;
    width: 170px;
    font-size: 1.4rem;
  }
`;
