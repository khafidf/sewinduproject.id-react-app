import { Button } from "@material-tailwind/react";
import React from "react";
import { FaTriangleExclamation } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function PageNotFound() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-secondary">
			<div className="w-full p-8 shadow-md bg-primary md:w-1/2 lg:w-1/3">
				<div className="flex flex-col items-center justify-center gap-4 mb-4">
					<FaTriangleExclamation className="text-secondary" size={32} />
					<h1 className="text-2xl font-bold text-secondary">
						Page Not Found 404
					</h1>
					<p className="text-secondary">
						The page you are looking for could not be found
					</p>
					<Button size="lg" color="blue-gray">
						<Link to={"/"}>Back to Home</Link>
					</Button>
				</div>
			</div>
		</div>
	);
}
