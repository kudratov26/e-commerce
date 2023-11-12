import React from 'react'
import styles from './Navbar.module.css'
import logo from '../../assets/icons/logo.svg'
import bag from '../../assets/icons/bag.svg'

function Navbar() {
    return (
        <div className={styles.navbar}>
            <img className={styles.svg} src={logo} alt="logo" />
            <img className={styles.svg} src={bag} alt="bag" />
        </div>
    )
}

export default Navbar