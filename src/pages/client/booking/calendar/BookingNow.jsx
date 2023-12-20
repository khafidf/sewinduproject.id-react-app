import React from "react";
import { Button } from "@material-tailwind/react";
import { Link } from "react-router-dom";

export default function BookingNow() {
	return (
		<div className="flex justify-center items-center min-h-[20vh]">
			<div>
				<Button color="blue-gray" size="lg">
					<Link to={"../booking-order"}>Booking Now!</Link>
				</Button>
			</div>
		</div>
	);
}
