import styled, { css } from "styled-components";
import { AiOutlineClose } from "react-icons/ai";
import { AiOutlineHome } from "react-icons/ai";
import { BiMoviePlay } from "react-icons/bi";
import { BiLogIn } from "react-icons/bi";
import { GiArchiveRegister } from "react-icons/gi";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

export const Nav = styled.nav`
  height: 100vh;
  background-color: #0e0e0e;
  width: ${({ showSidebar }) => (showSidebar ? "200px" : "0")};
  overflow: hidden;
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
  z-index: 100;
`;

export const Close = styled(AiOutlineClose)`
  font-size: 1.5rem;
  margin: 0 1rem 1rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const NavLinksUl = styled.ul`
  list-style-type: none;
  height: auto;
`;

export const NavLinksItems = styled.li`
  padding: 0.8rem 0.5rem;
`;

export const NavLinks = styled(NavLink)`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
  text-decoration: none;
  color: #fff;
  padding: 0.5rem;
  &:hover {
    color: #060b26;
    background-color: #fff;
  }
`;

export const NavLinkTitles = styled.span`
  text-decoration: none;
  font-family: "Lato", sans-serif;
`;

const NavIcons = css`
  font-size: 1.2rem;
`;
export const HomeIcon = styled(AiOutlineHome)`
  ${NavIcons}
`;

export const MovieIcon = styled(BiMoviePlay)`
  ${NavIcons}
`;
export const LoginIcon = styled(BiLogIn)`
  ${NavIcons}
`;
export const RegisterIcon = styled(GiArchiveRegister)`
  ${NavIcons}
`;

export const NavbarTop = styled.div`
  background-color: ${({ navStyle }) => (navStyle ? "none" : "#0e0e0e")};
  color: #fff;
  padding: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: ${({ navStyle }) => navStyle && "absolute"};
  z-index: 5;
  left: 0;
  width: 100%;
  @media screen and (min-width: 576px) {
    padding: 1.5rem 1rem;
  }
`;

export const NavLeft = styled.div`
  display: flex;
  column-gap: 1rem;
  align-items: center;
`;

export const Bars = styled(FaBars)`
  font-size: 1.5rem;
  cursor: pointer;
  &:hover {
    opacity: 0.7;
  }
`;

export const Logo = styled.h2`
  display: none;
  font-family: "Roboto", sans-serif;
  @media screen and (min-width: 576px) {
    display: ${({ navStyle }) => (navStyle ? "none" : "block")};
  }
  @media screen and (min-width: 768px) {
    font-size: 2rem;
  }
`;
