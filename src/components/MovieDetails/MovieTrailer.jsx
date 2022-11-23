import axios from "axios";
import { useEffect, useState } from "react";
import {
  DetailPoster,
  ImageAndTrailer,
  NoTrailer,
  Trailer,
  TrailerContainer,
} from "../../styles/Details.styled";

const MovieTrailer = ({ movie }) => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const baseImgLink = "https://image.tmdb.org/t/p/original";

  const [videos, setVideos] = useState("");
  const [officials, setOfficials] = useState("");

  useEffect(() => {
    getTrailer();
  }, []);

  const getTrailer = async () => {
    const { data } = await axios.get(
      `${baseUrl}movie/${movie.id}/videos?api_key=${MOVIE_API}&language=en-US`
    );
    setVideos(data.results);
  };

  useEffect(() => {
    if (videos) {
      setOfficials(
        videos?.filter(
          (movie) =>
            movie.type === "Trailer" &&
            movie.name.toLowerCase().includes("official trailer")
        )
      );
    }
  }, [videos]);

  return (
    <ImageAndTrailer>
      <DetailPoster
        src={`${baseImgLink}${movie.poster_path}`}
        alt={movie.title}
      />

      {officials.length > 0 ? (
        <TrailerContainer>
          <Trailer
            src={`https://www.youtube.com/embed/${officials[0].key}`}
          ></Trailer>
        </TrailerContainer>
      ) : (
        <NoTrailer src="https://cdn-icons-png.flaticon.com/512/813/813856.png?w=826&t=st=1669214457~exp=1669215057~hmac=1c4fe1494e4e15cd86015e060406d597426cef3c56a91c84a7ae7662ffd88946" />
      )}
    </ImageAndTrailer>
  );
};

export default MovieTrailer;