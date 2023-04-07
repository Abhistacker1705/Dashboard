import React from "react"
import SignInForm from "../components/SignInForm/SignInForm"

const SignIn = () => {
	return (
		<div className='flex max-md:flex-col font-[Montserrat]'>
			<div className='flex basis-[36.75rem] h-screen justify-center items-center bg-black max-md:hidden'>
				<h1 className='text-white font-bold text-7xl'>Board.</h1>
			</div>
			<div className='flex p-8 basis-full h-16 bg-black md:hidden'>
				<h1 className='text-white font-bold text-5xl'>B.</h1>
			</div>
			<div className='flex flex-grow h-screen justify-center items-center bg-neutral-100'>
				<SignInForm />
			</div>
		</div>
	)
}

export default SignIn
