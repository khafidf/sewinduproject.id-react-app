import React, { useEffect, useState } from "react";
import { Option, Select } from "@material-tailwind/react";
import { CardHome } from "../../../components/CardHome";
import { Carousel } from "../../../components/Carousel";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [packages, setPackages] = useState([]);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const cardPackages = [
		<CardHome key={1} />,
		<CardHome key={2} />,
		<CardHome key={3} />,
		<CardHome key={4} />,
		<CardHome key={5} />,
	];

	return (
		<div className="flex flex-col w-full gap-6 px-2 py-4 mx-auto lg:max-w-7xl">
			<div className="flex flex-col min-h-[calc(100vh-8rem)] lg:min-h-[768px] gap-4">
				<div className="py-2 border-b-2 border-gray-900">
					<Select
						label="Select Category"
						variant="outlined"
						value={category}
						onChange={changeHandler}
					>
						<Option value="wedding">Wedding</Option>
						<Option value="couple">Couple</Option>
					</Select>
				</div>
				<div className="my-auto">
					<Carousel content={cardPackages} />
				</div>
			</div>
		</div>
	);
};
