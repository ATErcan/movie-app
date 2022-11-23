import { useState } from "react";
import { useNavigate } from "react-router-dom";
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
  const navigate = useNavigate();

  return (
    <CardContainer
      onClick={() => navigate(`/movies/details/${movie.id}`)}
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
