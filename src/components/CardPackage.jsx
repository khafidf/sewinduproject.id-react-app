import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";

export const CardPackage = () => {
	return (
		<Card className="w-full xl:max-w-[80rem] m-auto justify-center flex-row">
			<CardHeader
				shadow={false}
				floated={false}
				className="w-2/5 m-0 rounded-r-none shrink-0"
			>
				<img
					src="1.jpg"
					alt="card-image"
					className="object-cover w-full h-full"
				/>
			</CardHeader>
			<CardBody className="my-auto">
				<Typography variant="h6" color="gray" className="mb-4 uppercase">
					startups
				</Typography>
				<Typography variant="h5" color="blue-gray" className="mb-2">
					Lyft launching cross-platform service this week
				</Typography>
				<Typography color="gray" className="mb-8 font-normal">
					Like so many organizations these days, Autodesk is a company in
					transition. It was until recently a traditional boxed software company
					selling licenses. Yet its own business model disruption is only part
					of the story
				</Typography>
				<a href="#" className="inline-block">
					<Button variant="text" className="flex items-center gap-2">
						Learn More
					</Button>
				</a>
			</CardBody>
		</Card>
	);
};
