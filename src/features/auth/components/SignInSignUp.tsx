import React, { useState } from 'react'

interface AuthPageProps {
	onSignIn: (email: string, password: string) => void
	onSignUp: (name: string, email: string, password: string, avatar: string) => void
}

const SignInSignUp = ({ onSignIn, onSignUp }: AuthPageProps) => {

	const [name, setName] = useState<string>('')
	const [email, setEmail] = useState<string>('')
	const [password, setPassword] = useState<string>('')
	const [avatar, setAvatar] = useState<string>('')
	const [isSignIn, setIsSignIn] = useState<boolean>(true)

	return (
		<div>
			<h1>{isSignIn ? "SignIn" : "SignUp"}</h1>
			<form>
				{!isSignIn && (
					<div>
						<label htmlFor="">Name: </label>
						<input type="text" value={name} onChange={(e) => setName(e.target.value)} />
					</div>
				)}
				<div>
					<label htmlFor="">Email: </label>
					<input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</div>
				<div>
					<label htmlFor="">Password: </label>
					<input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
				</div>
				{!isSignIn && (
					<div>
						<label htmlFor="">Avatar: </label>
						<input type="text" value={avatar} onChange={(e) => setAvatar(e.target.value)} />
					</div>
				)}
				<button type="submit">{isSignIn ? "SignIn" : "SignUp"}</button>
			</form>
			<p>{isSignIn ? "Don't have an account?" : "Already have an account?"}</p>
			<button type="button" onClick={() => setIsSignIn(!isSignIn)}>
				{isSignIn ? "SignUp?" : "SignIn"}
			</button>
		</div>
	)
}

export default SignInSignUp