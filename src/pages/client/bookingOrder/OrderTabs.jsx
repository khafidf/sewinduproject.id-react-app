import React, { useState } from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
	Typography,
	Button,
	Radio,
} from "@material-tailwind/react";
import Booking from "./Booking";
import { format } from "date-fns";
import Cookies from "js-cookie";
import { LoginModal } from "../../../components/LoginModal";
import { useNavigate } from "react-router-dom";
import { useCreateTransactionMutation } from "../../../redux/api/booking/bookingSlice";

export default function OrderTabs() {
	const user = Cookies.get("userId");
	const auth = Cookies.get("authToken");
	const navigate = useNavigate();

	const [showPopup, setShowPopup] = useState(false);
	const [bank, setBank] = useState("");
	const [vaNumber, setVaNumber] = useState("");

	const [tabs, setTabs] = useState([
		{
			index: 0,
			orders: [{ userId: user, packageId: "", day: "", time: ["", ""] }],
		},
	]);

	const [payment, setPayment] = useState({
		type: "bank_transfer",
		provider: "",
	});

	const handleShowPopup = (vaNumber, bank) => {
		setVaNumber(vaNumber);
		setBank(bank);
		setShowPopup(true);
	};

	const addTab = () => {
		const newTabIndex = tabs.length;
		const newTab = {
			index: newTabIndex,
			orders: [{ userId: "", packageId: "", day: "", time: ["", ""] }],
		};
		setTabs([...tabs, newTab]);
	};

	const removeTab = (indexToRemove) => {
		const updatedTabs = tabs.filter((tab) => tab.index !== indexToRemove);
		setTabs(updatedTabs);
	};

	const [createTransaction] = useCreateTransactionMutation();

	const handleFormSubmit = async (orders, payment) => {
		try {
			const response = await createTransaction({ orders, payment });
			return response.data;
		} catch (error) {
			console.log(error.message);
		}
	};

	const convertOrder = (order) => {
		const [{ userId, packageId, day, time }] = order;
		return {
			userId,
			packageId,
			date: {
				day: format(day, "yyyy-MM-dd"),
				time,
			},
		};
	};

	const handleSubmitAllOrders = async (e) => {
		e.preventDefault();

		const orders = [];
		tabs.forEach((tab) => {
			orders.push(convertOrder(tab.orders));
		});
		const response = await handleFormSubmit(orders, payment);
		if (response.data) {
			const { va_numbers } = response.data;

			const virtualAccounts = va_numbers.map(({ va_number }) => va_number);
			const bankAccounts = va_numbers.map(({ bank }) => bank);
			const [va_number] = virtualAccounts;
			const [bank] = bankAccounts;

			handleShowPopup(va_number, bank);
		}
	};

	return (
		<Tabs value={tabs[0].index} className="p-2 lg:min-h-[calc(100vh-52px)]">
			<Button onClick={() => navigate(-1)} size="sm">
				Homepage
			</Button>
			<div className="flex items-center gap-4 mb-4 justify-evenly">
				<Typography variant="h3">Login to Order</Typography>
				{!auth && <LoginModal />}
			</div>
			<TabsHeader className="max-w-[50vw] mx-auto">
				{tabs.map((tab) => (
					<Tab key={tab.index} value={tab.index}>
						{`Order ${tab.index + 1}`}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody>
				{tabs.map((tab) => (
					<TabPanel
						className="flex flex-col gap-4"
						key={tab.index}
						value={tab.index}
					>
						<Booking orders={tab.orders} />
						{tabs.length > 1 && (
							<div className="max-w-[50vw] mx-auto">
								<Button
									type="button"
									onClick={() => {
										removeTab(tab.index);
									}}
								>
									Remove Order
								</Button>
							</div>
						)}
					</TabPanel>
				))}
			</TabsBody>
			{showPopup && (
				<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
					<div className="p-12 bg-white">
						<Typography variant="h5" className="mb-4">
							Payment Details
						</Typography>
						<div className="mb-4">
							<Typography variant="paragraph">
								Bank: <span className="uppercase">{bank}</span>
							</Typography>
							<Typography variant="paragraph">VA Number: {vaNumber}</Typography>
						</div>
						<div className="flex justify-end">
							<Button
								size="sm"
								color="blue-gray"
								onClick={() => {
									setShowPopup(false);
									navigate("/booking");
								}}
							>
								Confirm
							</Button>
						</div>
					</div>
				</div>
			)}
			<div className="flex justify-center gap-4 mb-6">
				<Radio
					value="bca"
					checked={payment.provider === "bca"}
					onChange={() => setPayment({ ...payment, provider: "bca" })}
					label="BCA"
				/>
				<Radio
					value="permata"
					checked={payment.provider === "permata"}
					onChange={() => setPayment({ ...payment, provider: "permata" })}
					label="Permata"
				/>
				<Radio
					value="bni"
					checked={payment.provider === "bni"}
					onChange={() => setPayment({ ...payment, provider: "bni" })}
					label="BNI"
				/>
				<Radio
					value="bri"
					checked={payment.provider === "bri"}
					onChange={() => setPayment({ ...payment, provider: "bri" })}
					label="BRI"
				/>
			</div>
			<div className="flex justify-center gap-4">
				<Button type="button" onClick={addTab}>
					Add New Order
				</Button>
				<Button disabled={!auth} type="button" onClick={handleSubmitAllOrders}>
					Submit All Orders
				</Button>
			</div>
		</Tabs>
	);
}
