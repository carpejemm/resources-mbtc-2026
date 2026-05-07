import { UserProvider } from "../../contexts/UserContext"
import Dashboard from "./Dashboard"
import UserProfile from "./UserProfile"
import UserSettings from "./UserSettings"

const UseContextComponent = () => {
  return (
    <>
    <div className="usecontext-component">
      <h2>UseContextComponent</h2>
      <UserProvider>
        <Dashboard />
        <UserProfile />
        <UserSettings />
      </UserProvider>
    </div>
    </>
  )
}

export default UseContextComponent