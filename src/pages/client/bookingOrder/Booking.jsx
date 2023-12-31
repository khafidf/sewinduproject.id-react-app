import React, { useState } from "react";
import {
	Radio,
	Input,
	Select,
	Option,
	Textarea,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { addHours, format, setMinutes } from "date-fns";
import Cookies from "js-cookie";
import {
	usePackageDetailsQuery,
	usePackageQuery,
} from "../../../redux/api/package/packageApiSlice";
import { useGetDaysQuery } from "../../../redux/api/dayOff/dayOffSlice";

const css = `
  .my-selected:not([disabled]) {
	background-color: #2e2b2c;
	color: #fefefe;
  }
  .my-selected:hover:not([disabled]) {
    border-color: #2e2b2c;
    color: #2e2b2c;
  }
  .my-today {
    color: #2e2b2c;
  }
`;

export default function Booking({ orders }) {
	const user = Cookies.get("userId");
	const userName = Cookies.get("user");
	const initialOrder = {
		userId: user,
		packageId: "",
		note: "",
		day: "",
		time: ["", ""],
	};

	// eslint-disable-next-line no-unused-vars
	const [ordersData, setOrdersData] = useState(orders || [initialOrder]);
	const [indexKey, setIndexKey] = useState(0);

	const { data: dataDetailPackage, refetch } = usePackageDetailsQuery(
		ordersData[indexKey].packageId
	);

	const { data: daysData, isLoading } = useGetDaysQuery();

	const disableDate =
		!isLoading &&
		[
			...(daysData?.data?.map(({ date }) => new Date(date)) || []), // Extracting dates or an empty array
			{ before: new Date() },
		].filter(Boolean);

	const handleSelectPackage = (index, value) => {
		const newOrders = [...orders];
		newOrders[index]["packageId"] = value;
		refetch();
		setOrdersData(newOrders);
		setIndexKey(index);
	};

	const handleNoteChange = (index, value) => {
		const newOrders = [...orders];
		newOrders[index]["note"] = value;
		setOrdersData(newOrders);
	};

	const handleDayChange = (index, day) => {
		const newOrders = [...orders];
		newOrders[index].day = day;
		setOrdersData(newOrders);
	};

	const handleTimeInputChange = (index, value) => {
		const newOrders = [...orders];
		const limitHours =
			dataDetailPackage?.data?.length === 0
				? 1
				: Number(dataDetailPackage?.data?.hour);

		const [hours] = value.split(":");
		const currentTime = new Date();
		currentTime.setHours(parseInt(hours, 10));

		let updatedTime = addHours(currentTime, limitHours);
		updatedTime = setMinutes(updatedTime, 0);

		const updatedHours = format(updatedTime, "HH:mm");

		newOrders[index].time[0] = value;
		newOrders[index].time[1] = updatedHours;
		setOrdersData(newOrders);
	};

	const handleRemoveOrder = (index) => {
		if (orders.length > 1) {
			const newOrders = orders.filter((_, i) => i !== index);
			setOrdersData(newOrders);
		}
	};

	const generateTimeSlots = () => {
		const timeSlots = [];
		for (let i = 5; i <= 20; i++) {
			const hour = `${i < 10 ? "0" : ""}${i}:00`;
			timeSlots.push(hour);
		}
		return timeSlots;
	};

	const { data: dataPackage, isLoading: packageLoading } = usePackageQuery("");

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div className="container mx-auto">
			<div className="max-w-[50vw] mx-auto">
				<form>
					{orders.map((order, index) => (
						<div key={index} className="flex flex-col gap-6">
							<Input
								variant="standard"
								color="blue-gray"
								type="text"
								className="px-3"
								name="userId"
								value={userName}
								placeholder="User ID"
								readOnly
								disabled
							/>

							{!packageLoading && (
								<Select
									label="Select Package"
									variant="outlined"
									color="blue-gray"
									className="rounded-none"
									value={order.packageId}
									onChange={(value) => handleSelectPackage(index, value)}
								>
									{dataPackage?.data?.map((item, index) => {
										return (
											<Option key={index} value={item._id}>
												{`${item.name} (${capitalize(item.category)})`}
											</Option>
										);
									})}
								</Select>
							)}

							<Textarea
								variant="static"
								label="Note"
								placeholder="Add location or a note for crew."
								value={order.note}
								onChange={(e) => handleNoteChange(index, e.target.value)}
							/>

							<div className="flex justify-center">
								<style>{css}</style>
								<DayPicker
									modifiersClassNames={{
										selected: "my-selected",
										today: "my-today",
									}}
									disabled={disableDate}
									selected={order.day}
									onDayClick={(day) => handleDayChange(index, day)}
								/>
							</div>
							<div className="max-w-[40vw] flex mx-auto justify-center flex-wrap">
								{generateTimeSlots().map((timeSlot, subIndex) => (
									<Radio
										key={subIndex}
										value={timeSlot}
										checked={order.time.includes(timeSlot)}
										onChange={() => handleTimeInputChange(index, timeSlot)}
										label={timeSlot}
									/>
								))}
							</div>
							{orders.length > 1 && (
								<button type="button" onClick={() => handleRemoveOrder(index)}>
									Remove Order
								</button>
							)}
						</div>
					))}
				</form>
			</div>
		</div>
	);
}
