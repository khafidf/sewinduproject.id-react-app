import React, { useEffect, useState } from "react";
import {
	Typography,
	Card,
	Avatar,
	Select,
	Option,
} from "@material-tailwind/react";
import {
	useCategoryQuery,
	useDeletePhotoMutation,
	usePhotosQuery,
} from "../../../redux/api/gallery/galleryApiSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import Loading from "../../../components/Loading";
import { AddPhotoModal } from "../../../components/AddPhotoModal";
import { EditPhotoModal } from "../../../components/EditPhotoModal";
import { AlertComponent } from "../../../components/Alert";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photos, setPhotos] = useState([]);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	const [deletePhoto] = useDeletePhotoMutation();
	const {
		data: dataCategory,
		isLoading: categoryLoading,
		refetch: refetchCategory,
	} = useCategoryQuery();
	const {
		data: dataPhoto,
		isLoading: photoLoading,
		refetch: refetchPhoto,
	} = usePhotosQuery(category);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const handleDelete = async (id) => {
		try {
			const response = await deletePhoto(id);
			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					refetchPhoto();
					refetchCategory();
				}, 100);
			} else {
				setAlert({
					open: true,
					message: Object.values(response.error.data).join(", "),
					type: "error",
				});
			}
		} catch (error) {
			setAlert({
				open: true,
				message: "An error occurred during registration.",
				type: "error",
			});
		}
	};

	useEffect(() => {
		if (dataPhoto?.data) {
			setPhotos(dataPhoto.data);
		}
	}, [category, dataPhoto?.data]);

	useEffect(() => {
		let timer;
		if (alert.open) {
			timer = setTimeout(() => {
				setAlert({
					open: false,
					message: "",
					type: "",
				});
			}, 2000);
		}
		return () => clearTimeout(timer);
	}, [alert.open]);

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	const TABLE_HEAD = ["No.", "Photo", "Category", "Description", "Action"];

	return (
		<div>
			<div className="flex justify-between">
				<div className="pb-4 mx-2 w-[50%]">
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

				<AddPhotoModal
					refetchPhoto={refetchPhoto}
					refetchCategory={refetchCategory}
				/>
			</div>
			<Card className="w-full h-[calc(100vh-19.3vh)] overflow-scroll rounded-none">
				<table className="w-full text-left table-auto min-w-max">
					<thead className="sticky top-0 z-40">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 border-b border-blue-gray-100 bg-blue-gray-50"
								>
									<Typography
										variant="small"
										color="blue-gray"
										className="font-normal leading-none opacity-70"
									>
										{head}
									</Typography>
								</th>
							))}
						</tr>
					</thead>
					<AlertComponent
						open={alert.open}
						onClose={() => setAlert({ ...alert, open: false })}
						message={alert.message}
						type={alert.type}
						bigger={true}
					/>
					{!photoLoading ? (
						<tbody>
							{photos.map(({ photoUrl, category, desc, _id }, index) => {
								const isLast = index === photos.length - 1;
								const classes = isLast
									? "p-4"
									: "p-4 border-b border-blue-gray-50";
								if (index < 15) {
									return (
										<tr key={index}>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{index + 1}
												</Typography>
											</td>
											<td className={classes}>
												<Avatar
													src={photoUrl}
													size="xl"
													alt="avatar"
													variant="square"
												/>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{capitalize(category)}
												</Typography>
											</td>
											<td className={classes}>
												<Typography
													variant="small"
													color="blue-gray"
													className="font-normal"
												>
													{desc}
												</Typography>
											</td>
											<td className={classes}>
												<div className="flex gap-2">
													<EditPhotoModal
														category={category}
														desc={desc}
														id={_id}
														refetchPhoto={refetchPhoto}
													/>
													<FaRegTrashCan
														onClick={() => {
															handleDelete(_id);
														}}
														className="cursor-pointer"
														size={14}
													/>
												</div>
											</td>
										</tr>
									);
								}
							})}
						</tbody>
					) : (
						<tbody>
							<tr>
								<td colSpan="5">
									<Loading />
								</td>
							</tr>
						</tbody>
					)}
				</table>
			</Card>
		</div>
	);
};
