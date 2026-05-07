import { useContext } from "react";
import { UserContext } from "../../contexts/UserContext";

const Dashboard = () => {

  const { firstName, lastName, isAuthenticated, fruits } = useContext(UserContext);
  
  return (
    <div>
      <h2>Dashboard</h2>
        {isAuthenticated ? (
          <p>Welcome, {firstName} {lastName}!</p>
        ) : (
          <p>Please log in to access your dashboard.</p>
        )}
      <div>
        <h3>Your Favorite Fruits:</h3>
        <ul>
          {fruits.map((fruit, index) => (
            <li key={index}>{fruit}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Dashboard;