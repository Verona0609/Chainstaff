import { Link } from 'react-router-dom';
import css from './Header.module.css';

import logo from '../../../assets/img/Logo.png';
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
            <span>Company</span>{' '}
          </Link>
        </li>
        <li className={css.nav}>
          <Link to="/chainstafers">
            <span>Chainstafer</span>
          </Link>
        </li>
        <li className={css.nav}>
          <Link to="/candidates">Candidate</Link>
        </li>
        {/* <li className={css.nav}>
          <Link to="/jobs" className={css.nav}>
            Jobs
          </Link>
        </li> */}
      </ul>
    </header>
  );
};

export default Header;
