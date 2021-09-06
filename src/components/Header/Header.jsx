import lg from './../img/logo.png'
import './Header.css'
const Header = () => {
  return (
    <header className="header">
      <a href="#" className="logo">
        <img src={lg}></img>
      </a>
      <nav className="nav-menu">
        <a href="#" className="menu-item">Profile</a>
        <a href="#" className="menu-item">Message</a>
        <a href="#" className="menu-item">Settings</a>
      </nav>
      <div className="nav-btn">
        <button>Sign out</button>
      </div>
    </header>
  );
}

export default Header;