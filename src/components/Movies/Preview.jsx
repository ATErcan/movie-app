import axios from "axios";
import { useEffect, useState } from "react";
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

  // 576-200 768-300 992-400 1200-500 1400-600? 1600-700?

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
