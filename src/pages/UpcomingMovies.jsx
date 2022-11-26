import axios from "axios";
import { useEffect, useState } from "react";
import MovieCard from "../components/MovieGroups/MovieCard";
import NavigatePages from "../components/MovieGroups/NavigatePages";
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
  const [page, setPage] = useState(1);
  const [noPrevPage, setNoPrevPage] = useState(false);
  const [noNextPage, setNoNextPage] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/upcoming?api_key=${MOVIE_API}&page=${page}`)
      .then((res) => setUpcomingMovies(res.data.results));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  useEffect(() => {
    if (page === 1) {
      setNoPrevPage(true);
    } else if (page === 16) {
      setNoNextPage(true);
    } else {
      setNoNextPage(false);
      setNoPrevPage(false);
    }
  }, [page]);

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
      <NavigatePages
        noPrevPage={noPrevPage}
        noNextPage={noNextPage}
        setPage={setPage}
      />
    </Page>
  );
};

export default UpcomingMovies;
