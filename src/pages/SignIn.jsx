import React from "react"
import SignInForm from "../components/SignInForm/SignInForm"

const SignIn = () => {
	return (
		<div className='flex'>
			<div className='flex basis-[36.75rem] h-screen justify-center items-center bg-black'>
				<h1 className='text-white font-bold text-7xl'>Board.</h1>
			</div>
			<div className='flex flex-grow h-screen justify-center items-center bg-neutral-100'>
				<SignInForm />
			</div>
		</div>
	)
}

export default SignIn
