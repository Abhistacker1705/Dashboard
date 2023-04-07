import { React, useState } from "react"
import { Link, useNavigate } from "react-router-dom"
const SignInForm = () => {
	const [formData, setFormData] = useState({
		email: "",
		password: ""
	})

	const handleChange = (e) => {
		setFormData({
			...formData,
			[e.target.name]: e.target.value
		})
	}
	return (
		<div className='flex flex-col basis-96 gap-8 max-md:w-10/12'>
			<div className='flex flex-col max-md:items-center'>
				<h2 className='font-bold text-4xl'>Sign In</h2>
				<h3 className='font-bold text-base'>Sign into your account</h3>
			</div>
			<div className='flex gap-4 max-md:justify-center'>
				<button className='flex justify-center items-center gap-4 w-[180px] h-[30px] delay-100 rounded-[10px] bg-white hover:-translate-y-[4px]'>
					<img className='w-4 h-4' src='https://img.icons8.com/color/48/null/google-logo.png' />
					<p className='text-xs  text-[#858585]'>Sign in with google</p>
				</button>
				<button className='flex justify-center items-center gap-4 w-[180px] h-[30px] delay-100 rounded-[10px] bg-white hover:-translate-y-[4px]'>
					<img className='w-4 h-4' src='https://img.icons8.com/ios/50/null/mac-os--v1.png' />
					<p className='text-xs text-[#858585]'>Sign in with apple</p>
				</button>
			</div>
			<div className='flex flex-col basis-96 p-[30px] gap-5 rounded-[20px] bg-white text-base'>
				<label>
					Email address <br />
					<input
						className='bg-neutral-100 p-[10px] w-full rounded-[10px] mt-2'
						type='email'
						name='email'
						id='Email'
						value={formData.email}
						onChange={handleChange}
					/>
				</label>
				<label>
					Password <br />
					<input
						className='bg-neutral-100 p-[10px] w-full rounded-[10px] mt-2'
						type='password'
						name='password'
						id='Password'
						value={formData.password}
						onChange={handleChange}
					/>
				</label>
				<p className='text-[#346BD4]'>Forgot Password ?</p>
				<Link to='/dashboard'>
					<button className='w-full h-10 rounded-[10px] text-white bg-black hover:text-black hover:bg-white hover:border-2 hover:border-black  '>
						Sign In
					</button>
				</Link>
			</div>

			<p className='text-center text-[#858585]'>
				Don't have an account? <span className='text-[#346BD4]'>Register here</span>
			</p>
		</div>
	)
}

export default SignInForm
