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
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [photos, setPhotos] = useState([]);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	const openSidebar = useSelector(sidebarSelector);

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
		<div
			className={`absolute top-4 right-5 z-0 duration-300 shadow-lg p-4 shadow-secondary/40 bg-primary text-secondary h-[calc(100vh-9.2vh)] max-w-[calc(100vw-6.5rem)] ${
				openSidebar ? "w-[calc(100vw-24rem)]" : "w-full"
			}`}
		>
			<div className="flex justify-between pb-2">
				<div className="w-[50%]">
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

				<AddPhotoModal
					refetchPhoto={refetchPhoto}
					refetchCategory={refetchCategory}
				/>
			</div>
			<Card className="w-full h-[calc(100vh-19.3vh)] overflow-scroll">
				<table className="w-full text-center table-auto min-w-max">
					<thead className="sticky top-0 z-40">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 border-b border-secondary/10 bg-secondary"
								>
									<Typography
										variant="small"
										color="white"
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
											<div className="flex justify-center gap-2">
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
