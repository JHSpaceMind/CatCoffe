import React from 'react';
import styles from './Principal.module.css'
import teste from '../../assets/banner/teste3.jpg';
export function Principal(){
    return(
        <body className={styles.homecontainer}>
         <img 
         className={styles.banner}
         src={teste} 
         alt="Banner do site" />
     </body>
    );
}