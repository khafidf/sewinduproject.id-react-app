import React, { useEffect } from "react";
import { Card, Typography, CardBody, Chip } from "@material-tailwind/react";
import toRupiah from "@develoka/angka-rupiah-js";
import { useHistoryQuery } from "../../../../redux/api/booking/bookingSlice";
import { useDispatch } from "react-redux";
import { setRefetchHistory } from "../../../../redux/slice/bookingSlice";

export const Section = () => {
	const dispatch = useDispatch();

	const TABLE_HEAD = [
		"Package Name",
		"Date Booking",
		"Expire",
		"Bank",
		"Amount",
		"Status",
		"Action",
	];

	const {
		data: tableData,
		isLoading,
		refetch: refetchHistory,
	} = useHistoryQuery();

	useEffect(() => {
		dispatch(setRefetchHistory(refetchHistory));
	}, [dispatch, refetchHistory]);

	return (
		<Card className="w-full h-full">
			<CardBody className="px-0 overflow-scroll min-h-[calc(100vh-50vh)]">
				<table className="w-full text-left table-auto min-w-max">
					<thead>
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 border-y border-secondary/20 bg-secondary/5"
								>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none text-center opacity-70"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{!isLoading ? (
							tableData?.data.map(
								({
									_id,
									packageName,
									categoryName,
									created,
									bank,
									price,
									statusOrder,
									expire,
								}) => {
									const isLast =
										_id === tableData?.data[tableData?.data.length - 1]._id;
									const classes = isLast
										? "p-4"
										: "p-4 border-b p-4 border-blue-gray-50";

									return (
										<tr key={_id}>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal text-center"
												>
													{packageName.length === 2 ? (
														<>
															{packageName[0]} ({categoryName[0]}) <br />
															{packageName[1]} ({categoryName[1]})
														</>
													) : (
														<>
															{packageName[0]} ({categoryName[0]})
														</>
													)}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal text-center"
												>
													{created}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal text-center"
												>
													{expire}
												</Typography>
											</td>
											<td className={`${classes} flex justify-center`}>
												<img
													src={`${bank}.svg`}
													className="rounded"
													width={64}
													alt={bank}
												/>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal text-center"
												>
													{toRupiah(Number(price), {
														formal: false,
														dot: ",",
														floatingPoint: 0,
													})}
												</Typography>
											</td>
											<td className={classes}>
												<div className="mx-auto w-max">
													<Chip
														size="sm"
														className="rounded-none"
														variant="ghost"
														value={statusOrder}
														color={
															statusOrder === "settlement"
																? "green"
																: statusOrder === "pending"
																? "amber"
																: "red"
														}
													/>
												</div>
											</td>
											<td className={classes}>
												<div className="mx-auto w-max">
													<Chip
														size="sm"
														variant="ghost"
														className="rounded-none"
														value="It's Action"
														color={
															statusOrder === "settlement"
																? "green"
																: statusOrder === "pending"
																? "amber"
																: "red"
														}
													/>
												</div>
											</td>
										</tr>
									);
								}
							)
						) : (
							<Typography
								variant="h3"
								color="blue-gray"
								className="font-normal"
							>
								Data not Found
							</Typography>
						)}
					</tbody>
				</table>
			</CardBody>
		</Card>
	);
};
