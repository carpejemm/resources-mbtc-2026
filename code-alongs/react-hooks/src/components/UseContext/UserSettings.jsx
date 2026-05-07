import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const UserSettings = () => {

  const { firstName, lastName, isAuthenticated, setFirstName } = useContext(UserContext);

  return (
    <div>
      <h2>User Settings</h2>
      {isAuthenticated ? (
        <>
          <p>Here you can update your settings.</p>
          <p>Full Name: {firstName} {lastName}</p>
          <button onClick={() => setFirstName("Jane")}>Change First Name</button>
        </>
      ) : (
        <p>Please log in to access your settings.</p>
      )}
    </div>
  );
}

export default UserSettings;