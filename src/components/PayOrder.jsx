import React, { useEffect, useState } from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Typography,
} from "@material-tailwind/react";
import { FaWallet } from "react-icons/fa6";
import { useGetOrderQuery } from "../redux/api/booking/bookingSlice";
import Loading from "./Loading";

export function PayOrder({ orderId }) {
	const [open, setOpen] = useState(false);

	const handleOpen = () => setOpen(!open);

	const [vaNumber, setVaNumber] = useState("");
	const [bank, setBank] = useState("");

	const { data: orderData, isLoading, refetch } = useGetOrderQuery(orderId);

	useEffect(() => {
		if (open && orderId) {
			refetch();
		}
	}, [open, orderId, refetch]);

	useEffect(() => {
		if (!isLoading) {
			// eslint-disable-next-line no-unsafe-optional-chaining
			const { va_numbers } = orderData?.data;

			const virtualAccounts = va_numbers.map(({ va_number }) => va_number);
			const bankAccounts = va_numbers.map(({ bank }) => bank);
			const [va_number] = virtualAccounts;
			const [bank] = bankAccounts;

			setBank(bank);
			setVaNumber(va_number);
		}
	}, [isLoading, orderData?.data]);

	return (
		<>
			<FaWallet
				className="text-[#ff6f00] cursor-pointer"
				size={16}
				onClick={handleOpen}
			/>
			{!isLoading ? (
				<Dialog open={open} size="xs" className="p-8" handler={handleOpen}>
					<DialogHeader>
						<Typography variant="h5" className="mb-4">
							Payment Details
						</Typography>
					</DialogHeader>
					<DialogBody>
						<Typography variant="paragraph" color="blue-gray">
							Bank: <span className="uppercase">{bank}</span>
						</Typography>
						<Typography variant="paragraph" color="blue-gray">
							VA Number: {vaNumber}
						</Typography>
					</DialogBody>
					<DialogFooter>
						<Button
							size="md"
							color="blue-gray"
							onClick={handleOpen}
							className="mr-1"
						>
							Close
						</Button>
					</DialogFooter>
				</Dialog>
			) : (
				<Loading />
			)}
		</>
	);
}
