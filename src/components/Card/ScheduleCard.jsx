import React from "react"
import ScheduleTask from "../Task/ScheduleTask"

const ScheduleCard = () => {
	return (
		<div className='bg-white w-[30rem] h-64 rounded-[20px] px-10 py-8 relative'>
			<h2 className='text-black font-bold text-xl mb-4'>Today's Schedule</h2>
			<p className='absolute top-9 right-8 text-[#858585] text-sm '>See all{`>`} </p>
			<div className='flex flex-col gap-4'>
				<ScheduleTask />
				<ScheduleTask />
			</div>
		</div>
	)
}

export default ScheduleCard
