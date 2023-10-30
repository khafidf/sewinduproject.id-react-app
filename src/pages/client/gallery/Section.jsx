import React, { useEffect, useState } from "react";
import { getPhotoByCategory } from "../../../api/services";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photo, setPhotos] = useState([]);

	const getPhoto = async (category) => {
		const response = await getPhotoByCategory(category);
		setPhotos(response.data.dataPhoto);
	};

	console.log(category);

	useEffect(() => {
		if (category !== "") {
			getPhoto(category);
		}
	}, [category]);

	return (
		<div className="flex flex-col gap-6 p-4 w-full min-h-[calc(100vh-106px)] mt-[66px] mx-auto lg:max-w-7xl">
			<div className="flex flex-col gap-2">
				<div className="py-2 border-b-2 border-black">
					<select
						className="border border-gray-300 text-gray-900 text-sm rounded-md block focus:border-gray-400 w-full p-2"
						name="category"
						id="category"
						value={category || ""}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option defaultValue={true} value="">
							Select Category
						</option>
						<option value="wedding">Wedding</option>
						<option value="couple">Couple</option>
					</select>
				</div>
				{category !== "" ? (
					<div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
						{photo.map((item, index) => {
							return (
								<div className="group flex relative" key={index}>
									<img
										className="rounded-md shadow-md shadow-gray-400"
										width={300}
										height={300}
										src={item.photoUrl}
										alt={item.photoName}
										loading="lazy"
									/>
									<p className="group-hover:opacity-100 backdrop-blur-lg transition-opacity bg-white/30 p-4 text-sm text-gray-100 rounded-md absolute right-1/2 translate-x-1/2 bottom-1/2 translate-y-2/3 opacity-0 m-4 mx-auto">
										{item.desc}
									</p>
								</div>
							);
						})}
					</div>
				) : (
					<div className="w-full h-[calc(100vh-30vh)] flex">
						<h2 className="m-auto">Photo not Found</h2>
					</div>
				)}
			</div>
		</div>
	);
};
