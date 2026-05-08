const Button = ({ onClick, label }) => {
  return (
    <button 
      onClick={onClick} style={{ padding: '10px', margin: '5px' }}>
        {/* {label} */}
        {label}
    </button>
  )
}

export default Button