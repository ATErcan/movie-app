import { useState } from "react";
import {
  CardContainer,
  MovieDescription,
  MovieOverview,
  MoviePoster,
  MovieTitle,
} from "../../styles/MovieCard.styled";

const MovieCard = ({ movie }) => {
  const baseImgLink = "https://image.tmdb.org/t/p/original";
  const [showDesc, setShowDesc] = useState(false);

  return (
    <CardContainer
      onMouseOver={() => setShowDesc(true)}
      onMouseOut={() => setShowDesc(false)}
    >
      <MoviePoster
        src={`${baseImgLink}${movie.poster_path}`}
        alt={movie.title}
      />
      <MovieDescription showDesc={showDesc}>
        <MovieTitle showDesc={showDesc}>{movie.title}</MovieTitle>

        <MovieOverview showDesc={showDesc}>{movie.overview}</MovieOverview>
      </MovieDescription>
    </CardContainer>
  );
};

export default MovieCard;
