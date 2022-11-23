import styled from "styled-components";

export const UserInfoContainer = styled.div`
  display: flex;
  align-items: center;
  column-gap: 0.5rem;
`;

export const ActiveUserName = styled.h5`
  font-size: 1.1rem;
  font-family: "Lato", sans-serif;
  @media screen and (min-width: 768px) {
    font-size: 1.4rem;
  }
`;

export const AvatarContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`;

export const UserAvatar = styled.img`
  width: 2rem;
  height: 2rem;
  border-radius: 50%;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;

export const LogoutBtn = styled.span`
  background-color: #fff;
  color: #060b26;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  position: absolute;
  top: 100%;
  right: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${({ showLogout }) => (showLogout ? "1.7rem" : "0")};
  width: ${({ showLogout }) => (showLogout ? "5rem" : "0")};
  overflow: hidden;
  transition: all linear 0.3s;
  border-radius: 5px;
  user-select: none;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`;
