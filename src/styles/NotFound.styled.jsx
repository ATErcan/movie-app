import styled from "styled-components";

export const NotFoundPage = styled.div`
  min-height: calc(100vh - 64px);
  @media screen and (min-width: 576px) {
    min-height: calc(100vh - 80px);
  }
  @media screen and (min-width: 768px) {
    min-height: calc(100vh - 85px);
  }
`;

export const NotFoundImage = styled.img`
  width: 100%;
  @media screen and (min-width: 992px) {
    max-width: 70%;
    display: block;
    margin: auto;
  }
`;
