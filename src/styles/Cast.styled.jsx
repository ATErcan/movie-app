import styled from "styled-components";

export const CastContainer = styled.div`
  padding: 0 1rem;
  @media screen and (min-width: 1300px) {
    padding: 0;
  }
`;

export const SectionTitles = styled.h3`
  font-size: 1.5rem;
  text-decoration: underline;
  @media screen and (min-width: 576px) {
    font-size: 1.7rem;
  }
`;

export const CastStructure = styled.div`
  display: flex;
  column-gap: 1rem;
  overflow-y: hidden;
  overflow-x: scroll;
  padding: 1rem 0;
  ::-webkit-scrollbar {
    height: 8px;
    visibility: visible;
  }
  ::-webkit-scrollbar-thumb {
    width: 50px;
    border-radius: 30px;
    background-color: #aaa;
  }
`;

export const CastCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  flex: 0 0 auto;
  height: auto;
  row-gap: 0.3rem;
`;

export const CastImage = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  @media screen and (min-width: 576px) {
    width: 120px;
    height: 120px;
  }
  @media screen and (min-width: 768px) {
    width: 150px;
    height: 150px;
  }
`;

export const CastName = styled.h4`
  font-size: 1rem;
`;

export const CharacterName = styled.h5`
  font-size: 0.8rem;
`;

export const StatusContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ErrorMessage = styled.h2`
  color: #fff;
  font-size: 1rem;
  font-weight: normal;
  @media screen and (min-width: 576px) {
    font-size: 1.2rem;
  }
  @media screen and (min-width: 768px) {
    font-size: 1.8rem;
  }
`;
