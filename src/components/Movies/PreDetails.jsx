import { useNavigate } from "react-router-dom";
import {
  GenreCont,
  GenreTexts,
  Info,
  MovieBackground,
  MovieDetailsBtn,
  MovieNames,
  MovieOverview,
  MovieVote,
  PreDetailsContainer,
  TitleAndScore,
} from "../../styles/PreDetails.styled";

const PreDetails = ({ movie, prevError }) => {
  const baseImgLink = "https://image.tmdb.org/t/p/original";
  const navigate = useNavigate();

  if (prevError) {
    return <h1 style={{ color: "#fff" }}>error</h1>;
  } else {
    return (
      <PreDetailsContainer>
        <MovieBackground src={`${baseImgLink}${movie?.backdrop_path}`} />
        <Info>
          <GenreCont>
            {movie?.genres?.map((genre) => {
              return <GenreTexts key={genre.id}>{genre.name}</GenreTexts>;
            })}
          </GenreCont>
          <TitleAndScore>
            <MovieNames>{movie?.title}</MovieNames>
            <MovieVote>{movie?.vote_average?.toFixed(1)}</MovieVote>
          </TitleAndScore>
          <MovieOverview>{movie?.overview}</MovieOverview>
          <MovieDetailsBtn onClick={() => navigate(`details/${movie.id}`)}>
            See Details
          </MovieDetailsBtn>
        </Info>
      </PreDetailsContainer>
    );
  }
};

export default PreDetails;
