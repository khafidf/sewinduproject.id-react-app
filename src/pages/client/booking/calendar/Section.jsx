import React from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	isSameDay,
	startOfWeek,
	endOfWeek,
	addDays,
	isSameMonth,
} from "date-fns";
import { Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { dateSelector } from "../../../../redux/slice/calendarSlice";
import { FaGripLinesVertical } from "react-icons/fa6";
import {
	openAccordionSelector,
	dateAccordionSelector,
	setCloseAccordionSection,
	setOpenAccordionSection,
} from "../../../../redux/slice/accordionSlice";

export const Section = () => {
	const openData = useSelector(openAccordionSelector);
	const dateData = useSelector(dateAccordionSelector);
	const currentMonth = useSelector(dateSelector);
	const dispatch = useDispatch();

	const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

	const startOfMonthDate = startOfMonth(currentMonth);
	const endOfMonthDate = endOfMonth(currentMonth);

	const dateStart = startOfWeek(startOfMonthDate, {
		weekStartsOn: 0,
	});

	const dateEnd = endOfWeek(endOfMonthDate, {
		weekStartsOn: 0,
	});

	const prevDates = [];
	const dates = [];
	const nextDates = [];

	const totalDates = [];

	let date = dateStart;

	const prevMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth() - 1,
		1
	);

	const nextMonth = new Date(
		currentMonth.getFullYear(),
		currentMonth.getMonth() + 1,
		1
	);

	while (date <= dateEnd) {
		totalDates.push(date);
		isSameMonth(date, prevMonth)
			? prevDates.push(date)
			: isSameMonth(date, currentMonth)
			? dates.push(date)
			: isSameMonth(date, nextMonth) && nextDates.push(date);
		date = addDays(date, 1);
	}

	// console.log(
	// 	totalDates.map((date) => isSameDay(date, new Date("03/27/2024")))
	// );
	// console.log(new Date("12/02/2023 13:24")); => bulan/tanggal/tahun jam:menit

	return (
		<div className="w-full">
			<div className="container px-2 pt-6 mx-auto mb-12">
				<div className="max-w-[50rem] mx-auto">
					<div className="py-2 text-center bg-red-600 rounded-lg sm:py-3">
						<Typography className="text-2xl font-bold cursor-default text-blue-gray-50">
							{format(currentMonth, "MMMM yyyy")}
						</Typography>
					</div>
					<div
						className={`grid h-screen mt-1 p-1 grid-cols-7 rounded-lg border ${
							totalDates.length == 35 ? "max-h-[28rem]" : "max-h-[32.63rem]"
						} gap-2`}
					>
						{days.map((day) => (
							<div
								key={day}
								className="flex flex-col items-center font-bold text-center border-b-2 rounded-lg cursor-default"
							>
								<FaGripLinesVertical size={18} className="relative -top-3" />
								{day}
							</div>
						))}
						{prevDates.map((day, index) => (
							<div
								key={index}
								className="flex items-center justify-center p-2 text-center bg-gray-900 border-b-2 rounded-lg opacity-25 text-blue-gray-50"
							>
								<span>{format(day, "d")}</span>
							</div>
						))}
						{dates.map((day, index) => (
							<div
								key={index}
								className={`flex justify-center rounded-lg cursor-pointer border-b-2 items-center p-2 text-center ${
									isSameDay(day, new Date()) ? "bg-blue-200" : ""
								}`}
								onClick={() => {
									if (openData === 0 || !isSameDay(day, dateData)) {
										dispatch(setOpenAccordionSection({ open: 1, date: day }));
									} else {
										dispatch(setCloseAccordionSection({ date: day }));
									}
								}}
							>
								<span>{format(day, "d")}</span>
							</div>
						))}
						{nextDates.map((day, index) => (
							<div
								key={index}
								className="flex items-center justify-center p-2 text-center bg-gray-900 border-b-2 rounded-lg opacity-25 text-blue-gray-50"
							>
								<span>{format(day, "d")}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
