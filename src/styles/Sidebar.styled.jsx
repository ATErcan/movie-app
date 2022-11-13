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
  background-color: #060b26;
  width: ${({ showSidebar }) => (showSidebar ? "200px" : "0")};
  overflow: hidden;
  color: #fff;
  padding: 1rem 0;
  position: fixed;
  top: 0;
  left: 0;
  transition: all 0.2s linear;
`;

export const Close = styled(AiOutlineClose)`
  font-size: 1.5rem;
  margin: 0 1rem 1rem;
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
  background-color: #060b26;
  color: #fff;
  padding: 1rem;
`;

export const Bars = styled(FaBars)`
  font-size: 1.5rem;
`;
