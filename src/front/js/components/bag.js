import React, {useEffect} from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { removeItemAction } from '../redux/bagDucks'
import { increaseItemAction, decreaseItemAction } from '../redux/bagDucks'

export function Bag() {
    
    const dispatch = useDispatch();
    const increaseDispatch = useDispatch();
    const decreaseDispatch = useDispatch();

    const bagState = useSelector( state  => state.bag.cart )

    const deleteItem = (id) => {
        dispatch(removeItemAction(id))
    }

    useEffect(() => {
    }, [bagState])

    const increaseItem = (product_id) => {
        increaseDispatch(increaseItemAction(product_id))
    }

    const decreaseItem = (product_id) => {
        decreaseDispatch(decreaseItemAction(product_id))
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
                            
                            <div className="bag__quantity-box">
                                <div className="subtitle__bag-quantity">
                                    <p className="bag__product-text"><b>Cantidad:</b></p>
                                </div>
                                <i className='bx bx-minus' id="icon__item" onClick={()=> decreaseItem(item.id)}></i>
                                <input type="number" className="bag__quantity-input" placeholder="0" value={item.quantity} readOnly="readonly"></input>
                                <i className='bx bx-plus' id="icon__item" onClick={()=> increaseItem(item.id)}></i>
                            </div>
                        </div>
                        <div className="bag__product-delete">                        
                            <i className='bx bx-x close__icon' id="close__icon" onClick={()=> deleteItem(item.id)}></i>
                        </div>
                    </div>
                ))
        }
        </div>
    )
}
