import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  @media screen and (min-width: 992px) {
    flex-direction: row;
  }
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff;
  padding: 1rem 2rem;
  @media screen and (min-width: 576px) {
    width: 60%;
    margin: 2rem auto;
  }
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const Catchword = styled.h1`
  margin-bottom: 0.5rem;
  font-family: "Plus Jakarta Sans", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2rem;
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 2.4rem;
  }
`;

export const MainDesc = styled.p`
  line-height: 1.5rem;
  text-align: justify;
  font-family: "IBM Plex Sans", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
    width: 75%;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3rem;
  }
`;

export const DiveInBtn = styled(Link)`
  background-color: #007fff;
  color: #fff;
  text-decoration: none;
  margin-top: 1rem;
  padding: 0.6rem 2rem;
  border-radius: 15px;
  font-weight: bold;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  &:hover {
    background-color: #0059b2;
  }
`;

export const WebsiteDesc = styled.div`
  background-color: #f3f6f9;
  padding: 1rem;
  @media screen and (min-width: 992px) {
    width: 50%;
  }
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  column-gap: 1rem;
  @media screen and (min-width: 576px) {
    width: 75%;
    margin: auto;
  }
`;

export const Thumbnails = styled.img`
  width: 35%;
`;

export const Descriptions = styled.h4`
  font-size: 0.7rem;
  font-weight: normal;
  text-align: justify;
  font-family: "IBM Plex Sans", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 0.8rem;
  }
  @media screen and (min-width: 1200px) {
    font-size: 1rem;
  }
`;
