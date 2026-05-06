const OwnerCard = props => {
  return (
    <>
      <div className="owner-card">
        <h2>Owner Card Component</h2>
        <p>Full Name of Owner: {props.ownerDetials.fullName}</p>
      </div>
    </>
  )
}

export default OwnerCard