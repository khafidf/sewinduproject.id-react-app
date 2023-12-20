import React from "react";
import {
	Tabs,
	TabsHeader,
	TabsBody,
	Tab,
	TabPanel,
} from "@material-tailwind/react";
import { Section as SectionCalendar } from "./calendar/Section";
import { Section as SectionOrder } from "./order/Section";
import { Hero as HeroCalendar } from "./calendar/Hero";
import { Hero as HeroOrder } from "./order/Hero";
import { Details } from "./calendar/Details";
import { useSelector } from "react-redux";

import Cookies from "js-cookie";
import {
	selectRefetchCalendar,
	selectRefetchHistory,
} from "../../../redux/slice/bookingSlice";
import BookingNow from "./calendar/BookingNow";

export default function BookingPage() {
	const refetchCalendar = useSelector(selectRefetchCalendar);
	const refetchHistory = useSelector(selectRefetchHistory);

	const user = Cookies.get("user");
	const data = [
		{
			value: "calendar",
			label: "Calendar",
			element: (
				<>
					<HeroCalendar />
					<SectionCalendar />
					<Details />
					<BookingNow />
				</>
			),
		},
		{
			value: "history",
			label: "Order History",
			element: (
				<>
					<HeroOrder />
					<SectionOrder />
				</>
			),
		},
	];

	const tabsContent = user ? (
		data.map(({ label, value }) => (
			<Tab
				key={value}
				value={value}
				onClick={() => {
					if (value === "calendar") {
						refetchCalendar();
					}
					if (value === "history") {
						refetchHistory();
					}
				}}
			>
				{label}
			</Tab>
		))
	) : (
		<Tab
			key={data[0].value}
			value={data[0].value}
			onClick={() => {
				refetchCalendar();
			}}
		>
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
