import React from "react"
import { PieChart, Pie, Legend, Tooltip, Cell, ResponsiveContainer } from "recharts"

const ProductPieChart = () => {
	const data = [
		{ label: "Super Hoodies", value: 14, name: 14 },
		{ label: "Basic Tees", value: 55, name: 55 },
		{ label: "Custom Short Pants", value: 31, name: 31 }
	]

	const COLORS = ["#EE8484", "#98D89E", "#F6DC7D"]

	const formatLegendValue = (value, entry) => (
		<div className='inline-flex ml-4 flex-col gap-1'>
			<span style={{ fontSize: "14px", fontWeight: "700", color: "black" }}>{value}</span>
			<span style={{ fontSize: "12px", color: "#858585" }}>55%</span>
		</div>
	)

	return (
		<div className='bg-white w-[30rem] h-64 rounded-[20px] px-10 py-8 relative'>
			<h2 className='text-black font-bold text-xl mb-4'>Top Products</h2>
			<select
				className='absolute top-9 right-8 w-fit h-[10%] border-none text-[#858585] text-sm mb-8 '
				// onChange={(event) => setSelectedMonth(event.target.value)}
			>
				<option value='May'>May-June 2021</option>
				<option value='June'>June-July 2021</option>
				<option value='July'>July-Aug 2021</option>
				<option value='Aug'>Aug-Sep 2021</option>
			</select>
			<PieChart width={400} height={180}>
				<Pie data={data} cx={"35%"} cy={"40%"} outerRadius={70} fill='#8884d8' dataKey='value'>
					{data.map((entry, index) => (
						<Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
					))}
				</Pie>
				<Tooltip />
				<Legend
					formatter={formatLegendValue}
					iconType='circle'
					style={{ display: "flex" }}
					payload={[
						{ value: "Super Hoodies", type: "circle", color: "#98D89E", id: "ID01" },
						{ value: "Basic Tees", type: "circle", color: "#F6DC7D", id: "ID02" },
						{ value: "Custom Short Pants", type: "circle", color: "#EE8484", id: "ID03" }
					]}
					layout='vertical'
					align='right'
					wrapperStyle={{ display: "flex", marginLeft: "50px" }}
					verticalAlign='top'
				/>
			</PieChart>
		</div>
	)
}

export default ProductPieChart
