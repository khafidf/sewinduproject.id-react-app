import React, { useEffect, useState } from "react";
import { Select, Option, Typography } from "@material-tailwind/react";
import Loading from "../../../components/Loading";
import {
	useCategoryQuery,
	usePhotosQuery,
} from "../../../redux/api/gallery/galleryApiSlice";
import { useLocation } from "react-router-dom";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photos, setPhotos] = useState([]);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const { state } = useLocation();

	useEffect(() => {
		if (state) {
			setCategory(state.category);
		}
	}, [state]);

	const { data: dataCategory, isLoading: categoryLoading } = useCategoryQuery();
	const { data: dataPhoto, isLoading: photoLoading } = usePhotosQuery(category);

	useEffect(() => {
		if (dataPhoto?.data) {
			setPhotos(dataPhoto.data);
		}
	}, [category, dataPhoto?.data]);

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
				{!photoLoading ? (
					photos.length > 0 ? (
						<div className="flex pt-4 mx-auto">
							<div className=" mx-auto columns-1 md:columns-2 gap-5 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>div:not(:first-child)]:mt-5">
								{photos.slice(0, 14).map((item, index) => (
									<div
										className="relative flex w-[320px] sm:w-full group"
										key={index}
									>
										<img
											src={item.photoUrl}
											alt={item.photoName}
											loading="lazy"
										/>
										<Typography className="absolute w-[calc(100%-25%)] p-4 text-center text-sm text-primary transition-opacity translate-x-1/2 rounded-md opacity-0 group-hover:opacity-100 backdrop-blur-lg bg-secondary/30 right-1/2 bottom-1/2 translate-y-1/2">
											{item.desc}
										</Typography>
									</div>
								))}
							</div>
						</div>
					) : (
						<div className="flex items-center justify-center w-full h-screen max-h-[50vh]">
							No photos available.
						</div>
					)
				) : (
					<Loading />
				)}
			</div>
		</div>
	);
};
