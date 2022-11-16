import axios from "axios";
import { useEffect, useState } from "react";

const Movies = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = "c950f85d9aead05971279ad459afcc9a";
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

  return <div>Movies</div>;
};

export default Movies;
