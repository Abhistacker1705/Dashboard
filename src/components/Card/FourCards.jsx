import React from "react"
import CardList from "../../utils/CardList"
import Card from "./Card"

const FourCards = () => {
	return (
		<div
			style={{ fontFamily: "Open Sans" }}
			className='flex justify-between max-[1200px]:grid grid-cols-2 gap-4 w-full '
		>
			{CardList.map((item, index) => (
				<Card key={index} item={item} />
			))}
		</div>
	)
}

export default FourCards
