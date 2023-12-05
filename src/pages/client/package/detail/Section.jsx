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
						className="object-cover object-center w-full border border-gray-200 rounded max-h-[578px] lg:w-1/2"
						src={packages.photoUrl}
					/>
					<div className="w-full mt-6 lg:w-1/2 lg:pl-10 lg:py-6 lg:mt-0">
						<Typography className="text-sm tracking-widest text-gray-500 title-font">
							{packages.category}
						</Typography>
						<Typography className="mb-1 text-3xl font-medium text-gray-900 title-font">
							{packages.name}
						</Typography>
						<Typography className="leading-relaxed">{packages.desc}</Typography>
						<div className="flex items-center pb-5 mt-3 mb-5 border-b-2 border-gray-200" />
						<div className="flex justify-between">
							<Typography className="text-2xl font-medium text-gray-900 title-font">
								{toRupiah(Number(packages.price), {
									formal: false,
									dot: ",",
									floatingPoint: 0,
								})}
							</Typography>
							<Button
								size="sm"
								className="px-4 py-2 duration-100 bg-gray-900 rounded-none shadow-md text-blue-gray-50 hover:shadow-gray-400 hover:text-blue-gray-900 hover:bg-gray-50"
							>
								Booking
							</Button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
