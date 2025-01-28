import React from 'react'
import SignInSignUp from '../components/SignInSignUp'

const handleSignIn = () => {

}

const handleSignUp = () => {

}

const Auth = () => {
	return (
		<div className='auth'>
			<SignInSignUp onSignIn={handleSignIn} onSignUp={handleSignUp} />
		</div>
	)
}

export default Auth