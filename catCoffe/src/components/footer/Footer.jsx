import React from 'react'
import styles from './Footer.module.css';

export function Footer(){
    return(
    <div className={styles.containerFooter}>
     <p>&copy; {new Date().getFullYear()} CatCoffe Tem Todos os direitos reservado</p>
    </div>
    );
}
export default Footer;