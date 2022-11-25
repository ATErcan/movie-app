import { useEffect, useState } from "react";
import axios from "axios";
import {
  BasicContainers,
  Companies,
  CompaniesContainer,
  CompanyLogo,
  CompanyName,
  DetailInfo,
  DetailsContainer,
  DetailsSection,
  Genre,
  GenreContainer,
  LogoContainer,
  MovieBasicInfo,
  MovieInfo,
  MovieRating,
  MovieRatingInfo,
  MovieRatingScore,
  MovieTitle,
  OriginalTitle,
  Overview,
  Popularity,
  PopularityIcon,
  PopularityText,
  RatingTitle,
  ReleaseDate,
  ScoreIcon,
  Tagline,
} from "../../styles/Details.styled";
import { useParams } from "react-router-dom";
import MovieTrailer from "./MovieTrailer";
import LoadingPage from "../Status/LoadingPage";
import NoData from "../Status/NoData";

const MovieDetails = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const baseImgLink = "https://image.tmdb.org/t/p/original";

  const [detailsObject, setDetailsObject] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`${baseUrl}movie/${id}?api_key=${MOVIE_API}`)
      .then((res) => setDetailsObject(res.data))
      .catch((error) => setError(true))
      .finally(setLoading(false));
  }, []);

  const genreArray = detailsObject.genres?.map((genres) => {
    return <Genre key={genres.id}>{genres.name}</Genre>;
  });

  const companiesArray = detailsObject.production_companies?.map((company) => {
    return (
      <Companies key={company.id}>
        <LogoContainer>
          <CompanyLogo
            src={
              company.logo_path
                ? `${baseImgLink}${company?.logo_path}`
                : "https://img.freepik.com/free-vector/illustration-camera-icon_53876-5563.jpg?w=826&t=st=1669206703~exp=1669207303~hmac=e0ba54cf4b5f844ef289b9c724bff39926c0c8dc2edd8b2738308d66d89f7733"
            }
          />
        </LogoContainer>
        <CompanyName>{company?.name}</CompanyName>
      </Companies>
    );
  });

  if (loading) {
    return <LoadingPage />;
  } else if (error) {
    return <NoData />;
  } else {
    return (
      <DetailsSection>
        <DetailsContainer>
          <MovieInfo>
            <MovieBasicInfo>
              <MovieTitle>{detailsObject?.title}</MovieTitle>
              <OriginalTitle>
                Original Title: {detailsObject?.original_title}
              </OriginalTitle>
              <ReleaseDate>{detailsObject.release_date}</ReleaseDate>
            </MovieBasicInfo>
            <MovieRatingInfo>
              <BasicContainers>
                <RatingTitle>TMBD Rating</RatingTitle>
                <MovieRating>
                  <ScoreIcon />
                  <MovieRatingScore>
                    {detailsObject?.vote_average?.toFixed(1)}
                  </MovieRatingScore>
                  /10 <br /> {detailsObject?.vote_count}
                </MovieRating>
              </BasicContainers>
              <BasicContainers>
                <RatingTitle>Popularity</RatingTitle>
                <Popularity>
                  <PopularityIcon />
                  <PopularityText>{detailsObject?.popularity}</PopularityText>
                </Popularity>
              </BasicContainers>
            </MovieRatingInfo>
          </MovieInfo>

          {detailsObject && <MovieTrailer movie={detailsObject} />}

          <DetailInfo>
            <GenreContainer>{genreArray}</GenreContainer>
            <Tagline>{`"${detailsObject.tagline}"`}</Tagline>
            <Overview>{detailsObject.overview}</Overview>
            <CompaniesContainer>{companiesArray}</CompaniesContainer>
          </DetailInfo>
        </DetailsContainer>
      </DetailsSection>
    );
  }
};

export default MovieDetails;
