import React from "react";
import { Gallery } from "./Gallery";
import { Package } from "./Package";
import { Booking } from "./Booking";

export const HomePage = () => {
	return (
		<>
			<Gallery />
			<Package />
			<Booking />
		</>
	);
};
