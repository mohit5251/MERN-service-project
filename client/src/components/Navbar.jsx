import { NavLink } from "react-router-dom"
import './Navbar.css'
import { useAuth } from "../store/auth";

export const Navbar = () => {
    const {isloggedin} = useAuth();

    return(
    <header>

        <div className="container">
            <div className="logo">
                <NavLink to="/">MOHIT</NavLink>
            </div>
            <nav>
                <ul>
                    <li> <NavLink to="/"> Home </NavLink> </li>
                    <li> <NavLink to="/about"> About </NavLink> </li>
                    <li> <NavLink to="/services"> Services </NavLink> </li>
                    <li> <NavLink to="/contact"> Contact </NavLink> </li>
                    {isloggedin ? <li> <NavLink to="/logout"> Logout </NavLink> </li>
                    : <>
                    <li> <NavLink to="/register"> Register </NavLink> </li>
                    <li> <NavLink to="/login"> Login </NavLink> </li>
                    </> }
                    
                </ul>
            </nav>
        </div>

    </header>
);
};