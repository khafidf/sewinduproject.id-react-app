import React from "react";
import {
	Card,
	CardHeader,
	CardBody,
	Typography,
	Button,
} from "@material-tailwind/react";

export const CardHome = () => {
	return (
		<Card className="max-w-xs mx-auto overflow-hidden">
			<CardHeader
				floated={false}
				shadow={false}
				color="transparent"
				className="m-0 rounded-none"
			>
				<img className="object-cover rounded-t-md" src="1.jpg" alt="Tes" />
			</CardHeader>
			<CardBody>
				<Typography
					className="text-sm font-bold sm:text-base"
					color="blue-gray"
				>
					Package Name
				</Typography>
				<Typography
					variant="lead"
					color="gray"
					className="text-xs font-light sm:text-base"
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos dolore
					ipsa nostrum nesciunt! Vitae, ipsa. Laboriosam, recusandae asperiores
					explicabo numquam iste officia fugiat laborum quae tempora,
					dignissimos soluta ipsa?
				</Typography>
			</CardBody>
			<Button className="py-2 mx-2 mb-2 text-white bg-black rounded-full sm:font-medium hover:shadow-gray-400 hover:text-black hover:bg-gray-100">
				Check
			</Button>
		</Card>
	);
};
