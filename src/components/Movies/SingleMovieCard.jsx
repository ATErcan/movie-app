import { useState } from "react";
import {
  CardContainer,
  CardMovieDate,
  CardMovieOverview,
  CardMoviePopularity,
  CardMoviePoster,
  CardMovieScore,
  CardMovieStatistics,
  CardMovieTitle,
  CardTitleContainer,
  MovieDetailsArrow,
} from "../../styles/SingleMovieCard.styled";

const SingleMovieCard = ({ movie }) => {
  const baseImgLink = "https://image.tmdb.org/t/p/original";
  const [showTitle, setShowTitle] = useState(false);

  return (
    <CardContainer
      onMouseOver={() => setShowTitle(true)}
      onMouseOut={() => setShowTitle(false)}
    >
      <CardMoviePoster
        src={`${baseImgLink}${movie.poster_path}`}
        alt={movie.original_title}
      />
      <CardTitleContainer showTitle={showTitle}>
        <MovieDetailsArrow />
        <CardMovieTitle>{movie.title}</CardMovieTitle>
      </CardTitleContainer>
      {/*       <CardMovieStatistics>
        <CardMovieScore>{movie.vote_average.toFixed(1)}</CardMovieScore>
        <CardMoviePopularity>
          <b>Popularity:</b> {movie.popularity}
        </CardMoviePopularity>
        <CardMovieDate>{movie.release_date}</CardMovieDate>
      </CardMovieStatistics> */}
      {/* <CardMovieOverview>{movie.overview}</CardMovieOverview> */}
    </CardContainer>
  );
};

export default SingleMovieCard;
