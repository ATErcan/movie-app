import axios from "axios";
import { useEffect, useRef, useState } from "react";
import { MainContainer } from "../../styles/Carousel.styled";
import LoadingPage from "../Status/LoadingPage";
import MovieCarousel from "./MovieCarousel";

const Preview = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  // state to store the results
  const [previewMovies, setPreviewMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // useEffect for to getting data only first render
  useEffect(() => {
    discoverMovies();
  }, []);

  // get data for displaying movies on first visit
  const discoverMovies = () => {
    setLoading(true);
    console.log("first");
    try {
      axios
        .get(`${baseUrl}discover/movie?api_key=${MOVIE_API}`)
        .then((res) => setPreviewMovies(res.data.results));
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
      console.log("last");
    }
  };

  console.log(previewMovies);
  return (
    <>
      <MainContainer>
        {previewMovies.length > 0 && (
          <MovieCarousel previewMovies={previewMovies} />
        )}
      </MainContainer>
    </>
  );
};

export default Preview;
