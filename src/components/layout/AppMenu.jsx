import { NavLink } from "react-router-dom";
const listStyle = {
  display: 'flex',
  gap: '20px',
}

export default function AppMenu() {

  return (
    <nav>
      <ul style={listStyle} >
        <NavLink
        style={({isActive}) => isActive ? {color: '#333'} : null} 
         to="/"> Main</NavLink>
        <NavLink 
         style={({isActive}) => isActive ? {color: '#333'} : null} 
         to="/about" >About</NavLink>
      </ul>
    </nav>
  )
}