import { useState } from "react";
import {
  CardContainer,
  CardMoviePoster,
  CardMovieTitle,
  CardTitleContainer,
} from "../../styles/SingleMovieCard.styled";

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
      </CardContainer>
    </>
  );
};

export default SingleMovieCard;
