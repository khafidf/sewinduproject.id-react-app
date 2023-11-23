import React, { useState } from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	eachDayOfInterval,
	isSameDay,
	getDay,
} from "date-fns";
import { DayModal } from "../../../components/DayModal";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { dateSelector } from "../../../redux/slice/calendarSlice";
import { FaGripLinesVertical } from "react-icons/fa6";

export const Section = () => {
	const [selectedDate, setSelectedDate] = useState(null);
	const [showModal, setShowModal] = useState(false);
	const currentMonth = useSelector(dateSelector);

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const startOfMonthDate = startOfMonth(currentMonth);
	const endOfMonthDate = endOfMonth(currentMonth);

	const daysInMonth = eachDayOfInterval({
		start: startOfMonthDate,
		end: endOfMonthDate,
	});

	const firstDayOfMonth = getDay(startOfMonthDate);

	const emptyCells = Array(firstDayOfMonth).fill(null);

	const handleDateClick = (date) => {
		setSelectedDate(date);
		setShowModal(true);
	};

	return (
		<div className="w-full">
			<div className="container px-2 pt-6 mx-auto h-[496px] md:h-[546px] xl:h-[586px] mb-12">
				<div className="max-w-[50rem] mx-auto">
					<div className="py-2 text-center bg-red-600 sm:py-3">
						<Typography className="text-2xl font-bold cursor-default text-blue-gray-50">
							{format(currentMonth, "MMMM yyyy")}
						</Typography>
					</div>
					<div className="grid h-screen mt-1 p-1 grid-cols-7 border max-h-[28rem] gap-2">
						{days.map((day) => (
							<div
								key={day}
								className="flex flex-col items-center font-bold text-center border-b-2 cursor-default"
							>
								<FaGripLinesVertical size={18} className="relative -top-3" />
								{day}
							</div>
						))}
						{/* Render empty cells before the first day of the month */}
						{emptyCells.map((_, index) => (
							<div key={`empty-${index}`} className="text-center" />
						))}
						{daysInMonth.map((day) => (
							<div
								key={day.getTime()}
								className={`flex justify-center cursor-pointer border-b-2 items-center p-2 text-center ${
									isSameDay(day, new Date()) ? "bg-blue-200" : ""
								}`}
								onClick={() => handleDateClick(day)}
							>
								<span>{format(day, "d")}</span>
							</div>
						))}
					</div>
				</div>
				{showModal && (
					<DayModal
						date={selectedDate}
						closeModal={() => setShowModal(false)}
					/>
				)}
			</div>
		</div>
	);
};
