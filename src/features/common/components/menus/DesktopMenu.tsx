import { UserDto } from 'features/auth/dtos/user.dto'
import React from 'react'
import { NavLink } from 'react-router-dom'

const DesktopMenu = ({ user }: { user: UserDto | null }) => {
	return (
		<div className='desk-menu'>
			<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
			<NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
			{!user && (
				<NavLink to='/auth' className={({ isActive }) => (isActive ? 'active' : '')}>Sign Up/In</NavLink>
			)}
		</div>
	)
}

export default DesktopMenu	