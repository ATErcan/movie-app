import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import {
  CastContainer,
  CastStructure,
  SectionTitles,
  StatusContainer,
  ErrorMessage,
} from "../../styles/Cast.styled";
import { NoDataEmoji } from "../../styles/NoData.styled";
import SimilarCardComp from "./SimilarCardComp";

const Similar = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [similarMovies, setSimilarMovies] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);
    axios
      .get(`${baseUrl}movie/${id}/similar?api_key=${MOVIE_API}&language=en-US`)
      .then((res) => setSimilarMovies(res.data.results))
      .catch((error) => setError(true))
      .finally(setLoading(false));
  }, [id]);

  const similarToThis = similarMovies?.map((movie) => {
    return <SimilarCardComp key={movie.id} movie={movie} />;
  });

  if (loading) {
    return (
      <StatusContainer>
        <MoonLoader color="#36d7b7" />
      </StatusContainer>
    );
  } else if (error) {
    return (
      <StatusContainer>
        <NoDataEmoji />
        <ErrorMessage>Similar movies could not be loaded.</ErrorMessage>
      </StatusContainer>
    );
  } else {
    return (
      <CastContainer>
        <SectionTitles>Similar Movies {`>`}</SectionTitles>
        <CastStructure>
          {similarMovies.length > 0 && similarToThis}
        </CastStructure>
      </CastContainer>
    );
  }
};

export default Similar;
