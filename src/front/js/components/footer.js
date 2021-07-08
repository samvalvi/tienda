import React from 'react'

import {Link} from 'react-router-dom'

export const Footer = () => {
    return (
        <footer className="footer section">
        <div className="footer__container bd-grid">
        
            <div className="footer__box">
                <h3 className="footer__title">APP_DEVELOP_VELAS</h3>
                <h3 className="footer__sub-title">EXPLORAR</h3>
                <ul>
                    <li><Link to="/" className="footer__link">INICIO</Link></li>
                    <li><Link to="/shop" className="footer__link">TIENDA</Link></li>
                </ul>
            </div>

            <div className="footer__box">
                <h3 className="footer__sub-title">CONTACTO</h3>
                <Link to="#" id="footer__social"><i className='bx-tada-hover bx bxl-facebook-circle'></i></Link>
                <Link to="#" id="footer__social"><i className='bx-tada-hover bx bxl-whatsapp'></i></Link>
            </div>
        </div>
        <p className="footer__copy"> &#169; 2021 ValviLabs. All rights reserved.</p>
    </footer>
    )
}
