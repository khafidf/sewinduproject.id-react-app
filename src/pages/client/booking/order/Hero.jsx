import React from "react";
import { Typography } from "@material-tailwind/react";

export const Hero = () => {
	return (
		<div className="w-full">
			<div className="container flex px-2 flex-col gap-7 justify-center items-center mt-6 mx-auto h-[120px] md:h-[200px] xl:h-[240px]">
				<div className="text-center">
					<Typography
						color="blue-gray"
						className="text-2xl font-bold md:text-3xl lg:text-4xl"
					>
						Check Your Order Here
					</Typography>
				</div>
			</div>
		</div>
	);
};
