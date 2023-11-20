import { Typography } from "@material-tailwind/react";
import React from "react";

export const Footer = () => {
	return (
		<footer className="items-center justify-center w-full py-4 text-center bg-gray-300 border-t text-blue-gray-900 gap-y-6 border-blue-gray-100">
			<Typography className="text-sm ">
				&copy; 2023 Sewindu Project. All rights reserved.
			</Typography>
		</footer>
	);
};
