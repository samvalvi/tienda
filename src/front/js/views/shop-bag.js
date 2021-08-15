import React from 'react'

import { Bag } from '../components/bag'
import {Order} from '../components/order'

export const ShopBag = () => {
    return (
        <main className="l-main">
             <section className="bag-shop section" id="bag-shop">
                <h2 className="section-title">Bolsa de compras</h2>

                <div className="shop__bag-container bd-grid">
                    <Bag />
                    <Order />                    
                </div>
            </section>
        </main>

    )
}
