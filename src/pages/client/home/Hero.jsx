import React from "react";
import { Button, Typography } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const Hero = () => {
	return (
		<div className="relative w-full">
			<div
				className="absolute top-0 w-full max-h-[80vh] h-screen bg-bottom bg-no-repeat bg-cover -z-20 opacity-30"
				style={{ backgroundImage: "url(bg.webp" }}
			/>
			<div className="container flex justify-center items-center mx-auto max-h-[72vh] h-screen">
				<div className="flex flex-col gap-4 p-2 md:gap-3 lg:gap-2 lg:px-16">
					<div className="text-center cursor-default">
						<Typography
							color="blue-gray"
							className="text-sm md:text-base lg:text-lg"
						>
							In Sewindu Project, capture your important moments. Create
							beautiful stories with us.
						</Typography>
						<Typography
							color="blue-gray"
							className="max-w-2xl text-3xl font-bold align-left lg:text-4xl/snug"
						>
							Capture Beautiful Moments with Sewindu Project
						</Typography>
					</div>

					<Button
						size="lg"
						variant="filled"
						color="blue-gray"
						className="mx-auto"
					>
						<Link to={"/booking-order"}>Book Now!</Link>
					</Button>
				</div>
			</div>
		</div>
	);
};
