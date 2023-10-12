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
		<div className="flex w-full p-4 h-[480px] xl:h-[640px] max-h-[640px]">
			<div className="flex w-full flex-col sm:flex-row overflow-hidden mt-8 mb-auto sm:max-w-lg lg:max-w-3xl xl:max-w-7xl sm:m-auto gap-6">
				<div className="flex flex-col p-2 items-center w-full my-auto">
					<h2 className="text-2xl font-bold lg:text-3xl">Booking</h2>
					<p className="text-md lg:text-lg">Save your date </p>
				</div>
				<div className="relative w-full left-0 -top-2 h-[240px]">
					<div className="grid absolute w-[400px] h-[280px] grid-cols-4 p-2 gap-2">
						{date.map((item, index) => {
							return (
								<div
									className={`flex border-black items-center rounded-sm border justify-center  ${
										typeof item == "string" && "bg-black text-white"
									} ${item == 30 && "bg-slate-200 text-slate-400"} ${
										(item == 2) | (item == 7) && "bg-green-600 text-white"
									} ${item == 16 && "bg-red-600 text-white"}`}
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
