import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";

export const CardPackage = ({ name, price, id, photoUrl, desc }) => {
	return (
		<Card className="w-full max-w-[20rem] mx-auto rounded-none">
			<CardHeader
				shadow={false}
				floated={false}
				className="h-screen mx-auto max-h-[7rem] w-full max-w-[16.5rem] rounded-none"
			>
				<img
					src={photoUrl}
					alt="card-image"
					className="object-cover w-full h-full"
				/>
			</CardHeader>
			<CardBody>
				<div className="flex items-center justify-between mb-2">
					<Typography color="blue-gray" className="font-medium">
						{name}
					</Typography>
					<Typography color="blue-gray" className="text-sm font-medium">
						{toRupiah(Number(price), {
							formal: false,
							dot: ",",
							floatingPoint: 0,
						})}
					</Typography>
				</div>
				<div className="min-w-[16rem] min-h-[4rem]">
					<Typography
						variant="small"
						color="gray"
						className="font-normal opacity-75"
					>
						{desc}
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="flex gap-5 pt-0 pb-4">
				<Button
					size="sm"
					fullWidth={true}
					className="px-1 py-2 duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
				>
					<Link to={`/package/${id}`}>Details</Link>
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
