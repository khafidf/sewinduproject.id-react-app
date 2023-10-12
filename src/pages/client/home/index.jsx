import React from "react";
import { Nav } from "../../../components/Nav";
import { Footer } from "../../../components/Footer";
import { Gallery } from "./Gallery";
import { Package } from "./Package";
import { Booking } from "./Booking";

export const HomePage = () => {
	return (
		<div>
			<Nav />
			<Gallery />
			<Package />
			<Booking />
			<Footer />
		</div>
	);
};
