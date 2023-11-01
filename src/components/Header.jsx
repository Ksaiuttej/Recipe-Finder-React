import React,{useState} from 'react';
import { Link } from "react-router-dom";

const Header = () => {

  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  const menuIconClass = isMenuOpen ? 'fa-circle-xmark' : 'fa-bars';
  const navClass = isMenuOpen ? 'active' : '';

  return (
    <div id="header">
      <div id="header-conatiner">
        <div className="logobox">
          <a href="/">
            <img src="https://i.postimg.cc/66PYwyr7/logo-brand.png" alt="logo" className='logo' />
          </a>

          {/* <div className="brandncap">
                <h1>EatsVoyage</h1>
                <p>ULTIMTAE RECIEPE FINDER</p>
            </div> */}
        </div>
        {/* <i class="fa-solid fa-bars nav-toggler" aria-expanded="false"></i> */}
        <i className={`fa-solid ${menuIconClass} nav-toggler`} aria-expanded={isMenuOpen} onClick={toggleMenu}></i>
          
        <nav className={navClass}>
          <ul>
            <li className="nav-item"><Link to="/home" className="nav-item" onClick={toggleMenu}>Home</Link></li>
            {/* <li className="nav-item"><Link to="/about"  className="nav-item">About</Link></li> */}
            {/* <li className="nav-item"><Link to="#tips"  className="nav-item">Tips</Link></li> */}
            <li className="nav-item"><Link to="/search" className="nav-item" onClick={toggleMenu}>Search</Link></li>
            <li className="nav-item"><Link to="/random" className="nav-item" onClick={toggleMenu}>Random</Link></li>
          </ul>
        </nav>
        <div className="headicons">
          {/* <i className="fa-sharp fa-solid fa-phone-volume phoneic"></i> */}
          <Link to="/search" className="nav-item"><i className="fa-brands fa-searchengin  searchic"></i></Link>
        </div>
      </div>
    </div>
  )
}

export default Header
