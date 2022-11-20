import {
  GenreCont,
  GenreTexts,
  Info,
  MovieBackground,
  MovieDetailsBtn,
  MovieNames,
  MovieVote,
  PreDetailsContainer,
} from "../../styles/PreDetails.styled";

const PreDetails = ({ movie }) => {
  const baseImgLink = "https://image.tmdb.org/t/p/original";
  return (
    <PreDetailsContainer>
      <MovieBackground src={`${baseImgLink}${movie.backdrop_path}`} />
      <Info>
        <GenreCont>
          {movie.genres.map((genre) => {
            return <GenreTexts key={genre.id}>{genre.name}</GenreTexts>;
          })}
        </GenreCont>
        <MovieNames>{movie.title}</MovieNames>
        <MovieVote>{movie.vote_average.toFixed(1)}</MovieVote>
        <MovieDetailsBtn>See Details</MovieDetailsBtn>
      </Info>
    </PreDetailsContainer>
  );
};

export default PreDetails;
