import React from 'react'
import heroImg from '../../assets/imgs/hero-img.png'
import styles from './Hero.module.css'

function Hero() {
    return (
        <div className={styles.hero}>
            <div className={styles["img-box"]}></div>
            <img src={heroImg} alt="" />
        </div>
    )
}

export default Hero