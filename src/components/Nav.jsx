import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaTimes } from "react-icons/fa";
import { LoginModal } from "./LoginModal";
import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
	Menu,
	MenuHandler,
	MenuItem,
	MenuList,
	Button,
} from "@material-tailwind/react";
import { useDispatch, useSelector } from "react-redux";
import {
	logOut,
	selectCurrentToken,
	selectCurrentUser,
	setCredentials,
} from "../redux/api/auth/authSlice";

export const Nav = () => {
	const dispatch = useDispatch();
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	useEffect(() => {
		if (localStorage.getItem("auth")) {
			const { name, token } = JSON.parse(localStorage.getItem("auth"));
			dispatch(setCredentials({ name, token }));
		}
	}, [dispatch]);

	const handleLogout = () => {
		dispatch(logOut());
	};

	const [openNav, setOpenNav] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-semibold gap-x-2"
			>
				<a href="/gallery" className="flex items-center">
					Gallery
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-semibold gap-x-2"
			>
				<a href="/package" className="flex items-center">
					Packages
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-semibold gap-x-2"
			>
				<a href="/booking" className="flex items-center">
					Booking
				</a>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="sticky top-0 z-50 px-4 py-2 mx-auto max-w-screen-2xl lg:px-8 lg:py-4">
			<div className="container flex items-center justify-between mx-auto text-blue-gray-900">
				<a href="/">
					<img
						className="w-auto h-8"
						src="sewinduproject-logo.png"
						alt="sewinduproject.id"
					/>
				</a>
				<div className="hidden lg:block">{navList}</div>
				<div className="items-center hidden lg:block gap-x-1">
					{token ? (
						<>
							<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
								<MenuHandler>
									<Typography
										as="a"
										href="#"
										variant="small"
										className="font-normal"
									>
										<MenuItem className="items-center hidden gap-2 font-medium text-blue-gray-900 lg:flex lg:rounded-full">
											{user}
											<FaChevronDown
												strokeWidth={2}
												className={`h-3 w-3 transition-transform ${
													isMenuOpen ? "rotate-180" : ""
												}`}
											/>
										</MenuItem>
									</Typography>
								</MenuHandler>
								<MenuList className="hidden w-[2rem] overflow-visible lg:flex">
									<ul className="w-full">
										<Button
											size="sm"
											type="button"
											onClick={handleLogout}
											className="w-full text-white duration-100 bg-black rounded-full shadow-md hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-100"
										>
											<span className="lg:px-4">Log Out</span>
										</Button>
									</ul>
								</MenuList>
							</Menu>
						</>
					) : (
						<LoginModal openNav={openNav} />
					)}
				</div>
				<IconButton
					variant="text"
					className="w-6 h-6 ml-auto text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
					ripple={false}
					onClick={() => setOpenNav(!openNav)}
				>
					{openNav ? <FaTimes size={24} /> : <FaBars size={24} />}
				</IconButton>
			</div>
			<Collapse open={openNav}>
				<div className="container mx-auto my-4">
					{navList}

					{token ? (
						<>
							<Menu allowHover open={isMenuOpen} handler={setIsMenuOpen}>
								<MenuHandler>
									<Typography variant="small" className="font-normal">
										<MenuItem className="flex items-center gap-2 font-medium rounded-full text-blue-gray-900 lg:hidden">
											{user}
											<FaChevronDown
												strokeWidth={2}
												className={`h-3 w-3 transition-transform ${
													isMenuOpen ? "rotate-180" : ""
												}`}
											/>
										</MenuItem>
									</Typography>
								</MenuHandler>
								<MenuList className="flex w-full overflow-visible lg:hidden">
									<ul className="w-full">
										<Button
											size="sm"
											type="button"
											onClick={handleLogout}
											className="w-full text-white duration-100 bg-black rounded-full shadow-md hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-100"
										>
											<span className="lg:px-4">Log Out</span>
										</Button>
									</ul>
								</MenuList>
							</Menu>
						</>
					) : (
						<LoginModal openNav={openNav} />
					)}
				</div>
			</Collapse>
		</Navbar>
	);
};
