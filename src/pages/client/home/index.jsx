import React from "react";
import { Hero } from "./Hero";
import { Package } from "./Package";
import { HowItWorks } from "./HowItWorks";
import { AboutUs } from "./AboutUs";
import { Gallery } from "./Gallery";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Package />
			<Gallery />
			<HowItWorks />
			<AboutUs />
		</>
	);
}
