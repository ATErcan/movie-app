import {
  HomeIcon,
  LoginIcon,
  MovieIcon,
  RegisterIcon,
} from "../../styles/Sidebar.styled";

export const SidebarData = [
  {
    id: 1,
    name: "Home",
    path: "/",
    icon: <HomeIcon />,
  },
  {
    id: 2,
    name: "Movies",
    path: "/movies",
    icon: <MovieIcon />,
  },
  {
    id: 3,
    name: "Login",
    path: "/login",
    icon: <LoginIcon />,
  },
  {
    id: 4,
    name: "Register",
    path: "/register",
    icon: <RegisterIcon />,
  },
];
