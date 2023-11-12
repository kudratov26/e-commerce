import React from 'react'
import styles from './Product.module.css'
import GadjetsContext from "../../../context/gadjets-context";
import { useContext } from "react";
import { BasketIcon } from '../../Icon/BasketIcon/BasketIcon'

function Product({ gadget }) {
    const ctx = useContext(GadjetsContext);
    const onAddButtonHandler = () => {
        ctx.onAddGadgets(gadget);
        ctx.toastify()
    }
    return (
        <div className={styles.product}>
            <div className={styles["head-box"]}>
                <div className={styles["img-box"]}>
                    <img src={gadget.thumbnail} alt="" />
                </div>
                <h2 className={styles.title}>{gadget.title}</h2>
            </div>
            <div className={styles["info-box"]}>
                <h2 className={styles.price}><span className={styles.dollar}>$</span>{gadget.price}</h2>
                <BasketIcon clickHandler={onAddButtonHandler} />
            </div>
        </div>

    )
}

export default Product