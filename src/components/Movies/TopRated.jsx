import axios from "axios";
import { useEffect, useState } from "react";
import {
  GroupTitleContainer,
  GroupContainer,
  MovieGroupsContainer,
  MovieGroupsTitle,
  SeeAllLink,
} from "../../styles/Popular.styled";
import PreDetails from "./PreDetails";
import SingleMovieCard from "./SingleMovieCard";

const TopRated = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [moviePreDetails, setMoviePreDetails] = useState("");
  const [showPreDetails, setShowPreDetails] = useState(false);
  const [error, setError] = useState(false);
  const [prevError, setPrevError] = useState(false);

  useEffect(() => {
    setError(false);
    try {
      axios
        .get(`${baseUrl}movie/top_rated?api_key=${MOVIE_API}`)
        .then((res) => setTopRatedMovies(res.data.results));
    } catch (error) {
      setError(true);
    }
  }, []);

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

  const topRatedMovieCards = topRatedMovies.map((movie) => {
    return <SingleMovieCard key={movie.id} movie={movie} />;
  });

  if (error) {
    return <h1>error</h1>;
  } else {
    return (
      <GroupContainer>
        <GroupTitleContainer>
          <MovieGroupsTitle>Top Rated Movies</MovieGroupsTitle>
          <SeeAllLink to="top_rated">See All</SeeAllLink>
        </GroupTitleContainer>
        <MovieGroupsContainer onClick={showDetails}>
          {topRatedMovieCards}
        </MovieGroupsContainer>
        {showPreDetails && (
          <PreDetails movie={moviePreDetails} prevError={prevError} />
        )}
      </GroupContainer>
    );
  }
};

export default TopRated;
