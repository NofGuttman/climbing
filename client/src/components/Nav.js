import React from 'react';
import styles from '../styles/Nav.module.css';

const Nav = () => {
  return(
    <header className={styles.header}>
      <ul className={styles["nav-bar"]}>
        <li>Gyms</li>
        <li>Events</li>
        <li>Sites</li>
      </ul>
    </header>
  );
}

export default Nav;