import { Typography } from "@material-tailwind/react";
import React from "react";
import {
	FaRing,
	FaCakeCandles,
	FaGraduationCap,
	FaChildren,
	FaPeoplePulling,
	FaCircleChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Package = () => {
	return (
		<div className="w-full px-2 py-4 bg-secondary">
			<div className="container flex flex-col items-center justify-center p-4 mx-auto lg:h-[578px] xl:h-[478px] cursor-default">
				<div className="p-2 text-center">
					<Typography variant="h4" color="white" className="uppercase">
						Packages
					</Typography>
					<Typography variant="h5" color="white" className="font-normal">
						Select Service Packages That Suit You Best!
					</Typography>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-6 sm:mt-10 xl:mt-16 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10">
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center bg-primary">
						<FaPeoplePulling size={36} className="text-secondary" />
						<Typography color="blue-gray" className="font-bold">
							Couple
						</Typography>
						<Typography color="blue-gray" className="opacity-75">
							Celebrating love and connections in beautiful frames.
						</Typography>
						<Link to="gallery" state={{ category: "couple" }}>
							<FaCircleChevronRight
								size={24}
								className="mt-2 cursor-pointer text-secondary"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center bg-primary">
						<FaRing size={36} className="text-secondary" />
						<Typography color="blue-gray" className="font-bold">
							Wedding
						</Typography>
						<Typography color="blue-gray" className="opacity-75">
							Capturing timeless moments on your special day.
						</Typography>
						<Link to="gallery" state={{ category: "wedding" }}>
							<FaCircleChevronRight
								size={24}
								className="mt-2 cursor-pointer text-secondary"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center bg-primary">
						<FaChildren size={36} className="text-secondary" />
						<Typography color="blue-gray" className="font-bold">
							Tedak Sinten
						</Typography>
						<Typography color="blue-gray" className="opacity-75">
							Capturing Your Precious Children&apos;s Special Moments.
						</Typography>
						<Link to="gallery" state={{ category: "yearbook" }}>
							<FaCircleChevronRight
								size={24}
								className="mt-2 cursor-pointer text-secondary"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center bg-primary lg md:col-start-2 xl:col-start-7">
						<FaGraduationCap size={36} className="text-secondary" />
						<Typography color="blue-gray" className="font-bold">
							Graduation
						</Typography>
						<Typography color="blue-gray" className="opacity-75">
							Capturing the pride-filled memories of academic milestones.
						</Typography>
						<Link to="gallery" state={{ category: "graduation" }}>
							<FaCircleChevronRight
								size={24}
								className="mt-2 cursor-pointer text-secondary"
							/>
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center bg-primary lg xl:col-start-9 md:col-start-4 sm:col-start-2">
						<FaCakeCandles size={36} className="text-secondary" />
						<Typography color="blue-gray" className="font-bold">
							Birthday
						</Typography>
						<Typography color="blue-gray" className="opacity-75">
							Capturing the Moments of Your Special Birthday Celebration.
						</Typography>
						<Link to="gallery" state={{ category: "pre-wedding" }}>
							<FaCircleChevronRight
								size={24}
								className="mt-2 cursor-pointer text-secondary"
							/>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
