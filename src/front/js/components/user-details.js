import React from 'react'

import profileImg from '../../img/Profile-Interface.svg'

const UserDetails = () => {
    return (
        <div className="user__info">

            <div className="user__img">
                <img src={profileImg} alt="user-img"/>
            </div>

            <div className="user__data">
                <p><b>Nombre</b>: John Doe</p>
                <p><b>Email:</b> Usuario@email.com</p>
                <p><b>Dirección:</b> San José</p>
            </div>

        </div>
    )
}

export default UserDetails
