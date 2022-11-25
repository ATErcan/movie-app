import axios from "axios";
import { useEffect, useState } from "react";
import {
  GroupTitleContainer,
  GroupContainer,
  MovieGroupsContainer,
  MovieGroupsTitle,
  SeeAllLink,
} from "../../styles/Popular.styled";
import NoData from "../Status/NoData";
import PreDetails from "./PreDetails";
import SingleMovieCard from "./SingleMovieCard";

const Upcoming = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [moviePreDetails, setMoviePreDetails] = useState("");
  const [showPreDetails, setShowPreDetails] = useState(false);
  const [error, setError] = useState(false);
  const [prevError, setPrevError] = useState(false);

  useEffect(() => {
    setError(false);
    try {
      axios
        .get(`${baseUrl}movie/upcoming?api_key=${MOVIE_API}`)
        .then((res) => setUpcomingMovies(res.data.results));
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

  const upcomingMovieCards = upcomingMovies.map((movie) => {
    return <SingleMovieCard key={movie.id} movie={movie} />;
  });

  if (error) {
    <NoData />;
  } else {
    return (
      <GroupContainer>
        <GroupTitleContainer>
          <MovieGroupsTitle>Upcoming Movies</MovieGroupsTitle>
          <SeeAllLink to="upcoming">See All</SeeAllLink>
        </GroupTitleContainer>
        <MovieGroupsContainer onClick={showDetails}>
          {upcomingMovieCards}
        </MovieGroupsContainer>
        {showPreDetails && (
          <PreDetails movie={moviePreDetails} prevError={prevError} />
        )}
      </GroupContainer>
    );
  }
};

export default Upcoming;
