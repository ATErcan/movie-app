import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieGroups/MovieCard";
import {
  MovieGridContainer,
  Page,
  PageTitle,
  PageTitleContainer,
} from "../styles/MovieCard.styled";

const TopRatedMovies = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [page, setpPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/top_rated?api_key=${MOVIE_API}&page=${page}`)
      .then((res) => setTopRatedMovies(res.data.results));
  }, []);

  const topRatedMovieArray = topRatedMovies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <Page>
      <MovieGridContainer>
        <PageTitleContainer>
          <PageTitle>Top Rated Movies</PageTitle>
        </PageTitleContainer>
        {topRatedMovieArray}
      </MovieGridContainer>
    </Page>
  );
};

export default TopRatedMovies;
