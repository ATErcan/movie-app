import axios from "axios";
import { useEffect, useState } from "react";
import {
  GroupTitleContainer,
  PopularGroupContainer,
  MovieGroupsContainer,
  MovieGroupsTitle,
  SeeAllLink,
} from "../../styles/Popular.styled";
import SingleMovieCard from "./SingleMovieCard";

const Popular = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/popular?api_key=${MOVIE_API}`)
      .then((res) => setPopularMovies(res.data.results));
  }, []);

  const popularMovieCards = popularMovies.map((movie) => {
    return <SingleMovieCard movie={movie} />;
  });

  return (
    <PopularGroupContainer>
      <GroupTitleContainer>
        <MovieGroupsTitle>Popular Movies</MovieGroupsTitle>
        <SeeAllLink to="/">See All</SeeAllLink>
      </GroupTitleContainer>
      <MovieGroupsContainer>{popularMovieCards}</MovieGroupsContainer>;
    </PopularGroupContainer>
  );
};

export default Popular;
