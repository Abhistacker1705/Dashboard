import React from "react"

const ScheduleTask = ({ task }) => {
	return (
		<div className='flex flex-row gap-[15px]'>
			<div style={{ borderColor: "#9BDD7C" || "#6972C3" }} className='border-[2.75px] h-[6.1875]'></div>
			<div className='flex flex-col gap-2' style={{ fontFamily: "Lato" }}>
				{/* <h5  className="text-[#666666] font-bold text-sm ">{task.heading}</h5>
				<p  className="text-[#666666] text-sm ">{task.time}</p>
				<p className="text-[#666666] text-sm ">{task.location}</p> */}
				<h5 className='text-[#666666] font-bold text-sm '>Meeting with suppliers from Kuta Bali</h5>
				<p className='text-[#666666] text-xs '>14.00-15.00</p>
				<p className='text-[#666666] text-xs '>at Sunset Road, Kuta, Bali </p>
			</div>
		</div>
	)
}

export default ScheduleTask
