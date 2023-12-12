import React from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { Section } from "./calendar/Section";
import { Hero } from "./calendar/Hero";
import { Details } from "./calendar/Details";

export default function BookingPage() {
	const data = [
		{
			value: "calendar",
			label: "Calendar",
			element: (
				<>
					<Hero />
					<Section />
					<Details />
				</>
			),
		},
		{
			value: "history",
			label: "Order History",
			element: (
				<>
					<Hero />
				</>
			),
		},
	];
	return (
		<Tabs className="container mx-auto" value="calendar">
			<TabsHeader className="w-full mx-auto mt-4 sm:w-1/2 lg:w-1/4">
				{data.map(({ label, value }) => (
					<Tab key={value} value={value}>
						{label}
					</Tab>
				))}
			</TabsHeader>
			<TabsBody>
				{data.map(({ value, element }) => (
					<TabPanel key={value} value={value}>
						{element}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
		// <>
		// 	<Hero />
		// 	<Section />
		// 	<Details />
		// </>
	);
}
