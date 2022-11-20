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
} from "../../styles/SingleMovieCard.styled";
import PreDetails from "./PreDetails";

const SingleMovieCard = ({ movie }) => {
  const baseImgLink = "https://image.tmdb.org/t/p/original";
  const [showTitle, setShowTitle] = useState(false);

  return (
    <>
      <CardContainer
        onMouseOver={() => setShowTitle(true)}
        onMouseOut={() => setShowTitle(false)}
      >
        <CardMoviePoster
          src={`${baseImgLink}${movie.poster_path}`}
          alt={movie.original_title}
          id={`${movie.id}`}
        />
        <CardTitleContainer showTitle={showTitle} id={`${movie.id}`}>
          <CardMovieTitle id={`${movie.id}`}>{movie.title}</CardMovieTitle>
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
    </>
  );
};

export default SingleMovieCard;
