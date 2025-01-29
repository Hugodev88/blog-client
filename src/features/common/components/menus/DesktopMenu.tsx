import { useSignOutMutation } from 'features/auth/api/authApi'
import { UserDto } from 'features/auth/dtos/user.dto'
import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const DesktopMenu = ({ user }: { user: UserDto | null }) => {
	const [signOut] = useSignOutMutation()

	const handleSignOut = () => {
		signOut()
	}

	return (
		<div className='desk-menu'>
			<NavLink to='/' className={({ isActive }) => (isActive ? 'active' : '')}>Home</NavLink>
			<NavLink to='/about' className={({ isActive }) => (isActive ? 'active' : '')}>About</NavLink>
			{!user && (
				<NavLink to='/auth' className={({ isActive }) => (isActive ? 'active' : '')}>Sign Up/In</NavLink>
			)}
			{user && (
				<div className="dropdown">
					<Link to="#">
						<img src={user.avatar} alt={user.name} className='avatar-small' />
						<span>{user.name}</span>
					</Link>
					<div className="dropdown-content">
						<Link to='#' onClick={handleSignOut}>Signout</Link>
						{user.roles.find((role) => ['admin', 'author', 'reader'].includes(role)) && (
							<>
								<NavLink to="/create-post" className={({ isActive }) => (isActive ? 'active' : '')}>Create Post</NavLink>
								<NavLink to="/create-category" className={({ isActive }) => (isActive ? 'active' : '')}>Create Category</NavLink>
								<NavLink to="/create-tag" className={({ isActive }) => (isActive ? 'active' : '')}>Create Tag</NavLink>
								<NavLink to="/approve" className={({ isActive }) => (isActive ? 'active' : '')}>Approve Posts</NavLink>
								<NavLink to="/users/role" className={({ isActive }) => (isActive ? 'active' : '')}>Update Roles</NavLink>
							</>
						)}
					</div>
				</div>
			)}
		</div>
	)
}

export default DesktopMenu	