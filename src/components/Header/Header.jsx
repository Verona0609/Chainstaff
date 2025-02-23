import { Link } from 'react-router-dom';
import css from './Header.module.css';

import logo from '../../assets/img/Logo.png';
import { Icon } from '../Icon/Icon';

const Header = () => {
  return (
    <header className={css.box}>
      <Link>
        <img className={css.logo} src={logo} alt="website logo" />
      </Link>

      <h2 className={css.title}>chainstaff</h2>
      <Icon className={css.menu} id="icon-Menu" size={28} />

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
      </ul>
      <nav className={css.navpage}>
        <Link to="/aboutus" className={css.nav}>
          About us
        </Link>
      </nav>
      <button className={css.btn}>Get started</button>
    </header>
  );
};

export default Header;
