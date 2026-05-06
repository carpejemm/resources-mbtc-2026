import { BsApple } from "react-icons/bs";

const ConditionalsComponent = () => {

  const isLoggedIn = undefined
  const isAnon = true
  const userRole = "superadmin"
  return (
    <div className="conditionals-component">
      <h1>Conditionals Component</h1>
      <p>This component demonstrates the use of conditionals in React.</p>
      <p>{isLoggedIn ? "Welcome back!" : "Please log in."}</p>
      <p>{isLoggedIn && "This will not be displayed"}</p>
      <p>{isAnon ? "You are browsing anonymously" : "You are not anonymous"}</p>
      <div>
        {userRole === "admin" && <p>Welcome, admin!</p>}
        {userRole === "superadmin" && <p>Welcome, superadmin!</p>}
      </div>
      <BsApple />
    </div>
  )
}
export default ConditionalsComponent

