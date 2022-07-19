import { Link } from 'react-router-dom';
import logo from '../planet.png';

const Header = () => (
  <header>
    <div className="logo"><img src={logo} alt="logo" /></div>
    <div className="Headline">Space Travelers Hub</div>
    <nav>
      <ul>
        <li>
          <Link to="/">Rockets</Link>
        </li>
        <li>
          <Link to="/missions">Missions</Link>
        </li>
        <li>
          <Link to="/my profile">My Profile</Link>
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
