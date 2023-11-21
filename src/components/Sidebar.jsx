import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import {
	Card,
	Typography,
	List,
	ListItem,
	ListItemPrefix,
	Accordion,
	AccordionHeader,
	AccordionBody,
} from "@material-tailwind/react";
import {
	FaBorderAll,
	FaChevronDown,
	FaCircle,
	FaCircleUser,
	FaPowerOff,
} from "react-icons/fa6";
import { useLogoutMutation } from "../redux/api/auth/authApiSlice";
import Cookies from "js-cookie";

export const Sidebar = () => {
	const [user, setUser] = useState("");
	const [open, setOpen] = useState(0);

	const navigate = useNavigate();

	const [logout] = useLogoutMutation();

	const handleOpen = (value) => {
		setOpen(open === value ? 0 : value);
	};

	useEffect(() => {
		setUser(Cookies.get("user"));
	}, []);

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			await logout();
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<Card className="h-[calc(100vh-9.2vh)] rounded-none my-4 ml-5 w-full max-w-[20rem] bg-gray-50 z-10 text-blue-gray-900 p-4 shadow-lg shadow-blue-gray-900/40">
			<div className="flex justify-center p-4 mb-2">
				<img
					src="./sewinduproject-logo.png"
					className="cursor-pointer"
					alt="brand"
					width={120}
				/>
			</div>
			<List>
				<Accordion
					open={open === 1}
					icon={
						<FaChevronDown
							strokeWidth={2.5}
							className={`mx-auto h-4 w-4 transition-transform ${
								open === 1 ? "rotate-180" : ""
							}`}
						/>
					}
				>
					<ListItem className="p-0 rounded-none" selected={open === 1}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className="p-3 border-b-0"
						>
							<ListItemPrefix>
								<FaBorderAll className="w-5 h-5" />
							</ListItemPrefix>
							<Typography color="blue-gray" className="mr-auto font-normal">
								Dashboard
							</Typography>
						</AccordionHeader>
					</ListItem>
					<AccordionBody>
						<List>
							<ListItem className="rounded-none">
								<ListItemPrefix>
									<FaCircle strokeWidth={3} className="w-5 h-2.5" />
								</ListItemPrefix>
								Gallery
							</ListItem>
							<ListItem className="rounded-none">
								<ListItemPrefix>
									<FaCircle strokeWidth={3} className="w-5 h-2.5" />
								</ListItemPrefix>
								Package
							</ListItem>
							<ListItem className="rounded-none">
								<ListItemPrefix>
									<FaCircle strokeWidth={3} className="w-5 h-2.5" />
								</ListItemPrefix>
								Booking
							</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
				<hr className="my-2 border-blue-gray-50" />
				<ListItem className="rounded-none">
					<ListItemPrefix>
						<FaCircleUser className="w-5 h-5" />
					</ListItemPrefix>
					{user}
				</ListItem>
				<ListItem className="rounded-none" onClick={handleLogout}>
					<ListItemPrefix>
						<FaPowerOff className="w-5 h-5" />
					</ListItemPrefix>
					Log Out
				</ListItem>
			</List>
		</Card>
	);
};
