import React from "react"
import { NavLink } from "react-router-dom"
import menuList from "../../utils/MenuList"
const NavigationWrapper = ({ children }) => {
	return (
		<>
			<div className='flex min-w-fit p-10 gap-[3.75rem] bg-neutral-100'>
				<aside className='flex flex-col basis-[17.5rem] min-h-fit p-[3.125rem] justify-between rounded-[30px] bg-black text-white'>
					<div>
						<h1 className='text-4xl font-bold mb-[3.75rem]'>Board.</h1>
						{menuList.map((menu, index) => (
							<NavLink className='flex items-center gap-3 mb-[2.5rem] hover:font-black' key={index}>
								<img src={menu.icon} />
								<p className='text-lg'>{menu.name}</p>
							</NavLink>
						))}
					</div>

					<div className='flex flex-col gap-[1.25rem]'>
						<NavLink>Help</NavLink>
						<NavLink>Contact us</NavLink>
					</div>
				</aside>
				<main className='flex h-fit p-4 basis-fit bg-neutral-100'>{children}</main>
			</div>
		</>
	)
}

export default NavigationWrapper
