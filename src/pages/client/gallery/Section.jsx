import React, { useEffect, useState } from "react";
import { getPhotoByCategory } from "../../../api/services";
import { Select, Option, Spinner } from "@material-tailwind/react";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photo, setPhotos] = useState([]);

	const getPhoto = async (category) => {
		const response = await getPhotoByCategory(category);
		setPhotos(response.data.dataPhoto);
	};

	const changeHandler = (value) => {
		setCategory(value);
	};

	useEffect(() => {
		if (category !== "") {
			getPhoto(category);
		}
	}, [category]);

	console.log(photo);

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
						<Option value="wedding">Wedding</Option>
						<Option value="couple">Couple</Option>
					</Select>
				</div>
				{category !== "" ? (
					<div className="flex py-2 mx-auto md:py-4">
						<div className="columns-1 sm:columns-2 gap-5 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-5">
							{photo.map((item, index) => {
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
							})}
						</div>
					</div>
				) : (
					<div className="w-full h-[calc(100vh-13.5rem)] flex">
						<Spinner className="w-10 h-10 m-auto" />
					</div>
				)}
			</div>
		</div>
	);
};
