import React from "react";
import { Typography, Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Gallery = () => {
	return (
		<div className="w-full px-2 py-4 bg-primary">
			<div className="container flex flex-col items-center justify-center p-4 mx-auto h-[378px] lg:h-[578px] xl:h-[478px] cursor-default">
				<div className="p-2 text-center">
					<Typography variant="h4" color="blue-gray" className="uppercase">
						Our Galleries
					</Typography>
					<Typography variant="h5" color="blue-gray" className="font-normal">
						Explore Our Portfolio
					</Typography>
				</div>
				<Button size="lg" variant="filled" color="blue-gray">
					<Link to={"/gallery"}>Check it Now!</Link>
				</Button>
			</div>
		</div>
	);
};
