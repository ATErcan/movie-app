import { useState } from "react";
import {
  Bars,
  Close,
  Nav,
  NavbarTop,
  NavLinks,
  NavLinksItems,
  NavLinksUl,
  NavLinkTitles,
} from "../../styles/Sidebar.styled";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  // state to change width to toggle Sidebar
  const [showSidebar, setShowSidebar] = useState(false);

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
      <NavbarTop>
        <Bars onClick={toggleSidebar} />
      </NavbarTop>
      <Nav showSidebar={showSidebar}>
        <Close onClick={toggleSidebar} />
        <NavLinksUl>{NavbarLinks}</NavLinksUl>
      </Nav>
    </>
  );
};

export default Sidebar;
