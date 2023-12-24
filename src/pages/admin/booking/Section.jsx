import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import Loading from "../../../components/Loading";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";
import { useGetOrderAdminQuery } from "../../../redux/api/booking/bookingSlice";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";
import { format } from "date-fns";
import { AddDayOff } from "../../../components/AddDayOff";

export const Section = () => {
	const openSidebar = useSelector(sidebarSelector);

	const { data: orderData, isLoading } = useGetOrderAdminQuery();

	const combinedData = orderData?.data?.booking.map((booking) => {
		const relatedUser = orderData?.data?.user.find(
			(user) => user._id === booking.userId
		);

		const relatedOrder = orderData?.data?.order.find(
			(order) => order.order_id === booking.orderId
		);

		return {
			...booking,
			user: relatedUser,
			order: relatedOrder,
		};
	});

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const TABLE_HEAD = [
		"No",
		"User",
		"Phone Number",
		"Package Name",
		"Note",
		"Date Booking",
		"Status",
	];

	return (
		<div
			className={`absolute top-4 right-5 z-0 duration-300 shadow-lg p-4 shadow-secondary/40 bg-primary text-secondary h-[calc(100vh-9.2vh)] max-w-[calc(100vw-6.5rem)] ${
				openSidebar ? "w-[calc(100vw-24rem)]" : "w-full"
			}`}
		>
			<div className="flex justify-end pb-2">
				<AddDayOff />
			</div>
			<Card className="w-full h-[calc(100vh-19.3vh)] overflow-scroll">
				<table className="w-full text-center table-auto min-w-max">
					<thead className="sticky top-0 z-40">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 border-b border-secondary/10 bg-secondary"
								>
									<Typography
										variant="small"
										color="white"
										className="font-normal leading-none opacity-70"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					{!isLoading ? (
						<tbody>
							{combinedData.map(
								(
									{ user, order, packageName, note, categoryName, date },
									index
								) => {
									const { name, phoneNumber } = user;
									const { transaction_status } = order;
									const { day, time } = date;
									const isLast = index === combinedData.length - 1;
									const classes = isLast
										? "p-4"
										: "p-4 border-b border-blue-gray-50";

									return (
										<tr key={index}>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{index + 1}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{name}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{phoneNumber}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{`${packageName} (${capitalize(categoryName)})`}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal text-start"
												>
													{note}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{`${format(new Date(day), "dd, MMMM yyyy")} ${
														time[0]
													} - ${time[1]}`}
												</Typography>
											</td>
											<td className={classes}>
												<div className="mx-auto w-max">
													{transaction_status === "pending" ? (
														<FaSquare className="text-[#ff6f00]" />
													) : (
														transaction_status === "settlement" && (
															<FaSquareCheck className="text-[#1b5e20]" />
														)
													)}
												</div>
											</td>
										</tr>
									);
								}
							)}
						</tbody>
					) : (
						<tbody>
							<tr>
								<td colSpan="7">
									<Loading />
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</Card>
		</div>
	);
};
