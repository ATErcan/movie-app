import Popular from "../components/Movies/Popular";
import Preview from "../components/Movies/Preview";
import TopRated from "../components/Movies/TopRated";
import Upcoming from "../components/Movies/Upcoming";
import LoadingPage from "../components/Status/LoadingPage";

const Movies = () => {
  return (
    <>
      <Preview />
      <Popular />
      <Upcoming />
      <TopRated />
      <LoadingPage />
    </>
  );
};

export default Movies;
