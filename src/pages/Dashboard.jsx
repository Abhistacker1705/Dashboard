import React, { useEffect, useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import NavigationWrapper from "../components/Wrapper/NavigationWrapper"
import ActivitiesChart from "../components/Charts/ActivitiesChart"
import FourCards from "../components/Card/FourCards"
import ProductPieChart from "../components/Charts/ProductPieChart"
import ScheduleCard from "../components/Card/ScheduleCard"
import { getData } from "../utils/DataFetch"
const Dashboard = () => {
	const [datas, setDatas] = useState([])

	//set chart data
	useEffect(() => {
		async function dataSet() {
			const res = await getData()
			setDatas(res.data.record)
			console.log(res.data.record)
		}
		dataSet()
	}, [])

	return (
		<>
			<NavigationWrapper>
				<div className='flex flex-col gap-10 font-[Montserrat]'>
					<Navbar />
					<FourCards />
					<ActivitiesChart data={datas} />
					<div className='flex justify-between max-[1200px]:grid grid-rows-1 grid-cols-1 gap-8'>
						<ProductPieChart />
						<ScheduleCard />
					</div>
				</div>
			</NavigationWrapper>
		</>
	)
}

export default Dashboard
