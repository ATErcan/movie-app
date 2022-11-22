import { BrowserRouter, Route, Routes } from "react-router-dom";
import Sidebar from "../components/Sidebar/Sidebar";
import Home from "../pages/Home";
import Login from "../pages/Login";
import Movies from "../pages/Movies";
import PopularMovies from "../pages/PopularMovies";
import Register from "../pages/Register";
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
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRouter;
