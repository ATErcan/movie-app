import {
  CardContainer,
  CardMovieDate,
  CardMovieOverview,
  CardMoviePopularity,
  CardMoviePoster,
  CardMovieScore,
  CardMovieStatistics,
  CardMovieTitle,
} from "../../styles/SingleMovieCard.styled";

const SingleMovieCard = () => {
  return (
    <CardContainer>
      <CardMoviePoster />
      <CardMovieStatistics>
        <CardMovieScore>7</CardMovieScore>
        <CardMoviePopularity>
          <b>Popularity:</b> 300.000
        </CardMoviePopularity>
        <CardMovieDate>20.10.2022</CardMovieDate>
      </CardMovieStatistics>
      <CardMovieTitle>Black Panther</CardMovieTitle>
      <CardMovieOverview>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
        porro veritatis sed iste totam provident ratione repellendus, fuga
        magni? Maiores.
      </CardMovieOverview>
    </CardContainer>
  );
};

export default SingleMovieCard;
