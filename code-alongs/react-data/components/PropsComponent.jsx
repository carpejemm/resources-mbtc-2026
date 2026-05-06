import PetCard from "./PetCard"
import OwnerCard from "./OwnerCard"

const PropsComponent = () => {

  const petOwnerDetails = {
    fullName: 'Jem Doe',
    email: 'jem@gmail.com',
    phone: '123-456-7890',
    pets: [
      {
        id: 1,
        name: 'Papriko',
        type: 'cat'
      },
      {
        id: 2,
        name: 'Cappy',
        type: 'dog'
      },
      {
        id: 3,
        name: 'Nemo',
        type: 'fish'
      },
      {
        id: 4,
        name: 'Tweety',
        type: 'bird'
      },
      {
        id: 5,
        name: 'Bugs',
        type: 'rabbit'
      }
    ]
  }

  return (
    <>
      <h2>React Props</h2>
      <p>Props are used to pass data from a parent component to a child component.</p>
      <p>Owner Details:</p>
      <ul>
        <li>Full Name: {petOwnerDetails.fullName}</li>
        <li>Email: {petOwnerDetails.email}</li>
        <li>Phone: {petOwnerDetails.phone}</li>
        <li>Pets:</li>
        {/* <li>{petOwnerDetails.pets.name}</li> */}
        <ul>
          {petOwnerDetails.pets.map(pet => (
            <li key={pet.id}>
              {/* {pet.name} ({pet.type}) */}
              {`${pet.name} (${pet.type})`}
            </li>
          ))}
        </ul>
      </ul>
      
      <OwnerCard ownerDetials={petOwnerDetails}/>
      <PetCard details={petOwnerDetails} petDetails={petOwnerDetails.pets}/>
      
    </>
  )
}

export default PropsComponent