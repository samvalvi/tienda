import React from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeItemAction } from '../redux/bagDucks'

export function Bag() {
    
    const dispatch = useDispatch()
    const bagState = useSelector( state  => state.bag.cart )

    const deleteItem = (id) => {
        dispatch(removeItemAction(id))
    }

    return (
        <div className="bag__container">
        { (bagState.length === 0) ?
                
                <h3 className="empty__bag-text">Su bolsa de compras está vacía.</h3>
            :
                bagState.map( (item, index) => (
                    <div className="bag__product" key={index}>
                        <div className="bag__product-img">
                            <img src={item.img} alt="" className="bag__item-img"/>
                        </div>
                        <div className="bag__product-details">
                            <p className="bag__product-text"><b>Nombre:</b> {item.nombre}</p>
                            <p className="bag__product-text"><b>Esencia:</b> {item.esencia}</p>
                            <p className="bag__product-text"><b>Descripción:</b> {item.descripcion}</p>
                            <p className="bag__product-text"><b>Precio:</b> ₡{item.precio}</p>
                        </div>
                        <div className="bag__product-delete">                        
                            <i className='bx bx-x close__icon' onClick={()=> deleteItem(item.id)}></i>
                        </div>
                    </div>
                ))
        }
        </div>
    )
}
