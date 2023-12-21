import React from "react";
import { Typography, Card } from "@material-tailwind/react";
import Loading from "../../../components/Loading";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";
import { useGetOrderAdminQuery } from "../../../redux/api/booking/bookingSlice";
import { FaSquare, FaSquareCheck } from "react-icons/fa6";

export const Section = () => {
	const openSidebar = useSelector(sidebarSelector);

	const { data: orderData, isLoading } = useGetOrderAdminQuery();

	const combinedData = orderData?.data?.order.map((order) => {
		const relatedUser = orderData?.data?.user.find(
			(user) => user._id === order.userId
		);

		const relatedPackages = orderData?.data?.package.find((packages) =>
			packages.some((pkg) => pkg.orderId === order.orderId)
		);

		return {
			...order,
			user: relatedUser,
			packages: relatedPackages,
		};
	});

	const TABLE_HEAD = [
		"No",
		"User",
		"Phone Number",
		"PackageName",
		"Date Booking",
		"Status",
	];

	return (
		<div
			className={`absolute top-4 right-5 z-0 duration-300 shadow-lg p-4 shadow-secondary/40 bg-primary text-secondary h-[calc(100vh-9.2vh)] max-w-[calc(100vw-6.5rem)] ${
				openSidebar ? "w-[calc(100vw-24rem)]" : "w-full"
			}`}
		>
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
							{combinedData.map(({ user, packages, statusOrder }, index) => {
								const { name, phoneNumber } = user;
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
												{packages.map(({ packageName }, index) => (
													<React.Fragment key={index}>
														{index > 0 && <br />} {`${packageName}`}
													</React.Fragment>
												))}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{packages.map(({ date }, index) => {
													const { day, time } = date;
													return (
														<React.Fragment key={index}>
															{index > 0 && <br />}{" "}
															{`${day} ${time[0]}-${time[1]}`}
														</React.Fragment>
													);
												})}
											</Typography>
										</td>
										<td className={classes}>
											<div className="mx-auto w-max">
												{statusOrder === "pending" ? (
													<FaSquare className="text-[#ff6f00]" />
												) : (
													statusOrder === "settlement" && (
														<FaSquareCheck className="text-[#1b5e20]" />
													)
												)}
											</div>
										</td>
									</tr>
								);
							})}
						</tbody>
					) : (
						<tbody>
							<tr>
								<td colSpan="5">
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
