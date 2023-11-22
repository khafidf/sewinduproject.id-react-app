import React from "react";
import { Button, Typography } from "@material-tailwind/react";

export const Section = () => {
	// MockData:
	// category: string;
	// desc: string;
	// photoUrl: string;
	// photoName: string;
	// price: string;

	return (
		<div className="w-full">
			<div className="container p-2 mx-auto mt-2 md:py-[11rem] lg:py-[5.6rem]">
				<div className="flex flex-col gap-4 p-8 shadow-lg md:flex-row lg:justify-evenly">
					<div>
						<img
							src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
							alt="Airpods"
							className="w-full mx-auto max-w-[20rem] h-[24rem] md:h-[36rem] max-h-[36rem] object-cover"
						/>
					</div>
					<div className="w-full md:flex md:flex-col md:justify-between mx-auto lg:mx-0 max-w-[20rem]">
						<div>
							<Typography className="text-sm opacity-50">Category</Typography>
							<div className="flex items-center justify-between mb-2">
								<Typography color="blue-gray" className="text-lg font-semibold">
									Nama Package
								</Typography>
								<Typography color="blue-gray" className="text-sm font-medium">
									Rp. 3.000.000,-
								</Typography>
							</div>
							<Typography
								color="blue-gray"
								className="text-base h-screen max-h-[18rem]"
							>
								Desc
							</Typography>
						</div>
						<Button
							size="sm"
							fullWidth={true}
							className="px-1 py-2 duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
						>
							Booking
						</Button>
					</div>
				</div>
			</div>
		</div>
	);
};
