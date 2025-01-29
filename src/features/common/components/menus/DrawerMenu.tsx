import { UserDto } from 'features/auth/dtos/user.dto'
import Drawer from 'rc-drawer/lib/Drawer'
import React, { useState } from 'react'
import motionProps from './motion/motion'
import { FiMenu } from 'react-icons/fi';
import { Link, NavLink } from 'react-router-dom';
import { useSignOutMutation } from 'features/auth/api/authApi';

const DrawerMenu = ({ user }: { user: UserDto | null }) => {
	const [signOut] = useSignOutMutation()
	const [open, setOpen] = useState(false)

	const handleSignOut = () => {
		signOut()
	}

	const onTouchEnd = () => {
		setOpen(false)
	}

	const onSwitch = () => {
		setOpen(c => !c)
	}

	return (
		<>
			<Drawer
				open={open}
				onClose={onTouchEnd}
				afterOpenChange={(c: boolean) => { console.log('transitionEnd: ', c); }}
				className="drawer"
				placement="right"
				width="40%"
				{...motionProps}
			>
				<div className='mobile-menu'>
					<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
					<NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
					{user ? (
						<>
							<div className="menu-user">
								<img src={user.avatar} alt={user.name} />
								<span>{user.name}</span>
							</div>
							<Link to="#" onClick={handleSignOut}>Log out</Link>
						</>
					) : (
						<NavLink to='/auth' className={({ isActive }) => (isActive ? 'active' : '')}>Sign Up/In</NavLink>
					)}
					{user?.roles.find((role) => ['admin', 'author', 'reader'].includes(role)) && (
						<>
							<NavLink to="/create-post" className={({ isActive }) => (isActive ? 'active' : '')}>Create Post</NavLink>
							<NavLink to="/create-category" className={({ isActive }) => (isActive ? 'active' : '')}>Create Category</NavLink>
							<NavLink to="/create-tag" className={({ isActive }) => (isActive ? 'active' : '')}>Create Tag</NavLink>
							<NavLink to="/approve" className={({ isActive }) => (isActive ? 'active' : '')}>Approve Posts</NavLink>
							<NavLink to="/users/role" className={({ isActive }) => (isActive ? 'active' : '')}>Update Roles</NavLink>
						</>
					)}
				</div>
			</Drawer>
			<FiMenu onClick={onSwitch} className='menu-icon' />
		</>
	)
}

export default DrawerMenu
