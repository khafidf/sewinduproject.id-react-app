import { Typography } from "@material-tailwind/react";
import React from "react";

export const Footer = () => {
	return (
		<footer className="items-center justify-center w-full py-4 text-center bg-secondary text-primary gap-y-6 ">
			<Typography className="text-sm ">
				&copy; 2023 Sewindu Project. All rights reserved.
			</Typography>
		</footer>
	);
};
