import React from "react";
import { Hero } from "./Hero";
import { Package } from "./Package";
import { HowItWorks } from "./HowItWorks";
import { AboutUs } from "./AboutUs";

export default function HomePage() {
	return (
		<>
			<Hero />
			<Package />
			<HowItWorks />
			<AboutUs />
		</>
	);
}
