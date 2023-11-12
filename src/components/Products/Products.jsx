import React from 'react'
import Product from './Product/Product'
import styles from './Products.module.css'
import gadgets from "../../data/data"

function Products() {
    return (
        <div className={styles.products}>
            <h1>PRODUCTS</h1>
            <div className={styles.cards}>
                {gadgets.map((gadget) => (
                    <Product key={gadget.id} gadget={gadget} />
                ))}
            </div>
        </div>
    )
}

export default Products