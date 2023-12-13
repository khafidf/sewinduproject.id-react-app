import { Typography } from "@material-tailwind/react";
import React from "react";

export const Hero = () => {
	return (
		<div className="w-full">
			<div className="container flex justify-center items-center mt-6 mx-auto h-[160px] lg:h-[240px] xl:h-[280px]">
				<div className="px-2">
					<div className="cursor-default">
						<Typography
							color="blue-gray"
							className="text-2xl font-bold md:text-3xl lg:text-4xl"
						>
							Discover Our Captivating Gallery Collection
						</Typography>
						<Typography
							color="gray"
							className="mt-1 text-xs md:text-sm lg:text-base"
						>
							Explore a curated collection of captivating images in our gallery.
						</Typography>
						<Typography
							color="blue-gray"
							className="text-xs text-right opacity-70"
						>
							by Sewindu Project.
						</Typography>
					</div>
				</div>
			</div>
		</div>
	);
};
