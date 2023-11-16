import React from "react";
import { Carousel } from "../../../components/Carousel";
import { CardHome } from "../../../components/CardHome";

export const Package = () => {
	const cardPackages = [
		<CardHome key={1} />,
		<CardHome key={2} />,
		<CardHome key={3} />,
		<CardHome key={4} />,
		<CardHome key={5} />,
	];

	return (
		<div className="flex flex-col justify-center w-full max-h-[768px] lg:max-w-7xl mx-auto gap-6 py-4 px-2">
			<div className="flex flex-col">
				<h2 className="text-2xl font-bold lg:text-3xl">Package</h2>
				<p>Select your package</p>
			</div>
			<div>
				<Carousel content={cardPackages} />
			</div>
		</div>
	);
};
