import React, { useEffect, useState } from "react";
import { Option, Select } from "@material-tailwind/react";
import {
	useCategoryQuery,
	usePackageQuery,
} from "../../../../redux/api/package/packageApiSlice";
import { CardPackage } from "../../../../components/CardPackage";
import Loading from "../../../../components/Loading";

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

	return (
		<div className="w-full">
			<div className="container p-2 mx-auto">
				<div className="pb-4 border-b-2 border-secondary">
					{!categoryLoading && (
						<Select
							label="Select Category"
							variant="outlined"
							color="blue-gray"
							className="rounded-none"
							value={category}
							onChange={changeHandler}
						>
							{dataCategory?.data?.map((item, index) => {
								return (
									<Option key={index} value={item.category}>
										{capitalize(item.category)}
									</Option>
								);
							})}
						</Select>
					)}
				</div>
				{!packageLoading ? (
					packages.length > 0 ? (
						<div className="flex min-h-[50vh] pt-4">
							<div className="grid w-full grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
								{packages.map((item, index) => {
									return (
										<div className="w-full" key={index}>
											<CardPackage
												name={item.name}
												price={item.price}
												id={item._id}
												photoUrl={item.photoUrl}
												desc={item.desc}
											/>
										</div>
									);
								})}
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-screen max-h-[50vh]">
							No packages available.
						</div>
					)
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};
