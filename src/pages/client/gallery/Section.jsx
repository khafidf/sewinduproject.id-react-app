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
		<div className="w-full">
			<div className="container p-2 mx-auto">
				<div className="pb-4 border-b-2 border-gray-900">
					<Select
						label="Select Category"
						variant="standard"
						value={category}
						onChange={changeHandler}
					>
						{uniqueCategories.map((categories, index) => {
							return (
								<Option
									className="hover:rounded-none"
									key={index}
									value={categories}
								>
									{capitalize(categories)}
								</Option>
							);
						})}
					</Select>
				</div>
				{!isLoading ? (
					<div className="flex pt-4 mx-auto">
						<div className=" mx-auto columns-1 md:columns-2 gap-5 lg:columns-3 2xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-5">
							{photos.map((item, index) => {
								if (index < 14) {
									return (
										<div className="relative flex w-[296px] group" key={index}>
											<img
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
