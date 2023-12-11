import { Typography } from "@material-tailwind/react";
import React from "react";
import {
	FaRing,
	FaHeart,
	FaGraduationCap,
	FaBook,
	FaPeoplePulling,
	FaCircleChevronRight,
} from "react-icons/fa6";
import { Link } from "react-router-dom";

export const Package = () => {
	return (
		<div className="w-full px-2 py-4 bg-gray-50">
			<div className="container flex flex-col items-center justify-center p-4 mx-auto lg:h-[578px] xl:h-[478px] cursor-default">
				<div className="p-2 text-center">
					<Typography
						color="blue-gray"
						className="text-xs uppercase md:text-sm lg:text-base"
					>
						Packages
					</Typography>
					<Typography
						color="blue-gray"
						className="text-lg font-bold md:text-xl lg:text-2xl"
					>
						Capture Every Moment, Cherish Every Memory
					</Typography>
				</div>
				<div className="grid grid-cols-2 gap-4 mt-6 sm:mt-10 xl:mt-16 sm:grid-cols-4 md:grid-cols-6 xl:grid-cols-10">
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center rounded-lg shadow-xl">
						<FaRing size={36} />
						<h3 className="font-bold">Wedding</h3>
						<Typography color="blue-gray" className="opacity-75">
							Capturing timeless moments on your special day.
						</Typography>
						<Link to="gallery" state={{ category: "wedding" }}>
							<FaCircleChevronRight size={24} className="mt-2 cursor-pointer" />
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center rounded-lg shadow-xl">
						<FaHeart size={36} />
						<h3 className="font-bold">Pre-Wedding</h3>
						<Typography color="blue-gray" className="opacity-75">
							Preserving your unique love story in stunning visuals.
						</Typography>
						<Link to="gallery" state={{ category: "pre-wedding" }}>
							<FaCircleChevronRight size={24} className="mt-2 cursor-pointer" />
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center rounded-lg shadow-xl">
						<FaBook size={36} />
						<h3 className="font-bold">Yearbook</h3>
						<Typography color="blue-gray" className="opacity-75">
							Crafting memories that reflect academic achievements.
						</Typography>
						<Link to="gallery" state={{ category: "yearbook" }}>
							<FaCircleChevronRight size={24} className="mt-2 cursor-pointer" />
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center rounded-lg shadow-xl lg md:col-start-2 xl:col-start-7">
						<FaPeoplePulling size={36} />
						<h3 className="font-bold">Couple</h3>
						<Typography color="blue-gray" className="opacity-75">
							Celebrating love and connections in beautiful frames.
						</Typography>
						<Link to="gallery" state={{ category: "couple" }}>
							<FaCircleChevronRight size={24} className="mt-2 cursor-pointer" />
						</Link>
					</div>
					<div className="flex flex-col items-center w-full col-span-2 gap-2 p-6 mx-auto text-center rounded-lg shadow-xl lg xl:col-start-9 md:col-start-4 sm:col-start-2">
						<FaGraduationCap size={36} />
						<h3 className="font-bold">Graduation</h3>
						<Typography color="blue-gray" className="opacity-75">
							Capturing the pride-filled memories of academic milestones.
						</Typography>
						<Link to="gallery" state={{ category: "graduation" }}>
							<FaCircleChevronRight size={24} className="mt-2 cursor-pointer" />
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};
