import React from "react";
import { Spinner } from "@material-tailwind/react";

export default function Loading() {
	return (
		<div className="flex w-full h-screen">
			<Spinner className="w-10 h-10 m-auto" />
		</div>
	);
}
