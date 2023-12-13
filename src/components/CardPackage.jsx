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
		<Card className="w-full rounded-none max-w-[20rem] mx-auto">
			<CardHeader
				shadow={false}
				floated={false}
				className="h-screen rounded-none mx-auto max-h-[7rem] w-full max-w-[16.5rem]"
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
						color="blue-gray"
						className="font-normal opacity-75"
					>
						{desc}
					</Typography>
				</div>
			</CardBody>
			<CardFooter className="flex gap-5 pt-0 pb-4">
				<Button size="sm" variant="filled" color="gray" fullWidth>
					<Link to={`/package/${id}`}>Details</Link>
				</Button>
				<Button size="sm" variant="filled" color="blue-gray" fullWidth>
					Booking
				</Button>
			</CardFooter>
		</Card>
	);
};
