import React, { useEffect, useState } from "react";
import { Select, Option } from "@material-tailwind/react";
import Loading from "../../../components/Loading";
import { usePhotoQuery } from "../../../redux/api/gallery/galleryApiSlice";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photos, setPhotos] = useState([]);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const { data: dataPhoto, isLoading } = usePhotoQuery(category);

	useEffect(() => {
		if (dataPhoto?.data) {
			setPhotos(dataPhoto.data);
		}
	}, [category, dataPhoto?.data]);

	const uniqueCategories = [...new Set(photos.map((item) => item.category))];

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	return (
		<div className="flex flex-col w-full gap-6 p-4 mx-auto xl:max-w-7xl">
			<div className="flex flex-col gap-4">
				<div className="py-2 border-b-2 border-gray-900">
					<Select
						label="Select Category"
						variant="outlined"
						value={category}
						onChange={changeHandler}
					>
						{uniqueCategories.map((categories, index) => {
							return (
								<Option key={index} value={categories}>
									{capitalize(categories)}
								</Option>
							);
						})}
					</Select>
				</div>
				{!isLoading ? (
					<div className="flex py-2 mx-auto md:py-4">
						<div className="columns-1 md:columns-2 gap-5 lg:columns-3 2xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-5">
							{photos.map((item, index) => {
								if (index < 14) {
									return (
										<div className="relative flex w-[296px] group" key={index}>
											<img
												className="rounded-md shadow-md shadow-gray-400"
												src={item.photoUrl}
												alt={item.photoName}
												loading="lazy"
											/>
											<p className="absolute w-[calc(100%-25%)] p-4 text-center text-sm text-gray-100 transition-opacity translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 backdrop-blur-lg bg-white/30 right-1/2 bottom-1/2 translate-y-1/2">
												{item.desc}
											</p>
										</div>
									);
								}
							})}
						</div>
					</div>
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};
