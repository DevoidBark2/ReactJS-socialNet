import { NavLink } from 'react-router-dom';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className="navbar">
            <NavLink to="/Profile">Profile</NavLink>
            <NavLink to="/Dialogs">Message</NavLink>
            <NavLink to="/Settings">Setting</NavLink>
            <NavLink to="/Friends">Friends</NavLink>
        </div>
    );
}

export default Navbar;