import React, { useEffect, useState } from "react";
import { Button, Typography } from "@material-tailwind/react";
import { useParams } from "react-router-dom";
import toRupiah from "@develoka/angka-rupiah-js";
import { usePackageDetailsQuery } from "../../../../redux/api/package/packageApiSlice";

export const Section = () => {
	const { id } = useParams();
	const [packages, setPackages] = useState({
		photoUrl: "",
		category: "",
		name: "",
		desc: "",
		price: "",
	});

	const { data: packageDetails, isLoading } = usePackageDetailsQuery(id);

	useEffect(() => {
		if (packageDetails?.data && !isLoading) {
			setPackages({
				photoUrl: packageDetails.data.photoUrl,
				category: packageDetails.data.category,
				name: packageDetails.data.name,
				desc: packageDetails.data.desc,
				price: packageDetails.data.price,
			});
		}
	}, [packageDetails?.data, isLoading]);

	return (
		<div className="w-full flex justify-center items-center min-h-[calc(100vh-7rem)]">
			<div className="container p-2">
				<div className="flex flex-wrap mx-auto lg:w-4/5">
					<img
						alt="Package photo"
						className="object-cover object-center w-full border border-secondary rounded-none max-h-[578px] lg:w-1/2"
						src={packages.photoUrl}
					/>
					<div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
						<Typography
							color="blue-gray"
							className="text-sm tracking-widest opacity-80 title-font"
						>
							{packages.category}
						</Typography>
						<Typography
							color="blue-gray"
							className="mb-1 text-3xl font-medium title-font"
						>
							{packages.name}
						</Typography>
						<Typography color="blue-gray" className="leading-relaxed">
							{packages.desc}
						</Typography>
						<div className="flex items-center pb-5 mt-3 mb-5 border-b-2 border-secondary" />
						<div className="flex justify-between">
							<Typography
								color="blue-gray"
								className="text-2xl font-medium title-font"
							>
								{toRupiah(Number(packages.price), {
									formal: false,
									dot: ",",
									floatingPoint: 0,
								})}
							</Typography>
							<Button size="md" variant="filled" color="blue-gray">
								Booking
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
