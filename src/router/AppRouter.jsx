import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movies from "../pages/Movies";
import PopularMovies from "../pages/PopularMovies";
import Register from "../pages/Register";
import TopRatedMovies from "../pages/TopRatedMovies";
import UpcomingMovies from "../pages/UpcomingMovies";
import { GlobalStyles } from "../styles/Global.styled";

const AppRouter = () => {
  return (
    <BrowserRouter>
      <GlobalStyles />
      <Sidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/popular" element={<PopularMovies />} />
        <Route path="/movies/upcoming" element={<UpcomingMovies />} />
        <Route path="/movies/top_rated" element={<TopRatedMovies />} />
        <Route path="/movies/details/:id" element={<Details />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
