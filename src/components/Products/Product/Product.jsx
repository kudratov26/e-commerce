import React from 'react'
import styles from './Product.module.css'
import thumbnail from '../../../assets/imgs/thumbnail.jpg'
import cart from '../../../assets/icons/cart.svg'

function Product() {
    return (
        <div className={styles.product}>
            <div className={styles["head-box"]}>
                <div className={styles["img-box"]}>
                    <img src={thumbnail} alt="" />
                </div>
                <h2 className={styles.title}>iPhone 9</h2>
            </div>
            <div className={styles["info-box"]}>
                <h2 className={styles.price}><span className={styles.dollar}>$</span>549</h2>
                <img src={cart} alt="" />
            </div>
        </div>

    )
}

export default Product