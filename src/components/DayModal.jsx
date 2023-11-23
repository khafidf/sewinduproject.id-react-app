import React from "react";
import { format } from "date-fns";
import { Typography } from "@material-tailwind/react";

export const DayModal = ({ date, closeModal }) => {
	return (
		<div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-50">
			<div className="p-4 bg-white rounded-md">
				<Typography className="mb-2 text-lg font-bold">
					Details for {format(date, "MMMM d, yyyy")}
				</Typography>
				<button
					className="px-4 py-2 text-white bg-blue-500 rounded-md"
					onClick={closeModal}
				>
					Close
				</button>
			</div>
		</div>
	);
};
