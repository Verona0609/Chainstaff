import { Link } from 'react-router-dom';
import css from './Header.module.css';

import logo from '../../assets/img/Logo.png';
import { Icon } from '../Icon/Icon';
import { useState } from 'react';

const Header = () => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(prev => !prev);
  };
  return (
    <div className={css.wrapper}>
      <header className={css.box}>
        <div className={css.logobox}>
          <Link>
            <img className={css.logo} src={logo} alt="website logo" />
          </Link>

          <h2 className={css.title}>chainstaff</h2>
        </div>

        <Icon className={css.menu} id="icon-Menu" size={28} />

        <ul className={css.navbox}>
          <li className={css.nav}>
            <Link to="/">
              <span>I'm a Company</span>{' '}
            </Link>

            <Icon className={css.down} id="icon-left" size={18} />
          </li>
          <li className={css.nav}>
            <Link className={css.hidden} to="/chainstafers">
              Chainstafer
            </Link>
          </li>
          <li className={css.nav}>
            <Link className={css.hidden} to="/candidates">
              Candidate
            </Link>
          </li>
        </ul>
        <nav className={css.navpage}>
          <Link to="/aboutus" className={css.nav}>
            About us
          </Link>
        </nav>
        <button className={css.btn}>Get started</button>
      </header>
    </div>
  );
};

export default Header;
