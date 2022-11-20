import styled from "styled-components";
import { Link } from "react-router-dom";

export const PopularGroupContainer = styled.div`
  background-color: #000;
  margin-top: -0.6rem;
  padding: 1rem 0.8rem;
  @media screen and (min-width: 576px) {
    margin-top: -0.9rem;
    padding: 2rem 1.5rem 1rem;
  }
`;

export const GroupContainer = styled.div`
  background-color: #000;
  padding: 1rem 0.8rem;
  @media screen and (min-width: 576px) {
    padding: 1rem 1.5rem;
  }
`;

export const GroupTitleContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding: 0 1rem;
  gap: 0.5rem;
`;

export const MovieGroupsTitle = styled.h2`
  font-size: 1.3rem;
  color: #fff;
  @media screen and (min-width: 576px) {
    font-size: 1.5rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2rem;
  }
`;

export const SeeAllLink = styled(Link)`
  color: #fff;
  font-size: 1rem;
  @media screen and (min-width: 992px) {
    font-size: 1.2rem;
  }
`;

export const MovieGroupsContainer = styled.section`
  display: flex;
  column-gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  ::-webkit-scrollbar {
    height: 8px;
    visibility: visible;
  }
  ::-webkit-scrollbar-thumb {
    width: 50px;
    border-radius: 30px;
    background-color: #222;
  }
`;
