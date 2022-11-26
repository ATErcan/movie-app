import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import avatar from "../../assets/avatar.png";
import {
  CastContainer,
  CastStructure,
  CastCard,
  CastImage,
  CastName,
  CharacterName,
  SectionTitles,
  StatusContainer,
  ErrorMessage,
} from "../../styles/Cast.styled";
import { NoDataEmoji } from "../../styles/NoData.styled";

const Cast = () => {
  const baseUrl = "https://api.themoviedb.org/3/";
  const MOVIE_API = process.env.REACT_APP_TMDB_KEY;
  const baseImgLink = "https://image.tmdb.org/t/p/original";

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [credits, setCredits] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    setError(false);

    axios
      .get(`${baseUrl}movie/${id}/credits?api_key=${MOVIE_API}&language=en-US`)
      .then((res) =>
        setCredits(
          res.data.cast.filter(
            (act) => act.known_for_department.toLowerCase() === "acting"
          )
        )
      )
      .catch((error) => setError(true))
      .finally(setLoading(false));
  }, [id]);

  const fullCast = credits?.map((cast) => {
    return (
      <CastCard key={cast.id}>
        <CastImage
          src={
            cast?.profile_path ? `${baseImgLink}${cast.profile_path}` : avatar
          }
          alt={cast?.name}
        />
        <CastName>{cast?.name}</CastName>
        <CharacterName>{cast?.character}</CharacterName>
      </CastCard>
    );
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
        <ErrorMessage>Cast could not be loaded.</ErrorMessage>
      </StatusContainer>
    );
  } else {
    return (
      <CastContainer>
        <SectionTitles>Cast {`>`}</SectionTitles>
        <CastStructure>{fullCast}</CastStructure>
      </CastContainer>
    );
  }
};

export default Cast;
