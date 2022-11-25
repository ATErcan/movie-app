import styled from "styled-components";
import { BsEmojiFrown } from "react-icons/bs";

export const NoDataContainer = styled.div`
  width: 100vw;
  height: 400px;
  background-color: #000;
  display: flex;
  column-gap: 0.6rem;
  align-items: center;
  justify-content: center;
`;

export const NoDataEmoji = styled(BsEmojiFrown)`
  font-size: 1.2rem;
  min-width: 80px;
  color: #fff;
  @media screen and (min-width: 576px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;

export const NoDataText = styled.h2`
  color: #fff;
  font-size: 1.2rem;
  @media screen and (min-width: 576px) {
    font-size: 1.4rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 2.5rem;
  }
`;
