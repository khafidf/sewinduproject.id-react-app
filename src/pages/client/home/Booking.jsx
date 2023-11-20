import React from "react";
import { FaCameraRetro } from "react-icons/fa6";

export const Booking = () => {
	// const date = [
	// 	"Sa",
	// 	"Su",
	// 	"Mo",
	// 	"Tu",
	// 	30,
	// 	1,
	// 	2,
	// 	3,
	// 	4,
	// 	7,
	// 	8,
	// 	9,
	// 	10,
	// 	14,
	// 	15,
	// 	16,
	// ];
	return (
		<div className="w-full px-2 py-4">
			<div className="container py-4 mx-auto sm:px-2">
				<div>
					<div className="flex items-center justify-center gap-2">
						<FaCameraRetro size={32} />
						<h2 className="text-lg font-bold md:text-xl lg:text-2xl">
							How it work
						</h2>
					</div>
					<div className="flex flex-col">
						<div className="flex flex-col items-center md:mx-auto md:flex-row">
							<img
								src="./book.png"
								className="w-[300px] md:w-[360px] lg:w-[460px]"
								alt="Booking"
							/>
							<div className="flex flex-col gap-4 p-4 xl:w-[460px] bg-gray-300 rounded-t-lg lg:p-8 md:rounded-none md:rounded-l-lg">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Book
								</h3>
								<p className="opacity-75">
									Tell us when, where, and what for - we&apos;ll hook you up
									with the right photographer.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row-reverse">
							<img
								src="./plan.png"
								className="w-[300px] md:w-[360px] lg:w-[460px]"
								alt="Planning"
							/>
							<div className="flex flex-col gap-4 p-4 xl:w-[460px] bg-gray-300 rounded-t-lg lg:p-8 md:rounded-none md:rounded-r-lg">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Plan
								</h3>
								<p className="opacity-75">
									Your photographer is set to chat and plan the shoot with you
									using our WhatsApp contact.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row">
							<img
								src="shot.png"
								className="w-[300px] md:w-[360px] lg:w-[460px]"
								alt="Photoshoot"
							/>
							<div className="flex flex-col gap-4 p-4 xl:w-[460px] bg-gray-300 rounded-t-lg lg:p-8 md:rounded-none md:rounded-l-lg">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Shoot
								</h3>
								<p className="opacity-75">
									Your photographer is equipped with top gear, arriving
									punctually to capture your moments and make it a fantastic
									time.
								</p>
							</div>
						</div>
						<div className="flex flex-col items-center md:mx-auto md:flex-row-reverse">
							<img
								src="file.png"
								className="w-[300px] md:w-[360px] lg:w-[460px]"
								alt="Delivery file"
							/>
							<div className="flex flex-col gap-4 p-4 xl:w-[460px] bg-gray-300 rounded-t-lg lg:p-8 md:rounded-none md:rounded-r-lg">
								<h3 className="text-base font-bold md:text-lg lg:text-xl">
									Delivery
								</h3>
								<p className="opacity-75">
									You&apos;ll get your photos in 48 hours or less after your
									session, ready for direct download to your devices.
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

{
	/* <div className="flex w-full py-4 px-2 h-[480px] xl:h-[528px] max-h-[624px]">
			<div className="flex flex-col w-full gap-6 mt-8 mb-auto overflow-hidden sm:flex-row sm:max-w-lg lg:max-w-3xl xl:max-w-7xl sm:m-auto">
				<div className="flex flex-col items-center w-full p-2 my-auto">
					<h3 className="text-2xl font-bold lg:text-3xl">Booking</h3>
					<p className="text-md lg:text-lg">Save your date </p>
				</div>
				<div className="relative w-full left-0 -top-2 h-[240px]">
					<div className="grid absolute w-[400px] h-[280px] grid-cols-4 p-2 gap-1">
						{date.map((item, index) => {
							return (
								<div
									className={`flex border-gray-400 items-center rounded-md border justify-center  ${
										typeof item == "string" && "bg-black text-white"
									} ${item == 30 && "bg-slate-200 text-slate-400"} ${
										(item == 2) | (item == 7) && " bg-green-500 text-white"
									} ${item == 16 && "bg-red-500 text-white"}`}
									key={index}
								>
									{item}
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</div> */
}
