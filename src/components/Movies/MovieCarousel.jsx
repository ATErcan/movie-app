import axios from "axios";
import { useEffect, useState } from "react";
import Carousel from "react-material-ui-carousel";
import { useNavigate } from "react-router-dom";
import {
  CarouselContainer,
  DetailsBtn,
  GenreContainer,
  Genres,
  MovieInfo,
  MoviePoster,
  MovieScore,
  MovieTitle,
} from "../../styles/Carousel.styled";
import LoadingPage from "../Status/LoadingPage";
import NoData from "../Status/NoData";

const MovieCarousel = ({ previewMovies }) => {
  const [movieGenreIds, setMovieGenreIds] = useState([]);
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const baseImgLink = "https://image.tmdb.org/t/p/original";

  const [movieDetails, setMovieDetails] = useState([]);
  const [error, setError] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    previewMovies.slice(0, 5).map((movie) => {
      return setMovieGenreIds((prevGenreIds) => {
        return [...prevGenreIds, movie.id];
      });
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    setError(false);
    for (let i = 0; i < movieGenreIds.length; i++) {
      axios
        .get(`${baseUrl}movie/${movieGenreIds[i]}?api_key=${MOVIE_API}`)
        .then((res) =>
          setMovieDetails((prevMovieDetails) => {
            return [...prevMovieDetails, res.data];
          })
        )
        .catch((error) => setError(true));
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [movieGenreIds]);

  if (error) {
    return <NoData />;
  } else {
    return (
      <>
        {movieDetails?.length < 5 ? (
          <LoadingPage />
        ) : (
          <Carousel indicatorIconButtonProps={{ style: { display: "none" } }}>
            {movieDetails?.map((movie) => {
              return (
                <CarouselContainer key={movie.id}>
                  <MoviePoster src={`${baseImgLink}${movie.backdrop_path}`} />
                  <MovieInfo>
                    <GenreContainer>
                      {movie.genres.map((genre) => {
                        return <Genres key={genre.id}>{genre.name}</Genres>;
                      })}
                    </GenreContainer>
                    <MovieTitle>{movie.title}</MovieTitle>
                    <MovieScore>{movie.vote_average.toFixed(1)}</MovieScore>
                    <DetailsBtn onClick={() => navigate(`details/${movie.id}`)}>
                      See Details
                    </DetailsBtn>
                  </MovieInfo>
                </CarouselContainer>
              );
            })}
          </Carousel>
        )}
      </>
    );
  }
};

export default MovieCarousel;
