const Profile = () => {
  const user = "John Doe" // This is a placeholder for user data, you can replace it with actual data fetching logic
  const userProfileDetails = {
    username: "superJohnDoe",
    email: "superjohndoe@example.com",
    bio: "Just a regular John Doe who loves coding and coffee.",
    userAge: 25
  }

  // Create a function to return if the user is an adult or not based on their age
  const isAdult = (age) => {
    return age >= 18 ? "This user is an adult." : "This user is a minor.";
  }

  return (
    <>
      <div className="profile-container">
        <h2>Profile Page</h2>
        <p>This is the profile page of the user.</p>
        <p>Username: {userProfileDetails.username}</p>
        <p>Email: {userProfileDetails.email}</p>
        <p>Bio: {userProfileDetails.bio}</p>
        <img src="https://img.magnific.com/premium-vector/vector-flat-illustration-grayscale-avatar-user-profile-person-icon-gender-neutral-silhouette-profile-picture-suitable-social-media-profiles-icons-screensavers-as-templatex9xa_719432-2210.jpg?semt=ais_hybrid&w=740&q=80" alt={`Profile picture of ${userProfileDetails.username}`} width="100" />
      

        {/* We can also add JS expressions in JSX to display dynamic content. For example, we can display the user's name in a greeting message: */}
        <p>Hello, I'm {user}!</p>
        <p>I am {userProfileDetails.userAge} years old.</p>
        <p>{isAdult(userProfileDetails.userAge)}</p>

        {/* Not Valid JS Expressions */}
        {/* Exception is using ternary operator without an else statement */}
        { userProfileDetails.userAge >= 65 ? <p>This user is a senior citizen.</p> : null }
      </div>
    </>
  )
}

export default Profile