import { NavLink } from 'react-router-dom';
import Logo from '../images/001-planet.png';

const Header = () => (
  <header className="header">
    <div className="flex">
      <img className="logo-img" src={Logo} alt="logo" />
      <h1 className="logo-text">Space Traveler&apos;s Hub</h1>
    </div>
    <nav>
      <ul>
        <li>
          <NavLink to="/" className="link">Rockets</NavLink>
        </li>
        <li>
          <NavLink to="/missions" className="link">Missions</NavLink>
        </li>
        <li>
          <NavLink to="/dragons" className="link">Dragons</NavLink>
        </li>
        <li>
          <NavLink to="/myProfile" className="link profile">My Profile</NavLink>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
