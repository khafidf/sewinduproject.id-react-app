import { useEffect, useState } from "react";
import { FaBars, FaChevronDown, FaCircleUser, FaXmark } from "react-icons/fa6";
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
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";
import { useLogoutMutation } from "../redux/api/auth/authApiSlice";

export const Nav = () => {
	const [user, setUser] = useState("");
	const [token, setToken] = useState("");

	const [openNav, setOpenNav] = useState(false);
	const [isMenuOpen, setIsMenuOpen] = useState(false);

	const navigate = useNavigate();
	const [logout] = useLogoutMutation();

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	useEffect(() => {
		setUser(Cookies.get("user"));
		setToken(Cookies.get("authToken"));
	}, []);

	const handleLogout = async (e) => {
		e.preventDefault();

		try {
			await logout();
			setUser("");
			setToken("");
			navigate("/");
		} catch (error) {
			console.log(error);
		}
	};

	const navList = (
		<ul className="flex flex-col gap-2 my-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-medium gap-x-2"
			>
				<a href="/gallery" className="flex items-center">
					Gallery
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-medium gap-x-2"
			>
				<a href="/package" className="flex items-center">
					Packages
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 px-3 font-medium gap-x-2"
			>
				<a href="/booking" className="flex items-center">
					Booking
				</a>
			</Typography>
		</ul>
	);

	return (
		<Navbar className="sticky z-50 px-4 py-2 mx-auto rounded-none top-2 max-w-screen-2xl lg:px-8 lg:py-4">
			<div className="container flex items-center justify-between mx-auto text-blue-gray-900">
				<a href="/">
					<img
						className="w-auto h-8"
						width={98}
						height={32}
						src="sewinduproject-logo.webp"
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
										<MenuItem className="items-center hidden gap-2 font-medium rounded-none text-blue-gray-900 lg:flex">
											<FaCircleUser size={18} />
											<Typography
												variant="small"
												color="blue-gray"
												className="font-medium"
											>
												{user}
											</Typography>
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
											className="w-full duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
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
					{openNav ? (
						<FaXmark size={24} color="gray" />
					) : (
						<FaBars size={24} color="blue-gray" />
					)}
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
										<MenuItem className="flex items-center gap-2 font-medium rounded-none text-blue-gray-900 lg:hidden">
											<FaCircleUser size={18} />
											<Typography
												variant="small"
												color="blue-gray"
												className="font-semibold "
											>
												{user}
											</Typography>
											<FaChevronDown
												strokeWidth={2}
												className={`h-3 w-3 transition-transform ${
													isMenuOpen ? "rotate-180" : ""
												}`}
											/>
										</MenuItem>
									</Typography>
								</MenuHandler>
								<MenuList className="container flex overflow-visible lg:hidden">
									<ul className="w-full">
										<Button
											size="sm"
											type="button"
											onClick={handleLogout}
											className="w-full duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 max-w-7xl hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
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
