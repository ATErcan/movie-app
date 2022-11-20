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
          <GenreTexts>Random</GenreTexts>
        </GenreCont>
        <MovieNames>Bullshit</MovieNames>
        <MovieVote>Go</MovieVote>
        <MovieDetailsBtn>Yo</MovieDetailsBtn>
      </Info>
    </PreDetailsContainer>
  );
};

export default PreDetails;
