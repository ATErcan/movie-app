import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContextProvider";
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
import ActiveUser from "./ActiveUser";
import { SidebarData } from "./SidebarData";

const Sidebar = () => {
  const { currentUser } = useContext(AuthContext);
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
      <NavbarTop>
        <Bars onClick={toggleSidebar} />
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
