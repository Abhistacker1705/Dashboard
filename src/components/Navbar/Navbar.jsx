import React from "react"

const Navbar = () => {
	return (
		<>
			<nav className='flex justify-between items-center'>
				<h2 className='font-bold text-2xl'>Dashboard</h2>
				<div className='flex gap-5 h-[1.875rem]'>
					<input
						className='bg-white p-[10px] w-[11.25rem] rounded-[10px]'
						type='text'
						name='search'
						placeholder='Search...'
					/>
					<img src='https://img.icons8.com/ios/50/null/appointment-reminders--v1.png' alt='Notification Bell' />
					<img
						src='https://img.icons8.com/external-others-inmotus-design/67/null/external-Avatar-man-hair-avatars-others-inmotus-design-7.png'
						alt='Avatar account'
					/>
				</div>
			</nav>
		</>
	)
}

export default Navbar
