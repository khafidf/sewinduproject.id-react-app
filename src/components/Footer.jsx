import { Typography } from "@material-tailwind/react";
import React from "react";

export const Footer = () => {
	return (
		<footer className="items-center justify-center w-full py-2 text-center border-t gap-y-6 border-blue-gray-50">
			<Typography color="blue-gray" className="text-sm">
				&copy; 2023 Sewindu Project. All rights reserved.
			</Typography>
		</footer>
	);
};
