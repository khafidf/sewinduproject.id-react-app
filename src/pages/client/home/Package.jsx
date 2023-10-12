import React from "react";
import { Carousel } from "../../../components/Carousel";
import { Card } from "../../../components/Card";

export const Package = () => {
	const cardPackages = [
		<Card key={1} />,
		<Card key={2} />,
		<Card key={3} />,
		<Card key={4} />,
		<Card key={5} />,
	];

	return (
		<div className="flex flex-col justify-center w-full h-screen max-h-[678px] lg:max-w-7xl mx-auto gap-6 p-4">
			<div className="flex flex-col">
				<h2 className="text-2xl font-bold lg:text-3xl">Package</h2>
				<p>Select your package:</p>
			</div>
			<div>
				<Carousel content={cardPackages} />
			</div>
		</div>
	);
};
