import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  SimilarCard,
  SimilarImage,
  SimilarTitle,
  SimilarTitleContainer,
} from "../../styles/Similar.styled";

const SimilarCardComp = ({ movie }) => {
  const [showTitle, setShowTitle] = useState(false);
  const navigate = useNavigate();

  const baseImgLink = "https://image.tmdb.org/t/p/original";

  return (
    <SimilarCard
      onMouseOver={() => setShowTitle(true)}
      onMouseOut={() => setShowTitle(false)}
      onClick={() => {
        navigate(`/movies/details/${movie.id}`);
        window.scrollTo(0, 0);
      }}
    >
      <SimilarImage src={`${baseImgLink}${movie?.poster_path}`} />
      <SimilarTitleContainer showTitle={showTitle}>
        <SimilarTitle>{movie?.title}</SimilarTitle>
      </SimilarTitleContainer>
    </SimilarCard>
  );
};

export default SimilarCardComp;
