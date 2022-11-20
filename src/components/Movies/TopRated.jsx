import axios from "axios";
import { useEffect, useState } from "react";
import {
  GroupTitleContainer,
  GroupContainer,
  MovieGroupsContainer,
  MovieGroupsTitle,
  SeeAllLink,
} from "../../styles/Popular.styled";
import SingleMovieCard from "./SingleMovieCard";

const TopRated = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [topRatedMovies, setTopRatedMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/top_rated?api_key=${MOVIE_API}`)
      .then((res) => setTopRatedMovies(res.data.results));
  }, []);

  const topRatedMovieCards = topRatedMovies.map((movie) => {
    return <SingleMovieCard movie={movie} />;
  });

  return (
    <GroupContainer>
      <GroupTitleContainer>
        <MovieGroupsTitle>Top Rated Movies</MovieGroupsTitle>
        <SeeAllLink to="/">See All</SeeAllLink>
      </GroupTitleContainer>
      <MovieGroupsContainer>{topRatedMovieCards}</MovieGroupsContainer>;
    </GroupContainer>
  );
};

export default TopRated;
