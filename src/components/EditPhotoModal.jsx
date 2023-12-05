import React, { useEffect, useState } from "react";
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
	Input,
	Select,
	Option,
} from "@material-tailwind/react";
import { FaPenToSquare } from "react-icons/fa6";
import { useEditPhotoMutation } from "../redux/api/gallery/galleryApiSlice";
import { AlertComponent } from "./Alert";

export const EditPhotoModal = ({ category, desc, id, refetchPhoto }) => {
	const [open, setOpen] = useState(false);
	const [photoData, setPhotoData] = useState({
		photo: null,
		category: "",
		desc: "",
	});
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	const [editPhoto] = useEditPhotoMutation();

	const handleInputChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "photo") {
			if (files.length > 0) {
				setPhotoData((prevState) => ({
					...prevState,
					[name]: files[0],
				}));
			}
		} else {
			setPhotoData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSelectChange = (value) => {
		setPhotoData((prevState) => ({
			...prevState,
			category: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		if (photoData.photo !== null) {
			formData.append("photo", photoData.photo);
		}
		formData.append("category", photoData.category);
		formData.append("desc", photoData.desc);

		try {
			const response = await editPhoto({ photoData: formData, id });
			setPhotoData({
				photo: null,
				category: "",
				desc: "",
			});

			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					refetchPhoto();
					setOpen((cur) => !cur);
				}, 1000);
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

	const handleOpenModal = () => {
		setOpen((cur) => !cur);
		setPhotoData({
			category: category,
			desc: desc,
		});
	};

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

	return (
		<>
			<FaPenToSquare
				className="cursor-pointer"
				onClick={handleOpenModal}
				size={14}
			/>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpenModal}
				className="bg-transparent shadow-none"
			>
				<AlertComponent
					open={alert.open}
					onClose={() => setAlert({ ...alert, open: false })}
					message={alert.message}
					type={alert.type}
				/>
				<Card className="mx-auto w-full py-4 rounded-none gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
					<form onSubmit={handleSubmit}>
						<CardBody className="flex flex-col gap-4">
							<Typography
								variant="h4"
								color="blue-gray"
								className="text-center"
							>
								Edit Photo
							</Typography>

							<Input
								variant="standard"
								label="Photo"
								size="lg"
								className="text-sm file:mr-5 file:py-1 file:px-3 file:border-none file:text-xs file:bg-gray-200 file:text-blue-gray-900 hover:file:cursor-pointer hover:file:bg-gray-900 hover:file:text-blue-gray-50"
								type="file"
								name="photo"
								accept="image/png, image/jpeg"
								onChange={handleInputChange}
							/>

							<Select
								label="Select Category"
								variant="standard"
								name="category"
								value={photoData.category}
								onChange={handleSelectChange}
							>
								<Option className="hover:rounded-none" value="couple">
									Couple
								</Option>
								<Option className="hover:rounded-none" value="wedding">
									Wedding
								</Option>
								<Option className="hover:rounded-none" value="tedak sinten">
									Tedak Sinten
								</Option>
								<Option className="hover:rounded-none" value="graduation">
									Graduation
								</Option>
								<Option className="hover:rounded-none" value="birthday">
									Birthday
								</Option>
							</Select>

							<Input
								variant="standard"
								label="Description"
								size="lg"
								className="rounded-none"
								type="text"
								name="desc"
								value={photoData.desc}
								onChange={handleInputChange}
							/>
						</CardBody>
						<CardFooter className="pt-0">
							<Button
								variant="gradient"
								type="submit"
								className="rounded-none"
								fullWidth
							>
								Edit Photo
							</Button>
						</CardFooter>
					</form>
				</Card>
			</Dialog>
		</>
	);
};
