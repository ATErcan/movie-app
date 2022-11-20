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

const Upcoming = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [upcomingMovies, setUpcomingMovies] = useState([]);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/upcoming?api_key=${MOVIE_API}`)
      .then((res) => setUpcomingMovies(res.data.results));
  }, []);

  const upcomingMovieCards = upcomingMovies.map((movie) => {
    return <SingleMovieCard movie={movie} />;
  });

  return (
    <GroupContainer>
      <GroupTitleContainer>
        <MovieGroupsTitle>Upcoming Movies</MovieGroupsTitle>
        <SeeAllLink to="/">See All</SeeAllLink>
      </GroupTitleContainer>
      <MovieGroupsContainer>{upcomingMovieCards}</MovieGroupsContainer>;
    </GroupContainer>
  );
};

export default Upcoming;
