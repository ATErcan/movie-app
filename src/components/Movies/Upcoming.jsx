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

const Upcoming = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [moviePreDetails, setMoviePreDetails] = useState("");
  const [showPreDetails, setShowPreDetails] = useState(false);

  useEffect(() => {
    axios
      .get(`${baseUrl}movie/upcoming?api_key=${MOVIE_API}`)
      .then((res) => setUpcomingMovies(res.data.results));
  }, []);

  const getPreDetails = async (id) => {
    try {
      const { data } = await axios.get(
        `${baseUrl}movie/${id}?api_key=${MOVIE_API}`
      );
      setMoviePreDetails(data);
    } catch (error) {
      console.log(error);
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

  return (
    <GroupContainer>
      <GroupTitleContainer>
        <MovieGroupsTitle>Upcoming Movies</MovieGroupsTitle>
        <SeeAllLink to="upcoming">See All</SeeAllLink>
      </GroupTitleContainer>
      <MovieGroupsContainer onClick={showDetails}>
        {upcomingMovieCards}
      </MovieGroupsContainer>
      {showPreDetails && <PreDetails movie={moviePreDetails} />}
    </GroupContainer>
  );
};

export default Upcoming;
