import { useContext, useState } from "react";
import avatar from "../../assets/avatar.png";
import {
  ActiveUserName,
  AvatarContainer,
  LogoutBtn,
  UserAvatar,
  UserInfoContainer,
} from "../../styles/ActiveUser.styled";
import { AuthContext } from "../../context/AuthContextProvider";
import { logOut } from "../../auth/firebase";
import { useNavigate } from "react-router-dom";

const ActiveUser = () => {
  const { currentUser } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut();
    navigate("/login");
  };

  return (
    <UserInfoContainer>
      <ActiveUserName>{currentUser?.displayName}</ActiveUserName>
      <AvatarContainer>
        <UserAvatar
          src={currentUser?.photoUrl || avatar}
          onClick={() => setShowLogout((prevLogout) => !prevLogout)}
        />
        <LogoutBtn showLogout={showLogout} onClick={handleLogout}>
          Logout
        </LogoutBtn>
      </AvatarContainer>
    </UserInfoContainer>
  );
};

export default ActiveUser;
