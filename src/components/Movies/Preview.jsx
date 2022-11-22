import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MainContainer } from "../../styles/Carousel.styled";
import MovieCarousel from "./MovieCarousel";

const Preview = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  // state to store the results
  const [previewMovies, setPreviewMovies] = useState([]);

  // useEffect for to getting data only first render
  useEffect(() => {
    discoverMovies();
  }, []);

  // get data for displaying movies on first visit
  const discoverMovies = () => {
    axios
      .get(`${baseUrl}discover/movie?api_key=${MOVIE_API}`)
      .then((res) => setPreviewMovies(res.data.results));
  };

  console.log(previewMovies);
  return (
    <MainContainer>
      {previewMovies.length > 0 && (
        <MovieCarousel previewMovies={previewMovies} />
      )}
    </MainContainer>
  );
};

export default Preview;
