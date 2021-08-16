import React from 'react'

export function Order() {
    return (
        <div className="order__container">
            <div className="order__details">    
                <div className="order__title">
                    <h3>Detalles de su compra</h3>
                </div>
                <div className="order__products">
                    <p className="quantity__products">Cantidad de productos:</p>
                    <p className="total__products">Total:</p>
                </div>
            </div>
        </div>
    )
}