import MenuCard from "./MenuCard"

const TaskList = () => {

  const userName = {
    firstName: 'Mary',
    lastName: 'Laguda',
    email: 'mary@gmail.com',
    age: 25
  }

  const greetUser = (name) => {
    return `Hello, ${name}! Welcome to the Task List Component.`
  }

  const lunchMenuForToday = ['Rice', 'Beans', 'Chicken', 'Salad', 'Banana', 'Yogurt']

  const dinnerMenuForToday = [
    { 
      id: 1, 
      name: 'Spaghetti', 
      price: 10, 
      img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/b9df53064fded570f0fa069126a991d5.jpg.webp?itok=9wTplMmv' },
    { 
      id: 2, 
      name: 'Pizza', 
      price: 15, 
      img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/b9df53064fded570f0fa069126a991d5.jpg.webp?itok=9wTplMmv' },
    { 
      id: 3, 
      name: 'Burger', 
      price: 8, 
      img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/b9df53064fded570f0fa069126a991d5.jpg.webp?itok=9wTplMmv' },
    { 
      id: 4, 
      name: 'Steak', 
      price: 20, 
      img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/b9df53064fded570f0fa069126a991d5.jpg.webp?itok=9wTplMmv' },
    { 
      id: 5, 
      name: 'Fish', 
      price: 12, 
      img: 'https://www.nestlegoodnes.com/ph/sites/default/files/styles/1_1_768px_width/public/srh_recipes/b9df53064fded570f0fa069126a991d5.jpg.webp?itok=9wTplMmv' },
  ]

  return (
    <>
      <h2>Task List</h2>
      <p>This is where we will display our list of tasks.</p>

      <div>JSX Interpolation</div>
      <h3>User Details</h3>
      <p>First Name: {userName.firstName}</p>
      <p>Last Name: {userName.lastName}</p>
      <p>Email: {userName.email}</p>

      <div>We can only add expressions inside JSX curly braces.</div>
      {10 + 10 + 10}
      <br />
      {10 + '10'}
      <br />
      {greetUser(userName.firstName)}

      <div>if, for, forEach, switch, return and other control structures cannot be used directly inside JSX.</div>
      <div>Except for ternary operators and logical &&. ??</div>
      { userName.age >= 18 ? <p> User is an adult </p> : <p> User is a minor </p>}
      { /* 
        if (userName.age >= 18) {
          return <p> User is an adult </p>
        } else {
          return <p> User is a minor </p>
        }
      */ }
      Using && operator: { userName.age >= 18 && <p> User is an adult </p> }
      {/*
        if (userName.age >= 18) {
          return <p> User is an adult </p>
        }
      */}

      <h2>React List</h2>
      <ul>
        {/* <li>Rice</li>
        <li>Beans</li>
        <li>Chicken</li>
        <li>Salad</li>
        <li>Banana</li>
        <li>Yogurt</li> */}
        {/* map() - transform the array into JSX elements */}
        {/* const lunchMenuForToday = ['Rice', 'Beans', 'Chicken', 'Salad', 'Banana', 'Yogurt'] */}
        {lunchMenuForToday.map(menu => <li>{menu}</li>)}
      </ul>

      <h2>Dinner Menu</h2>
      {/* const dinnerMenuForToday = [
        { id: 1, name: 'Spaghetti', price: 10 },
        { id: 2, name: 'Pizza', price: 15 },
        { id: 3, name: 'Burger', price: 8 },
        { id: 4, name: 'Steak', price: 20 },
        { id: 5, name: 'Fish', price: 12 },
      ] */}
      <ol>
        {dinnerMenuForToday.map(dinner => (
          // <div>
          //   <p>Name: {dinner.name}</p>
          //   <p>Price: ${dinner.price}</p>
          // </div>
          <MenuCard menu={dinner} />
        ))}
      </ol>
    </>
  )}

export default TaskList