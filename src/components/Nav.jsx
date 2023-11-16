import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LoginModal } from "./LoginModal";
import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import {
	selectCurrentToken,
	selectCurrentUser,
} from "../redux/api/auth/authSlice";

export const Nav = () => {
	const user = useSelector(selectCurrentUser);
	const token = useSelector(selectCurrentToken);

	console.log(user, token);

	const [openNav, setOpenNav] = useState(false);

	useEffect(() => {
		window.addEventListener(
			"resize",
			() => window.innerWidth >= 960 && setOpenNav(false)
		);
	}, []);

	const navList = (
		<ul className="flex flex-col gap-2 mt-2 mb-4 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 font-semibold gap-x-2"
			>
				<a href="/gallery" className="flex items-center">
					Gallery
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 font-semibold gap-x-2"
			>
				<a href="/package" className="flex items-center">
					Packages
				</a>
			</Typography>
			<Typography
				as="li"
				variant="small"
				color="blue-gray"
				className="flex items-center p-1 font-semibold gap-x-2"
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
				<div className="hidden lg:block">
					{navList}

					<div className="flex items-center gap-x-1">
						{token ? <p>{user}</p> : <LoginModal openNav={openNav} />}
					</div>
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

					{token ? <p>{user}</p> : <LoginModal openNav={openNav} />}
				</div>
			</Collapse>
		</Navbar>
	);
};
