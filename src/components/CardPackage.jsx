import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";

export const CardPackage = () => {
	return (
		<Card className="w-full max-w-[20rem] mx-auto rounded-none">
			<CardHeader
				shadow={false}
				floated={false}
				className="h-screen mx-auto max-h-[7rem] w-full max-w-[16.5rem] rounded-none"
			>
				<img
					src="https://images.unsplash.com/photo-1629367494173-c78a56567877?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=927&q=80"
					alt="card-image"
					className="object-cover w-full h-full"
				/>
			</CardHeader>
			<CardBody>
				<div className="flex items-center justify-between mb-2">
					<Typography color="blue-gray" className="font-medium">
						Nama Package
					</Typography>
					<Typography color="blue-gray" className="text-sm font-medium">
						Rp. 3.000.000,-
					</Typography>
				</div>
				<div className="min-w-[16rem] min-h-[4rem]">
					<Typography
						variant="small"
						color="gray"
						className="font-normal opacity-75"
					>
						With
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="flex gap-5 pt-0 pb-4">
				<Button
					size="sm"
					fullWidth={true}
					className="px-1 py-2 duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
				>
					<Link to={"/package/abcde"}>Details</Link>
				</Button>
				<Button
					size="sm"
					fullWidth={true}
					variant="text"
					className="rounded-none shadow-md"
				>
					Booking
				</Button>
			</CardFooter>
		</Card>
	);
};
