import { useEffect, useState } from "react";
import axios from "axios";
import {
  BasicContainers,
  Companies,
  CompaniesContainer,
  CompanyLogo,
  CompanyName,
  DetailInfo,
  DetailPoster,
  DetailsContainer,
  DetailsSection,
  Genre,
  GenreContainer,
  ImageAndTrailer,
  MovieBasicInfo,
  MovieInfo,
  MovieRating,
  MovieRatingInfo,
  MovieRatingScore,
  MovieTitle,
  OriginalTitle,
  Overview,
  Popularity,
  RatingTitle,
  ReleaseDate,
  Tagline,
  Trailer,
  TrailerContainer,
} from "../../styles/Details.styled";
import { useParams } from "react-router-dom";

const MovieDetails = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const baseImgLink = "https://image.tmdb.org/t/p/original";

  const [detailsObject, setDetailsObject] = useState("");
  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/436270?api_key=${MOVIE_API}`)
      .then((res) => setDetailsObject(res.data));
  }, []);

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
                <MovieRatingScore>
                  {detailsObject?.vote_average?.toFixed(1)}
                </MovieRatingScore>
                /10 {detailsObject?.vote_count}
              </MovieRating>
            </BasicContainers>
            <BasicContainers>
              <RatingTitle>Popularity</RatingTitle>
              <Popularity>{detailsObject?.popularity}</Popularity>
            </BasicContainers>
          </MovieRatingInfo>
        </MovieInfo>

        <ImageAndTrailer>
          <DetailPoster
            src={`${baseImgLink}${detailsObject.poster_path}`}
            alt={detailsObject.title}
          />
          <TrailerContainer>
            <Trailer></Trailer>
          </TrailerContainer>
        </ImageAndTrailer>

        <DetailInfo>
          <GenreContainer>
            <Genre>Action</Genre>
          </GenreContainer>
          <Tagline>{detailsObject.tagline}</Tagline>
          <Overview>{detailsObject.overview}</Overview>
          <CompaniesContainer>
            <Companies>
              <CompanyLogo />
              <CompanyName>Marvel</CompanyName>
            </Companies>
          </CompaniesContainer>
        </DetailInfo>
      </DetailsContainer>
    </DetailsSection>
  );
};

export default MovieDetails;
