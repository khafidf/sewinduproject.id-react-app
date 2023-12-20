import React from "react";
import OrderTabs from "./OrderTabs";
import { Footer } from "../../../components/Footer";

export default function BookingOrder() {
	return (
		<>
			<OrderTabs />
			<Footer />
		</>
	);
}

// export default function BookingOrder() {
// 	const initialOrder = {
// 		userId: "",
// 		packageId: "",
// 		day: "",
// 		time: ["", ""],
// 	};

// 	const [orders, setOrders] = useState([initialOrder]);
// 	const [payment, setPayment] = useState({
// 		type: "bank_transfer",
// 		provider: "",
// 	});

// const handleInputChange = (index, event) => {
// 	const { name, value } = event.target;
// 	const newOrders = [...orders];
// 	newOrders[index][name] = value;
// 	setOrders(newOrders);
// };

// const handleDayChange = (index, day) => {
// 	const newOrders = [...orders];
// 	newOrders[index].day = day;
// 	setOrders(newOrders);
// };

// const handleTimeInputChange = (index, value) => {
// 	const newOrders = [...orders];
// 	const limitHours = 2;

// 	const [hours] = value.split(":");
// 	const currentTime = new Date();
// 	currentTime.setHours(parseInt(hours, 10));

// 	let updatedTime = addHours(currentTime, limitHours);
// 	updatedTime = setMinutes(updatedTime, 0);

// 	const updatedHours = format(updatedTime, "HH:mm");

// 	newOrders[index].time[0] = value;
// 	newOrders[index].time[1] = updatedHours;
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

// const generateTimeSlots = () => {
// 	const timeSlots = [];
// 	for (let i = 5; i <= 20; i++) {
// 		const hour = `${i < 10 ? "0" : ""}${i}:00`;
// 		timeSlots.push(hour);
// 	}
// 	return timeSlots;
// };

// 	const handleSubmit = (event) => {
// 		event.preventDefault();

// 		const data = {
// 			orders: orders.map((order) => ({
// 				userId: order.userId,
// 				packageId: order.packageId,
// 				date: {
// 					day: format(order.day, "yyyy-MM-dd"),
// 					time: order.time.filter((t) => t !== ""),
// 				},
// 			})),
// 			payment: payment,
// 		};

// 		console.log(data);
// 	};

// return (
// 	<div className="container mx-auto">
// 		<div className="max-w-[50vw] mx-auto">
// 			<form onSubmit={handleSubmit}>
// 				{orders.map((order, index) => (
// 					<div key={index}>
// 						<Input
// 							type="text"
// 							name="userId"
// 							value={order.userId}
// 							onChange={(e) => handleInputChange(index, e)}
// 							placeholder="User ID"
// 						/>
// 						<Input
// 							type="text"
// 							name="packageId"
// 							value={order.packageId}
// 							onChange={(e) => handleInputChange(index, e)}
// 							placeholder="Package ID"
// 						/>
// 						<div className="flex justify-center">
// 							<DayPicker
// 								selected={order.day}
// 								onDayClick={(day) => handleDayChange(index, day)}
// 							/>
// 						</div>
// 						<div>
// 							{generateTimeSlots().map((timeSlot, subIndex) => (
// 								<Radio
// 									key={subIndex}
// 									value={timeSlot}
// 									checked={order.time.includes(timeSlot)}
// 									onChange={() => handleTimeInputChange(index, timeSlot)}
// 									label={timeSlot}
// 								/>
// 							))}
// 						</div>
// 						{orders.length > 1 && (
// 							<button type="button" onClick={() => handleRemoveOrder(index)}>
// 								Remove Order
// 							</button>
// 						)}
// 					</div>
// 				))}

// 				<button type="button" onClick={handleAddOrder}>
// 					Add New Order
// 				</button>

// 				<div>
// 					<Radio
// 						value="bca"
// 						checked={payment.provider === "bca"}
// 						onChange={() => setPayment({ ...payment, provider: "bca" })}
// 						label="BCA"
// 					/>
// 				</div>

// 				<button type="submit">Submit All Orders</button>
// 			</form>
// 		</div>
// 	</div>
// );
// }
