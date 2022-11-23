import { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContextProvider";
import {
  Bars,
  Close,
  Logo,
  Nav,
  NavbarTop,
  NavLeft,
  NavLinks,
  NavLinksItems,
  NavLinksUl,
  NavLinkTitles,
} from "../../styles/Sidebar.styled";
import ActiveUser from "./ActiveUser";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const location = useLocation();
  const [navStyle, setNavStyle] = useState(false);
  const { currentUser } = useContext(AuthContext);

  useEffect(() => {
    if (location.pathname === "/movies") {
      setNavStyle(true);
    } else {
      setNavStyle(false);
    }
  }, [location.pathname]);

  // state to change width to toggle Sidebar
  const [showSidebar, setShowSidebar] = useState(false);

  // function that changes state to control sidebar
  const toggleSidebar = () => {
    setShowSidebar((prevShowSidebar) => !prevShowSidebar);
  };

  // Map over the links data
  const NavbarLinks = SidebarData.map((link) => {
    return (
      <NavLinksItems key={link.id}>
        <NavLinks to={link.path} onClick={toggleSidebar}>
          {link.icon} <NavLinkTitles>{link.name}</NavLinkTitles>
        </NavLinks>
      </NavLinksItems>
    );
  });

  return (
    <>
      <NavbarTop navStyle={navStyle}>
        <NavLeft>
          <Bars onClick={toggleSidebar} />
          <Logo navStyle={navStyle}>{`</aTe>MDB`}</Logo>
        </NavLeft>
        {currentUser && <ActiveUser />}
      </NavbarTop>
      <Nav showSidebar={showSidebar}>
        <Close onClick={toggleSidebar} />
        <NavLinksUl>{NavbarLinks}</NavLinksUl>
      </Nav>
    </>
  );
};

export default Sidebar;
