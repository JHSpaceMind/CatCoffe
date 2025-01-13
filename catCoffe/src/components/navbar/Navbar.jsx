import React from 'react';
import logoPrincipal from '../../assets/logo/icons/logoPrincipal.png';
import carrinho from '../../assets/logo/icons/carrinhoc.png';
import sino from '../../assets/logo/icons/sinoc.png';
import profile from '../../assets/logo/icons/profilec.png';
import menu from '../../assets/logo/icons/menuc.png';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <div className={styles.containerPrincipal}>
      <div className={styles.navbarContainer}>
        <img
          src={logoPrincipal}
          alt="LogoPrincipal"
          className={styles.logoImage}
        />
        <div className={styles.iconsWrapper}>
          <img src={carrinho} alt="IconCarrinho" className={styles.carrinhoImage} />
          <img src={sino} alt="IconSino" className={styles.sinoImage} />
          <img src={profile} alt="IconProfile" className={styles.profileImage} />
          <img src={menu} alt="IconMenu" className={styles.menuImage} />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
