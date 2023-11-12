import React from 'react'
import Product from './Product/Product'
import styles from './Products.module.css'

function Products() {
    return (
        <div className={styles.products}>
            <h1>PRODUCTS</h1>
            <div className={styles.cards}>
                <Product />
            </div>
        </div>
    )
}

export default Products