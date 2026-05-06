import './MenuCard.styles.css'

const MenuCard = ({ menu }) => {
  return (
    <>
      <div className='menu-card'>
        <p>Name: {menu.name}</p>
        <p>Price: ${menu.price}</p>
        <img src={menu.img} alt={menu.name} width={'100'} />
      </div>
    </>
  )
}

export default MenuCard