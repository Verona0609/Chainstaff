import { Link } from 'react-router-dom';
import css from './Header.module.css';

import logo from '../../assets/img/Logo.png';
const Header = () => {
  return (
    <header className={css.box}>
      {/* <Icon className={css.icon} id="icon-Logo" size={30} /> */}

      <Link>
        <img className={css.logo} src={logo} alt="website logo" />
      </Link>

      <h2 className={css.title}>chainstaff</h2>

      <ul className={css.navbox}>
        <li className={css.nav}>
          <Link to="/">
            <span>I'm a Company</span>{' '}
          </Link>
        </li>
        <li className={css.nav}>
          <Link to="/chainstafers">
            <span> Chainstafer</span>
          </Link>
        </li>
        <li className={css.nav}>
          <Link to="/candidates">Candidate</Link>
        </li>
        <li className={css.nav}>
          <Link to="/aboutus" className={css.nav}>
            About us
          </Link>
        </li>
      </ul>

      <button className={css.btn}>Get started</button>
    </header>
  );
};

export default Header;
