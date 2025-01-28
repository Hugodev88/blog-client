import React from 'react'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import Logo from '../images/logo.png'

const Header = () => {
    return (
        <header>
            <div className="logo">
                <NavLink to="/">
                    <img src={Logo} width={50} alt='logo' />
                </NavLink>
            </div>
            <div className="menu">

            </div>
        </header>
    )
}

export default Header