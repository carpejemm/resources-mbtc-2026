import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const UserProfile = () => {

  const { firstName, lastName, isAuthenticated, userAvatar } = useContext(UserContext);

  return (
    <div>
      <h2>User Profile</h2>
      {isAuthenticated ? (
        <div>
          <p>Full Name: {firstName} {lastName}</p>
          <img src={userAvatar} alt="User Avatar" width="100" />
        </div>
      ) : (
        <p>Please log in to view your profile.</p>
      )}
    </div>
  );
}

export default UserProfile;