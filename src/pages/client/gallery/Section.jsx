import React, { useEffect, useState } from "react";
import { getPhotoByCategory } from "../../../api/services";

export const Section = () => {
	const [category, setCategory] = useState("couple");
	const [photo, setPhotos] = useState([]);

	const getPhoto = async (category) => {
		const response = await getPhotoByCategory(category);
		setPhotos(response.data.dataPhoto);
	};

	useEffect(() => {
		getPhoto(category);
	}, [category]);

	return (
		<div className="flex flex-col gap-6 p-4 w-full h-fit md:h-[calc(100vh-106px)] mt-[66px] mx-auto lg:max-w-7xl">
			<div className="flex flex-col gap-2">
				<div className="py-2 border-b-2 border-black">
					<select
						className="border border-gray-300 text-gray-900 text-sm rounded-md focus:ring-blue-500 focus:border-blue-500 block w-full p-2"
						name="category"
						id="category"
						value={category || ""}
						onChange={(e) => {
							setCategory(e.target.value);
						}}
					>
						<option defaultValue={true} value="couple">
							Couple
						</option>
						<option value="wedding">Wedding</option>
					</select>
				</div>
				<div className="grid mx-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
					{photo.map((item, index) => {
						return (
							<div key={index}>
								<img
									width={300}
									height={300}
									src={item.photoUrl}
									alt={item.photoName}
								/>
								<p>{item.desc}</p>
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
