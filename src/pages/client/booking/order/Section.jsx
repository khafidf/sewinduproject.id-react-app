import React from "react";
import {
	Card,
	Typography,
	CardBody,
	Chip,
	Avatar,
} from "@material-tailwind/react";
// import { useBookingByUserQuery } from "../../../../redux/api/booking/bookingSlice";

export const Section = () => {
	const TABLE_HEAD = [
		"Package Name",
		"Date Booking",
		"Bank",
		"Amount",
		"Status",
		"Action",
	];

	const TABLE_ROWS = [
		{
			img: "https://docs.material-tailwind.com/img/logos/logo-spotify.svg",
			name: "Spotify",
			amount: "$2,500",
			date: "Wed 3:00pm",
			status: "paid",
			account: "visa",
			accountNumber: "1234",
			expiry: "06/2026",
		},
		{
			img: "https://docs.material-tailwind.com/img/logos/logo-amazon.svg",
			name: "Amazon",
			amount: "$5,000",
			date: "Wed 1:00pm",
			status: "paid",
			account: "master-card",
			accountNumber: "1234",
			expiry: "06/2026",
		},
		{
			img: "https://docs.material-tailwind.com/img/logos/logo-pinterest.svg",
			name: "Pinterest",
			amount: "$3,400",
			date: "Mon 7:40pm",
			status: "pending",
			account: "master-card",
			accountNumber: "1234",
			expiry: "06/2026",
		},
		{
			img: "https://docs.material-tailwind.com/img/logos/logo-google.svg",
			name: "Google",
			amount: "$1,000",
			date: "Wed 5:00pm",
			status: "paid",
			account: "visa",
			accountNumber: "1234",
			expiry: "06/2026",
		},
		{
			img: "https://docs.material-tailwind.com/img/logos/logo-netflix.svg",
			name: "netflix",
			amount: "$14,000",
			date: "Wed 3:30am",
			status: "cancelled",
			account: "visa",
			accountNumber: "1234",
			expiry: "06/2026",
		},
	];

	// const { data: tabelData, isLoading } = useBookingByUserQuery();

	// History = {
	// 	packageName,
	// 	Date Booking,
	// 	Bank,
	// 	Amount,
	// 	Status
	// }

	return (
		<Card className="w-full h-full">
			<CardBody className="px-0 overflow-scroll">
				<table className="w-full text-left table-auto min-w-max">
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 border-y border-blue-gray-100 bg-blue-gray-50/50"
								>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{TABLE_ROWS.map(
							(
								{
									img,
									name,
									amount,
									date,
									status,
									account,
									accountNumber,
									expiry,
								},
								index
							) => {
								const isLast = index === TABLE_ROWS.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";

								return (
									<tr key={name}>
										<td className={classes}>
											<div className="flex items-center gap-3">
												<Avatar
													src={img}
													alt={name}
													size="md"
													className="object-contain p-1 border border-blue-gray-50 bg-blue-gray-50/50"
												/>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-bold"
												>
													name
												</Typography>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{amount}
											</Typography>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{date}
											</Typography>
										</td>
										<td className={classes}>
											<div className="w-max">
												<Chip
													size="sm"
													variant="ghost"
													value={status}
													color={
														status === "paid"
															? "green"
															: status === "pending"
															? "amber"
															: "red"
													}
												/>
											</div>
										</td>
										<td className={classes}>
											<div className="flex items-center gap-3">
												<div className="w-12 p-1 border rounded-md h-9 border-blue-gray-50">
													<Avatar
														src={
															account === "visa"
																? "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/visa.png"
																: "https://demos.creative-tim.com/test/corporate-ui-dashboard/assets/img/logos/mastercard.png"
														}
														size="sm"
														alt={account}
														variant="square"
														className="object-contain w-full h-full p-1"
													/>
												</div>
												<div className="flex flex-col">
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal capitalize"
													>
														{account.split("-").join(" ")} {accountNumber}
													</Typography>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal opacity-70"
													>
														{expiry}
													</Typography>
												</div>
											</div>
										</td>
										<td className={classes}>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-normal"
											>
												{date}
											</Typography>
										</td>
									</tr>
								);
							}
						)}
					</tbody>
				</table>
			</CardBody>
		</Card>
	);
};
