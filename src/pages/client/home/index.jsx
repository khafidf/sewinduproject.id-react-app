import React from "react";
import { Gallery } from "./Gallery";
import { Package } from "./Package";
import { HowItWorks } from "./HowItWorks";
import { AboutUs } from "./AboutUs";

export default function HomePage() {
	return (
		<>
			<Gallery />
			<Package />
			<HowItWorks />
			<AboutUs />
		</>
	);
}
