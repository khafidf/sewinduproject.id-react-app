import React from "react";
import { Alert } from "@material-tailwind/react";

export const AlertComponent = ({ open, onClose, message, type, bigger }) => {
	const alertColor = type === "success" ? "green" : "red";
	return (
		<Alert
			open={open}
			onClose={onClose}
			animate={{ mount: { y: 0 }, unmount: { y: 100 } }}
			color={alertColor}
			className={`absolute z-50 ${
				bigger ? "m-auto w-1/4 left-0 top-3 right-0" : "-top-32"
			} `}
		>
			{message}
		</Alert>
	);
};
