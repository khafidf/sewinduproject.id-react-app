import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
	FaBuffer,
	FaChevronDown,
	FaRegCalendarCheck,
	FaBox,
	FaPhotoFilm,
	FaCircleUser,
	FaPowerOff,
} from "react-icons/fa6";
import { useLogoutMutation } from "../redux/api/auth/authApiSlice";
import Cookies from "js-cookie";
import { useSelector, useDispatch } from "react-redux";
import { setOpenSidebar, sidebarSelector } from "../redux/slice/sidebarSlice";

export const Sidebar = () => {
	const [user, setUser] = useState("");
	const [open, setOpen] = useState(0);

	const openSidebar = useSelector(sidebarSelector);
	const dispatch = useDispatch();

	console.log(openSidebar);

	const navigate = useNavigate();

	const [logout] = useLogoutMutation();

	const openSidebarHandler = () => {
		dispatch(setOpenSidebar());
	};

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
		<Card
			className={`h-[calc(100vh-9.2vh)] duration-300 relative my-4 ml-5 max-w-[20rem] bg-primary text-secondary shadow-lg shadow-secondary/40 ${
				openSidebar ? "w-full p-4" : "w-11 p-0"
			}`}
		>
			<div className="flex justify-center p-4 mb-2">
				<Link to={"/admin"}>
					<img
						src="sewinduproject-logo.webp"
						className={`cursor-pointer duration-300 ${
							!openSidebar && "hidden"
						}`}
						alt="brand"
						width={120}
					/>
				</Link>
			</div>
			<List className={`duration-300 ${!openSidebar && "p-0"}`}>
				<Link
					className={`duration-300 ${!openSidebar && "w-11"}`}
					to={"/admin"}
				>
					<ListItem>
						<ListItemPrefix>
							<FaBorderAll size={20} />
						</ListItemPrefix>
						<Typography
							color="blue-gray"
							className={`mr-auto font-normal duration-300 ${
								!openSidebar && "hidden"
							}`}
						>
							Dashboard
						</Typography>
					</ListItem>
				</Link>
				<Accordion
					className={`duration-300 ${!openSidebar && "w-11"}`}
					open={open === 1}
					icon={
						openSidebar && (
							<FaChevronDown
								strokeWidth={2.5}
								size={16}
								className={`mx-auto duration-300 transition-transform ${
									open === 1 ? "rotate-180" : ""
								}`}
							/>
						)
					}
				>
					<ListItem className="p-0" selected={open === 1}>
						<AccordionHeader
							onClick={() => handleOpen(1)}
							className="p-3 border-b-0"
						>
							<ListItemPrefix>
								<FaBuffer size={20} className="text-secondary" />
							</ListItemPrefix>
							<Typography
								color="blue-gray"
								className={`mr-auto font-normal duration-300 ${
									!openSidebar && "hidden"
								}`}
							>
								Menu
							</Typography>
						</AccordionHeader>
					</ListItem>
					<hr
						className={`my-2 border-blue-primary ${`duration-300 ${
							!openSidebar && "w-11"
						}`} ${open !== 1 && "hidden"}`}
					/>
					<AccordionBody className={`${!openSidebar && "pl-0 py-0"}`}>
						<List className={`duration-300 ${!openSidebar && "p-0"}`}>
							<Link to={"/admin/gallery"}>
								<ListItem className={`duration-300 ${!openSidebar && "pl-4"}`}>
									<ListItemPrefix>
										<FaPhotoFilm strokeWidth={3} size={14} />
									</ListItemPrefix>
									<Typography
										color="blue-gray"
										className={`mr-auto font-normal duration-300 ${
											!openSidebar && "hidden"
										}`}
									>
										Gallery
									</Typography>
								</ListItem>
							</Link>
							<Link to={"/admin/package"}>
								<ListItem className={`${!openSidebar && "pl-4"}`}>
									<ListItemPrefix>
										<FaBox strokeWidth={3} size={14} />
									</ListItemPrefix>
									<Typography
										color="blue-gray"
										className={`mr-auto font-normal duration-300 ${
											!openSidebar && "hidden"
										}`}
									>
										Package
									</Typography>
								</ListItem>
							</Link>
							<Link to={"/admin/booking"}>
								<ListItem className={`${!openSidebar && "pl-4"}`}>
									<ListItemPrefix>
										<FaRegCalendarCheck strokeWidth={3} size={14} />
									</ListItemPrefix>
									<Typography
										color="blue-gray"
										className={`mr-auto font-normal duration-300 ${
											!openSidebar && "hidden"
										}`}
									>
										Booking
									</Typography>
								</ListItem>
							</Link>
						</List>
					</AccordionBody>
				</Accordion>
				<hr
					className={`my-2 border-blue-primary ${`duration-300 ${
						!openSidebar && "w-11"
					}`}`}
				/>
				<ListItem className={`duration-300 ${!openSidebar && "w-11"}`}>
					<ListItemPrefix>
						<FaCircleUser size={20} />
					</ListItemPrefix>
					<Typography
						color="blue-gray"
						className={`mr-auto font-normal duration-300 ${
							!openSidebar && "hidden"
						}`}
					>
						{user}
					</Typography>
				</ListItem>
				<ListItem
					onClick={handleLogout}
					className={`duration-300 ${!openSidebar && "w-11"}`}
				>
					<ListItemPrefix>
						<FaPowerOff size={20} />
					</ListItemPrefix>
					<Typography
						color="blue-gray"
						className={`mr-auto font-normal duration-300 ${
							!openSidebar && "hidden"
						}`}
					>
						Log Out
					</Typography>
				</ListItem>
			</List>
			<div className="absolute -translate-x-1/2 bottom-4 left-1/2">
				<FaChevronDown
					onClick={openSidebarHandler}
					size={16}
					className={`mx-auto transition-transform duration-300 cursor-pointer ${
						openSidebar ? "rotate-90" : "-rotate-90"
					}`}
				/>
			</div>
		</Card>
	);
};
