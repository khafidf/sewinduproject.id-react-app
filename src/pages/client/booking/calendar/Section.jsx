import React, { useEffect } from "react";
import {
	format,
	startOfMonth,
	endOfMonth,
	isSameDay,
	startOfWeek,
	endOfWeek,
	addDays,
	isSameMonth,
	isAfter,
	isBefore,
} from "date-fns";
import { Typography } from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { dateSelector } from "../../../../redux/slice/calendarSlice";
import { FaCircle, FaGripLinesVertical } from "react-icons/fa6";
import {
	openAccordionSelector,
	dateAccordionSelector,
	setCloseAccordionSection,
	setOpenAccordionSection,
} from "../../../../redux/slice/accordionSlice";
import { setRefetchCalendar } from "../../../../redux/slice/bookingSlice";
import { useAllBookingQuery } from "../../../../redux/api/booking/bookingSlice";

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

	const {
		data: scheduleData,
		isLoading,
		refetch: refetchCalendar,
	} = useAllBookingQuery();

	useEffect(() => {
		dispatch(setRefetchCalendar(refetchCalendar));
	}, [dispatch, refetchCalendar]);

	// const hour = new Date("2023-12-02");
	// const hour = new Date("12-02-2023 13:24").getHours();
	// const minute = new Date("12-02-2023 13:24").getMinutes();
	// console.log(`${hour}:${minute}`);
	// console.log(
	// 	totalDates.map((date) => isSameDay(date, new Date("03-27-2024")))
	// );
	// console.log(new Date("12/02/2023 13:24")); => bulan-tanggal-tahun jam:menit

	return (
		<div className="w-full">
			<div className="container px-2 pt-6 mx-auto mb-12">
				<div className="max-w-[50rem] mx-auto">
					<div className="py-2 text-center bg-secondary sm:py-3">
						<Typography className="text-2xl font-bold cursor-default text-primary">
							{format(currentMonth, "MMMM yyyy")}
						</Typography>
					</div>
					<div
						className={`grid h-screen mt-1 p-1 grid-cols-7 border ${
							totalDates.length == 35 ? "max-h-[28rem]" : "max-h-[32.63rem]"
						} gap-2`}
					>
						{days.map((dayCalendar) => (
							<div
								key={dayCalendar}
								className="flex flex-col items-center font-bold text-center border-b-2 cursor-default"
							>
								<FaGripLinesVertical size={18} className="relative -top-3" />
								{dayCalendar}
							</div>
						))}
						{prevDates.map((dayCalendar, index) => (
							<div
								key={index}
								className="flex items-center justify-center p-2 text-center border-b-2 bg-secondary/20 text-secondary/70"
							>
								<span>{format(dayCalendar, "d")}</span>
							</div>
						))}
						{dates.map((dayCalendar, index) => (
							<div
								key={index}
								className={`flex relative justify-center cursor-pointer border-b-2 items-center p-2 text-center ${
									isSameDay(dayCalendar, new Date())
										? "bg-secondary/70 text-primary"
										: ""
								}`}
								onClick={() => {
									if (openData === 0 || !isSameDay(dayCalendar, dateData)) {
										dispatch(
											setOpenAccordionSection({ open: 1, date: dayCalendar })
										);
									} else {
										dispatch(setCloseAccordionSection({ date: dayCalendar }));
									}
								}}
							>
								{!isLoading &&
									scheduleData?.data.map(({ date }, index) => {
										const { day } = date;
										const dateCurrent = new Date(day);

										const isDateBefore = isBefore(dateCurrent, new Date());
										const isDateAfter = isAfter(dateCurrent, new Date());
										const isDateSame = isSameDay(dateCurrent, new Date());

										const colorType = isDateSame
											? "blue"
											: isDateAfter
											? "red"
											: isDateBefore && "green";

										return (
											isSameDay(dateCurrent, dayCalendar) && (
												<FaCircle
													key={index}
													className="absolute -right-0.5 -top-0.5"
													size={8}
													color={colorType}
												/>
											)
										);
									})}
								<span>{format(dayCalendar, "d")}</span>
							</div>
						))}
						{nextDates.map((dayCalendar, index) => (
							<div
								key={index}
								className="flex items-center justify-center p-2 text-center border-b-2 bg-secondary/20 text-secondary/70"
							>
								<span>{format(dayCalendar, "d")}</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};

// Form untuk create transaction
// const initialOrder = {
// 	userId: "",
// 	packageId: "",
// 	day: "",
// 	time: "",
// };

// const [orders, setOrders] = useState([initialOrder]);

// const handleInputChange = (index, event) => {
// 	const { name, value } = event.target;
// 	const newOrders = [...orders];
// 	newOrders[index][name] = value;
// 	setOrders(newOrders);
// };

// const handleAddOrder = () => {
// 	setOrders([...orders, initialOrder]);
// };

// const handleRemoveOrder = (index) => {
// 	if (orders.length > 1) {
// 		const newOrders = orders.filter((_, i) => i !== index);
// 		setOrders(newOrders);
// 	}
// };

// const handleSubmit = (event) => {
// 	event.preventDefault();

// 	console.log(orders);
// };

// return (
// 	<div>
// 		<form onSubmit={handleSubmit}>
// 			{orders.map((order, index) => (
// 				<div key={index}>
// 					<input
// 						type="text"
// 						name="userId"
// 						value={order.userId}
// 						onChange={(e) => handleInputChange(index, e)}
// 						placeholder="User ID"
// 					/>
// 					<input
// 						type="text"
// 						name="packageId"
// 						value={order.packageId}
// 						onChange={(e) => handleInputChange(index, e)}
// 						placeholder="Package ID"
// 					/>
// 					<input
// 						type="text"
// 						name="day"
// 						value={order.day}
// 						onChange={(e) => handleInputChange(index, e)}
// 						placeholder="Day"
// 					/>
// 					<input
// 						type="text"
// 						name="time"
// 						value={order.time}
// 						onChange={(e) => handleInputChange(index, e)}
// 						placeholder="Time"
// 					/>
// 					{orders.length > 1 && (
// 						<button type="button" onClick={() => handleRemoveOrder(index)}>
// 							Remove Order
// 						</button>
// 					)}
// 				</div>
// 			))}

// 			<button type="button" onClick={handleAddOrder}>
// 				Add New Order
// 			</button>

// 			<button type="submit">Submit All Orders</button>
// 		</form>
// 	</div>
// );
