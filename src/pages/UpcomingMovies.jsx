import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieGroups/MovieCard";
import {
  MovieGridContainer,
  Page,
  PageTitle,
  PageTitleContainer,
} from "../styles/MovieCard.styled";

const UpcomingMovies = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [page, setpPage] = useState(1);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/upcoming?api_key=${MOVIE_API}&page=${page}`)
      .then((res) => setUpcomingMovies(res.data.results));
  }, []);

  const upcomingMovieArray = upcomingMovies.map((movie) => {
    return <MovieCard key={movie.id} movie={movie} />;
  });

  return (
    <Page>
      <MovieGridContainer>
        <PageTitleContainer>
          <PageTitle>Upcoming Movies</PageTitle>
        </PageTitleContainer>
        {upcomingMovieArray}
      </MovieGridContainer>
    </Page>
  );
};

export default UpcomingMovies;
