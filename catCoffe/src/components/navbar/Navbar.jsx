import React from 'react';
import styles from './Navbar.module.css';
import logo from '../../assets/logo/catcoffelogo.png';

export function Navbar() {
  return (
    <nav className={styles.containernavbar}>
      <div className={styles.logoContainer}>
        <h2 className={styles.logo}>CATCOFFE</h2>
        <img src={logo} alt="Catcoffe logo do site" className={styles.logoImage} />
      </div>
      <ul className={styles.navlinks}>
        <li><a href="#">PRODUTOS</a></li>
        <li><a href="#">PETS</a></li>
        <li><a href="#">SOBRE</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
