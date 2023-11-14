import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { LoginModal } from "./LoginModal";
import {
	Navbar,
	Typography,
	IconButton,
	Collapse,
} from "@material-tailwind/react";

export const Nav = () => {
	// const [dropdown, setDropdown] = useState(false);

	// function handler() {
	// 	setDropdown(!dropdown);
	// }

	// useEffect(() => {
	// 	const handleResize = () => {
	// 		if (window.innerWidth >= 1024) {
	// 			setDropdown(false);
	// 		}
	// 	};

	// 	window.addEventListener("resize", handleResize);

	// 	return () => {
	// 		window.removeEventListener("resize", handleResize);
	// 	};
	// }, []);

	// return (
	// 	<div className="fixed top-0 z-50 w-full p-4 bg-white border-b-2 lg:px-8 lg:py-2">
	// 		<div className="flex items-center justify-between w-full mx-auto lg:max-w-7xl">
	// 			<div className="flex lg:flex-1">
	// 				<a href="/">
	// 					<img
	// 						className="w-auto h-8"
	// 						src="sewinduproject-logo.png"
	// 						alt="sewinduproject.id"
	// 					/>
	// 				</a>
	// 			</div>
	// 			<div
	// 				className={
	// 					!dropdown || window.innerWidth >= 1024
	// 						? "hidden lg:flex"
	// 						: "absolute top-0 left-0 flex flex-col bg-white justify-center text-center w-full h-screen lg:static lg:flex lg:flex-row lg:gap-x-12"
	// 				}
	// 			>
	// 				<ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-x-12">
	// 					<li className="cursor-pointer duration-300 text-lg m-2 p-2 w-1/3 mx-auto rounded lg:text-sm lg:px-4 lg:py-1.5 hover:text-gray-600">
	// 						<a href="/gallery" className="font-semibold">
	// 							Gallery
	// 						</a>
	// 					</li>
	// 					<li className="cursor-pointer duration-300 text-lg m-2 p-2 w-1/3 mx-auto rounded lg:text-sm lg:px-4 lg:py-1.5 hover:text-gray-600">
	// 						<a href="/package" className="font-semibold">
	// 							Package
	// 						</a>
	// 					</li>
	// 					<li className="cursor-pointer duration-300 text-lg m-2 p-2 w-1/3 mx-auto rounded lg:text-sm lg:px-4 lg:py-1.5 hover:text-gray-600">
	// 						<a href="/booking" className="font-semibold">
	// 							Booking
	// 						</a>
	// 					</li>
	// 				</ul>
	// 			</div>
	// 			<div
	// 				className={
	// 					!dropdown || window.innerWidth >= 1024
	// 						? "hidden lg:flex lg:flex-1 lg:justify-end"
	// 						: "absolute left-0 translate-y-[70vh] w-full bg-white mx-auto h-12 flex flex-col justify-center text-center lg:flex lg:flex-1 lg:justify-end"
	// 				}
	// 			>
	// 				<LoginModal />
	// 			</div>
	// 			<div className="z-10 cursor-pointer lg:hidden">
	// 				{dropdown ? (
	// 					<FaTimes onClick={handler} size={28} />
	// 				) : (
	// 					<FaBars onClick={handler} size={28} />
	// 				)}
	// 			</div>
	// 		</div>
	// 	</div>
	// );
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
				<div className="hidden lg:block">{navList}</div>
				<div className="flex items-center gap-x-1">
					<LoginModal />
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

					<LoginModal openNav={openNav} />
				</div>
			</Collapse>
		</Navbar>
	);
};
