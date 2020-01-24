import React from 'react';
import {Link} from 'react-router-dom';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return(
    <header className={styles.header}>
      <ul className={styles["nav-bar"]}>
        <li>
          <Link to="/gyms">מכוני טיפוס</Link>
        </li>
        <li>
          <Link to="/events">אירועים</Link>
        </li>
        <li>
          <Link to="/edit">עריכה</Link>
        </li>
      </ul>
    </header>
  );
}

export default Nav;