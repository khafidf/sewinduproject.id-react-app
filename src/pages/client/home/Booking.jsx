import React from "react";

export const Booking = () => {
	const date = [
		"Sa",
		"Su",
		"Mo",
		"Tu",
		30,
		1,
		2,
		3,
		4,
		7,
		8,
		9,
		10,
		14,
		15,
		16,
	];
	return (
		<div className="flex w-full py-4 px-2 h-[480px] xl:h-[528px] max-h-[624px]">
			<div className="flex flex-col w-full gap-6 mt-8 mb-auto overflow-hidden sm:flex-row sm:max-w-lg lg:max-w-3xl xl:max-w-7xl sm:m-auto">
				<div className="flex flex-col items-center w-full p-2 my-auto">
					<h2 className="text-2xl font-bold lg:text-3xl">Booking</h2>
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
		</div>
	);
};
