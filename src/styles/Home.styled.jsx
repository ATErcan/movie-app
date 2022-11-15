import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeSection = styled.section`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
`;

export const HomeHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  padding: 1rem;
`;

export const Catchword = styled.h1`
  margin-bottom: 0.5rem;
`;

export const MainDesc = styled.p`
  line-height: 1.5rem;
  text-align: justify;
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
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 1rem 0.5rem;
  column-gap: 1rem;
`;

export const Thumbnails = styled.img`
  width: 35%;
`;

export const Descriptions = styled.h4`
  font-size: 0.7rem;
  font-weight: normal;
  text-align: justify;
`;
