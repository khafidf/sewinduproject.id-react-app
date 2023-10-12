import { useEffect, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export const Nav = () => {
	const [dropdown, setDropdown] = useState(false);

	function handler() {
		setDropdown(!dropdown);
	}

	useEffect(() => {
		const handleResize = () => {
			if (window.innerWidth >= 1024) {
				setDropdown(false);
			}
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	return (
		<div className="fixed top-0 bg-white w-full z-50 border-b-2 p-4 lg:px-8 lg:py-2">
			<div className="flex items-center justify-between w-full mx-auto lg:max-w-7xl">
				<div className="flex lg:flex-1">
					<a href="/">
						<img
							className="h-8 w-auto hover:scale-105 transition-all"
							src="sewinduproject-logo.png"
							alt="sewinduproject.id"
						/>
					</a>
				</div>
				<div
					className={
						!dropdown || window.innerWidth >= 1024
							? "hidden lg:flex"
							: "absolute top-0 left-0 flex flex-col bg-white justify-center text-center w-full h-screen lg:static lg:flex lg:flex-row lg:gap-x-12"
					}
				>
					<ul className="flex flex-col gap-2 lg:flex lg:flex-row lg:gap-x-12">
						<li className="cursor-pointer duration-300 text-xl m-2 p-2 w-1/3 mx-auto rounded lg:text-base lg:px-4 lg:py-1.5 hover:text-white hover:bg-black">
							<a href="/gallery">Gallery</a>
						</li>
						<li className="cursor-pointer duration-300 text-xl m-2 p-2 w-1/3 mx-auto rounded lg:text-base lg:px-4 lg:py-1.5 hover:text-white hover:bg-black">
							<a href="/package">Package</a>
						</li>
						<li className="cursor-pointer duration-300 text-xl m-2 p-2 w-1/3 mx-auto rounded lg:text-base lg:px-4 lg:py-1.5 hover:text-white hover:bg-black">
							<a href="/booking">Booking</a>
						</li>
					</ul>
				</div>
				<div
					className={
						!dropdown || window.innerWidth >= 1024
							? "hidden lg:flex lg:flex-1 lg:justify-end"
							: "absolute left-0 translate-y-[70vh] w-full bg-white mx-auto h-12 flex flex-col justify-center text-center lg:flex lg:flex-1 lg:justify-end"
					}
				>
					<button className=" bg-black text-white duration-100 shadow-md w-1/2 mx-auto p-2.5 rounded text-xl lg:text-sm lg:m-0 lg:w-1/6 lg:p-1.5 hover:text-black hover:bg-gray-100 hover:shadow-gray-400">
						Login
					</button>
				</div>
				<div className="z-10 cursor-pointer lg:hidden">
					{dropdown ? (
						<FaTimes onClick={handler} size={28} />
					) : (
						<FaBars onClick={handler} size={28} />
					)}
				</div>
			</div>
		</div>
	);
};
