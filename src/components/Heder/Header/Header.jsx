import { Link } from 'react-router-dom';
import css from './Header.module.css';

import logo from '../../../../assets/img/Logo.png';
const Header = () => {
  return (
    <header className={css.box}>
      {/* <Icon className={css.icon} id="icon-Logo" size={30} /> */}

      <Link>
        <img className={css.logo} src={logo} alt="website logo" />
      </Link>

      <h2 className={css.title}>chainstaff</h2>

      <div className={css.navbox}>
        <nav className={css.nav}>
          <Link to="/">Home</Link>
        </nav>
        <nav className={css.nav}>
          <Link to="/jobs" className={css.nav}>
            Join
          </Link>
        </nav>
        <nav className={css.nav}>
          <Link to="/jobs" className={css.nav}>
            Features
          </Link>
        </nav>
        <nav className={css.nav}>
          <Link to="/jobs" className={css.nav}>
            Jobs
          </Link>
        </nav>
        <nav className={css.nav}>
          <Link to="/jobs" className={css.nav}>
            Team
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
