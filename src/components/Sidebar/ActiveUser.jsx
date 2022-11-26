import { useContext, useEffect, useState } from "react";
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
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ActiveUser = () => {
  const { currentUser } = useContext(AuthContext);
  const [showLogout, setShowLogout] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    logOut(navigate);
  };

  const auth = getAuth();
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setIsLoggedIn(!!user);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <UserInfoContainer>
      {isLoggedIn && (
        <>
          <ActiveUserName>{currentUser.displayName}</ActiveUserName>
          <AvatarContainer>
            <UserAvatar
              src={currentUser?.photoUrl || avatar}
              onClick={() => setShowLogout((prevLogout) => !prevLogout)}
            />
            <LogoutBtn showLogout={showLogout} onClick={handleLogout}>
              Logout
            </LogoutBtn>
          </AvatarContainer>
        </>
      )}
    </UserInfoContainer>
  );
};

export default ActiveUser;
