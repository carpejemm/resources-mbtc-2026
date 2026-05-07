import { useState, createContext } from "react";
import avatarImg from "../assets/avatar.jpg";

const UserContext = createContext();

const UserProvider = ({ children }) => {
  const [firstName, setFirstName] = useState("John");
  const [lastName, setLastName] = useState("Doe");
  const [isAuthenticated, setIsAuthenticated] = useState(true);
  const [userAvatar, setUserAvatar] = useState(avatarImg);

  const fruits = ["Apple", "Banana", "Cherry"];

  const valueObj = {
    firstName,
    setFirstName,
    lastName,
    setLastName,
    isAuthenticated,
    setIsAuthenticated,
    userAvatar,
    setUserAvatar,
    fruits
  }

  return (
    <UserContext.Provider value={valueObj}>
      {/* This is our children components that will have access to the user context */}
      {children}
    </UserContext.Provider>
  )
}

export { UserContext, UserProvider };
