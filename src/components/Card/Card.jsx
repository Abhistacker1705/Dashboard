import React from "react"

const Card = ({ item }) => {
	return (
		<div
			className='flex basis-[13.815625rem] h-[7.5rem] rounded-[20px] relative max-[1400px]:w-full'
			style={{ backgroundColor: item.color }}
		>
			<div className='flex flex-col h-[7.5rem] p-4 basis-[13.815625rem] justify-end'>
				<h2 className='text-black text-sm'>{item.name}</h2>
				<p className='text-black font-bold text-2xl'>{item.value}</p>
			</div>
			<img src={item.icon} className='h-5 w-6 absolute top-4 right-5' />
		</div>
	)
}

export default Card
