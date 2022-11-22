import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieGroups/MovieCard";
import {
  MovieGridContainer,
  Page,
  PageTitle,
  PageTitleContainer,
} from "../styles/MovieCard.styled";

const PopularMovies = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [popularMovies, setPopularMovies] = useState([]);
  const [popularPage, setPopularPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/popular?api_key=${MOVIE_API}&page=${popularPage}`)
      .then((res) => setPopularMovies(res.data.results));
  }, []);

  const popularMovieArray = popularMovies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <Page>
      <MovieGridContainer>
        <PageTitleContainer>
          <PageTitle>Popular Movies</PageTitle>
        </PageTitleContainer>
        {popularMovieArray}
      </MovieGridContainer>
    </Page>
  );
};

export default PopularMovies;
