import { useState } from "react"

const EventsComponent = () => {

  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleClick = () => {
    alert(`First Name: ${firstName}\nLast Name: ${lastName}\nEmail: ${email}`)
  }

  return (
    <div className="events-component">
      <h2>Events Component</h2>
      <p>This is the Events Component.</p>
      <p>Events in React are actions that can be triggered by user interactions or other occurrences, such as clicks, form submissions, or keyboard input.</p>
      <p>React provides a way to handle events using event handlers, which are functions that are called when an event occurs.</p>
      <p>Event handlers in React are typically defined as functions within a component and are passed as props to the relevant elements.</p>

      <div>
        <h3>First Name: {firstName}</h3>
        <button onClick={handleClick}>Click Me</button>
      </div>

      {/*
      First name - A text input element
      Last name - A text input element
      Email - A text input element
      Password - A password input element
      Submit - A submit button

      Challenge yourself
      Use an array of objects to simplify the creation of input fields */}

      <div>onChange() event</div>
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>

      <form>
        <label htmlFor="firstName">First Name:</label>
        <input 
          type="text" 
          id="firstName" 
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          // onChange={(e) => console.log(e.target.value)}
        />
        <br />
        <label htmlFor="lastName">Last Name:</label>
        <input 
          type="text" 
          id="lastName"
          value={lastName} 
          onChange={(e)=> setLastName(e.target.value)}
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input 
          type="text" 
          id="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
        />
        <br />
        <label htmlFor="password">Password:</label>
        <input 
          type="password" 
          id="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)}
        />
        <br />
        <button type="button" onClick={handleClick}>Submit</button>
      </form>

    </div>
  )
}

export default EventsComponent