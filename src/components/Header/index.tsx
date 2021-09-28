import React,{FC, ReactElement} from 'react';
import styles from './index.module.css'
const Header:FC = ():ReactElement=>{
    return (
        <header className={styles.header}>
            <img className={styles.logo} src="/logoSmall.png" alt="Comiru" />
        </header>
    )
}

export default Header;