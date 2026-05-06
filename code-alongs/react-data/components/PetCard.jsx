const PetCard = ({ details, petDetails }) => {

  console.log(details);
  console.log(petDetails);

  return (
    <>
      <div className="pet-card">
        <h2>Pet Card Component</h2>
        {
          details.pets.map(pet => (
            <div key={pet.id}>
              <h3>Pet Name: {pet.name}</h3>
              <p>Type: {pet.type}</p>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default PetCard