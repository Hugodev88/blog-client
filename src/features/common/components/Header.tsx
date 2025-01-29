import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
// @ts-ignore
import Logo from '../images/logo.png'
import DesktopMenu from './menus/DesktopMenu'
import { selectCurrentUser } from 'features/auth/slice/authSlice'
import { useAppSelector } from '../../../app/hooks'
import DrawerMenu from './menus/DrawerMenu'

const Header = () => {
    const { user } = useAppSelector(selectCurrentUser)
    const [dark, setDark] = useState(true)

    const handleTheme = () => {

    }

    return (
        <header>
            <div className="logo">
                <NavLink to="/">
                    <img src={Logo} width={50} alt='logo' />
                </NavLink>
            </div>
            <div className="menu">
                <DesktopMenu user={user} />
                <span className='sp-bor'>
                    <input type="checkbox" id='dark' name='dark' checked={dark} onChange={handleTheme} />
                    <label htmlFor="dark">Dark</label>
                </span>
                <DrawerMenu user={user} />
            </div>
        </header>
    )
}

export default Header