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
import Cookies from "js-cookie";

export default function BookingPage() {
	const user = Cookies.get("user");
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

	const tabsContent = user ? (
		data.map(({ label, value }) => (
			<Tab key={value} value={value}>
				{label}
			</Tab>
		))
	) : (
		<Tab key={data[0].value} value={data[0].value}>
			{data[0].label}
		</Tab>
	);

	return (
		<Tabs className="container mx-auto" value="calendar">
			<TabsHeader className="w-full mx-auto mt-4 sm:w-1/2 lg:w-1/4">
				{tabsContent}
			</TabsHeader>
			<TabsBody>
				{data.map(({ value, element }) => (
					<TabPanel key={value} value={value}>
						{element}
					</TabPanel>
				))}
			</TabsBody>
		</Tabs>
	);
}
