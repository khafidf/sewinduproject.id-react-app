import React from "react";
import { Typography } from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
	goToPreviousMonth,
	goToNextMonth,
	goToPreviousYear,
	goToNextYear,
	goToToday,
	dateSelector,
} from "../../../redux/slice/calendarSlice.js";
import {
	FaAngleLeft,
	FaAngleRight,
	FaAnglesLeft,
	FaAnglesRight,
	FaArrowsRotate,
} from "react-icons/fa6";

export const Hero = () => {
	const dispatch = useDispatch();
	const currentMonth = useSelector(dateSelector);

	const handlePreviousYear = () => {
		dispatch(goToPreviousYear());
	};

	const handlePreviousMonth = () => {
		dispatch(goToPreviousMonth());
	};

	const handleNextMonth = () => {
		dispatch(goToNextMonth());
	};

	const handleNextYear = () => {
		dispatch(goToNextYear());
	};

	const handleToday = () => {
		dispatch(goToToday());
	};

	return (
		<div className="w-full">
			<div className="container flex px-2 flex-col gap-7 justify-center items-center mt-6 mx-auto h-[160px] md:h-[240px] xl:h-[280px]">
				<div className="text-center">
					<Typography
						color="blue-gray"
						className="text-2xl font-bold md:text-3xl lg:text-4xl"
					>
						Book Your Photography Session
					</Typography>
					<Typography
						color="blue-gray"
						className="mt-1 text-xs opacity-75 md:text-sm lg:text-base"
					>
						Secure your photo session effortlessly. Explore our services now!
					</Typography>
				</div>
				<div className="flex justify-around w-full mt-2 md:justify-evenly lg:px-20 xl:px-24">
					<div className="flex gap-6">
						<FaAnglesLeft
							className="w-6 h-auto cursor-pointer sm:w-7 md:w-8 lg:w-9 xl:w-10"
							onClick={handlePreviousYear}
						/>
						<FaAngleLeft
							className="w-6 h-auto cursor-pointer sm:w-7 md:w-8 lg:w-9 xl:w-10"
							onClick={handlePreviousMonth}
						/>
					</div>
					<div
						className={`${
							new Date().getFullYear() === currentMonth.getFullYear() &&
							new Date().getMonth() === currentMonth.getMonth() &&
							"opacity-0"
						}`}
					>
						<FaArrowsRotate
							className="w-6 h-auto cursor-pointer sm:w-7 md:w-8 lg:w-9 xl:w-10"
							onClick={handleToday}
						/>
					</div>
					<div className="flex gap-6">
						<FaAngleRight
							className="w-6 h-auto cursor-pointer sm:w-7 md:w-8 lg:w-9 xl:w-10"
							onClick={handleNextMonth}
						/>
						<FaAnglesRight
							className="w-6 h-auto cursor-pointer sm:w-7 md:w-8 lg:w-9 xl:w-10"
							onClick={handleNextYear}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};
