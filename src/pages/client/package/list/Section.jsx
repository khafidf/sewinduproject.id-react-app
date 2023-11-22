import React, { useEffect, useState } from "react";
import { Option, Select } from "@material-tailwind/react";
import {
	useCategoryQuery,
	usePackageQuery,
} from "../../../../redux/api/package/packageApiSlice";
import { CardPackage } from "../../../../components/CardPackage";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [packages, setPackages] = useState([]);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const { data: dataCategory, isLoading: categoryLoading } = useCategoryQuery();
	const { data: dataPackage, isLoading: packageLoading } =
		usePackageQuery(category);

	useEffect(() => {
		if (dataPackage?.data) {
			setPackages(dataPackage.data);
		}
	}, [dataPackage?.data]);

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	// MockData:
	// category: string;
	// desc: string;
	// photoUrl: string;
	// photoName: string;
	// price: string;

	return (
		<div className="w-full">
			<div className="container p-2 mx-auto">
				<div className="pb-4 border-b-2 border-gray-900">
					{!categoryLoading && (
						<Select
							label="Select Category"
							variant="standard"
							value={category}
							onChange={changeHandler}
						>
							{dataCategory?.data?.map((item, index) => {
								return (
									<Option
										className="hover:rounded-none"
										key={index}
										value={item.category}
									>
										{capitalize(item.category)}
									</Option>
								);
							})}
						</Select>
					)}
				</div>
				<div className="flex pt-4">
					<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
						<div className="w-full">
							<CardPackage />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
