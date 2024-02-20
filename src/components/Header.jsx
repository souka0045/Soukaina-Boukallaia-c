import { NavLink } from "react-router-dom"
function Header(){
    return(
       
        <nav>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="*">contact</NavLink>
        </nav>
       
    )
}

export default Header