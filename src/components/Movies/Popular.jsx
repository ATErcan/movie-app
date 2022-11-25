import axios from "axios";
import { useEffect, useState } from "react";
import {
  GroupTitleContainer,
  PopularGroupContainer,
  MovieGroupsContainer,
  MovieGroupsTitle,
  SeeAllLink,
} from "../../styles/Popular.styled";
import LoadingPage from "../Status/LoadingPage";
import PreDetails from "./PreDetails";
import SingleMovieCard from "./SingleMovieCard";

const Popular = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [popularMovies, setPopularMovies] = useState([]);
  const [moviePreDetails, setMoviePreDetails] = useState("");
  const [showPreDetails, setShowPreDetails] = useState(false);
  const [error, setError] = useState(false);
  const [prevError, setPrevError] = useState(false);

  useEffect(() => {
    setError(false);
    try {
      axios
        .get(`${baseUrl}movie/popular?api_key=${MOVIE_API}`)
        .then((res) => setPopularMovies(res.data.results));
    } catch (error) {
      setError(true);
    }
  }, []);

  const showDetails = (e) => {
    if (!moviePreDetails) {
      getPreDetails(e.target.id);
      setShowPreDetails(true);
    } else if (moviePreDetails.id.toString() !== e.target.id) {
      getPreDetails(e.target.id);
      setShowPreDetails(true);
    } else if (moviePreDetails.id.toString() === e.target.id) {
      setShowPreDetails((prevShowPre) => !prevShowPre);
    }
  };

  const getPreDetails = async (id) => {
    setPrevError(false);
    try {
      const { data } = await axios.get(
        `${baseUrl}movie/${id}?api_key=${MOVIE_API}`
      );
      setMoviePreDetails(data);
    } catch (error) {
      setPrevError(true);
    }
  };

  const popularMovieCards = popularMovies.map((movie) => {
    return <SingleMovieCard key={movie.id} movie={movie} />;
  });

  if (error) {
    return <h1>error</h1>;
  } else {
    return (
      <PopularGroupContainer>
        <GroupTitleContainer>
          <MovieGroupsTitle>Popular Movies</MovieGroupsTitle>
          <SeeAllLink to="popular">See All</SeeAllLink>
        </GroupTitleContainer>
        <MovieGroupsContainer onClick={showDetails}>
          {popularMovieCards}
        </MovieGroupsContainer>
        {showPreDetails && (
          <PreDetails movie={moviePreDetails} prevError={prevError} />
        )}
      </PopularGroupContainer>
    );
  }
};

export default Popular;
