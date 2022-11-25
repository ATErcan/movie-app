import styled from "styled-components";
import { AiFillStar } from "react-icons/ai";
import { HiOutlineTrendingUp } from "react-icons/hi";

export const DetailsSection = styled.section`
  background-color: #1f1f1f;
  color: #fff;
  font-family: "Roboto", sans-serif;
`;

export const DetailsContainer = styled.div`
  max-width: 80rem;
  margin: auto;
`;

export const MovieInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding: 1rem 2rem;
  @media screen and (min-width: 768px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
  }
  @media screen and (min-width: 1300px) {
    padding: 2rem 0rem;
  }
`;

export const MovieBasicInfo = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

export const MovieTitle = styled.h2`
  font-size: 2rem;
  margin-bottom: 0.3rem;
  @media screen and (min-width: 768px) {
    font-size: 2.2rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 2.35rem;
  }
`;

export const OriginalTitle = styled.h4`
  font-size: 0.8rem;
  color: #afa0a3;
  color: rgba(255, 255, 255, 0.7);
  font-weight: normal;
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const ReleaseDate = styled.h4`
  font-size: 0.8rem;
  font-weight: normal;
  color: rgba(255, 255, 255, 0.7);
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
`;

export const MovieRatingInfo = styled.div`
  display: flex;
  column-gap: 1rem;
  margin-bottom: 0.5rem;
`;

export const BasicContainers = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.3rem;
  align-items: center;
`;

export const RatingTitle = styled.h4`
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.7);
  @media screen and (min-width: 768px) {
    font-size: 1rem;
  }
`;

export const ScoreIcon = styled(AiFillStar)`
  color: #f9c500;
`;

export const PopularityIcon = styled(HiOutlineTrendingUp)`
  color: #fb4b4b;
`;

export const MovieRating = styled.h4`
  color: rgba(255, 255, 255, 0.7);
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const MovieRatingScore = styled.span`
  color: rgb(255, 255, 255);
  font-size: 1.1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.2rem;
  }
`;

export const Popularity = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.3rem;
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const PopularityText = styled.h4`
  font-size: 1rem;
  @media screen and (min-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const ImageAndTrailer = styled.div`
  display: flex;
  position: relative;
  @media screen and (min-width: 576px) {
    column-gap: 0.3rem;
  }
`;

export const DetailPoster = styled.img`
  position: absolute;
  width: 25%;
  bottom: 0;
  left: 1rem;
  z-index: 2;
  @media screen and (min-width: 576px) {
    position: static;
    width: 35%;
  }
  @media screen and (min-width: 768px) {
    width: 35%;
  }
  @media screen and (min-width: 992px) {
    max-width: 350px;
    max-height: 520px;
  }
`;

export const TrailerContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
  padding-top: 56.25%; /* 16:9 Aspect Ratio */
  @media screen and (min-width: 992px) {
    padding: 0;
    max-height: 520px;
    max-width: 57.5rem;
  }
`;

export const Trailer = styled.iframe`
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  width: 100%;
  height: 100%;
  border: none;
`;

export const NoTrailer = styled.img`
  width: 50%;
  margin: auto;
  @media screen and (min-width: 768px) {
    max-width: 280px;
  }
`;

export const DetailInfo = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
  @media screen and (min-width: 768px) {
    padding: 1rem 2rem;
  }
  @media screen and (min-width: 1300px) {
    padding: 2rem 0rem;
  }
`;

export const GenreContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin: 1rem 0;
  column-gap: 0.5rem;
`;

export const Genre = styled.h6`
  border: 1px solid rgba(255, 255, 255, 0.5);
  font-size: 0.8rem;
  padding: 0.4rem;
  border-radius: 10px;
  @media screen and (min-width: 768px) {
    font-size: 0.9rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1rem;
  }
`;

export const Tagline = styled.h3`
  font-size: 1.2rem;
  margin-bottom: 1rem;
  font-style: italic;
  @media screen and (min-width: 768px) {
    font-size: 1.3rem;
  }
  @media screen and (min-width: 992px) {
    font-size: 1.5rem;
  }
`;

export const Overview = styled.p`
  font-size: 1rem;
  line-height: 1.3rem;
`;

export const CompaniesContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
  column-gap: 1rem;
  margin: 1rem 0;
  @media screen and (min-width: 992px) {
    margin: 2rem 0;
  }
`;

export const Companies = styled.div`
  flex: 0 0 150px;
  display: flex;
  flex-direction: column;
  align-items: center;
  row-gap: 0.5rem;
`;

export const LogoContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #fff;
  overflow: hidden;
`;

export const CompanyLogo = styled.img`
  width: 100%;
`;

export const CompanyName = styled.h6`
  @media screen and (min-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const CastContainer = styled.div``;

export const SecondaryTitle = styled.h2``;

export const ActingCast = styled.div``;

export const Acting = styled.div``;

export const CastImage = styled.img``;

export const CastName = styled.h5``;

export const Character = styled.h6``;

export const SimilarContainer = styled.div``;

export const SimilarMovies = styled.div``;

export const Similar = styled.div``;

export const SimilarPoster = styled.img``;

export const SimilarTitle = styled.h3``;
