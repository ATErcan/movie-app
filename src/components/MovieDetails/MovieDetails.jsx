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

const MovieDetails = () => {
  return (
    <DetailsSection>
      <DetailsContainer>
        <MovieInfo>
          <MovieBasicInfo>
            <MovieTitle>Shawshank Redemption</MovieTitle>
            <OriginalTitle>Shawshank Redemption</OriginalTitle>
            <ReleaseDate>2022-11-20</ReleaseDate>
          </MovieBasicInfo>
          <MovieRatingInfo>
            <BasicContainers>
              <RatingTitle>TMBD Rating</RatingTitle>
              <MovieRating>
                <MovieRatingScore>9.3</MovieRatingScore>/10 2.7M
              </MovieRating>
            </BasicContainers>
            <BasicContainers>
              <RatingTitle>Popularity</RatingTitle>
              <Popularity>390.000</Popularity>
            </BasicContainers>
          </MovieRatingInfo>
        </MovieInfo>

        <ImageAndTrailer>
          <DetailPoster />
          <TrailerContainer>
            <Trailer></Trailer>
          </TrailerContainer>
        </ImageAndTrailer>

        <DetailInfo>
          <GenreContainer>
            <Genre>Action</Genre>
          </GenreContainer>
          <Tagline>Some shit</Tagline>
          <Overview>Another shit</Overview>
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
