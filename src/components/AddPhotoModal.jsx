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
import { FaPlus } from "react-icons/fa6";
import { useAddPhotoMutation } from "../redux/api/gallery/galleryApiSlice";
import { AlertComponent } from "./Alert";

export const AddPhotoModal = ({ refetchPhoto, refetchCategory }) => {
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

	const [addPhoto] = useAddPhotoMutation();

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
		formData.append("photo", photoData.photo);
		formData.append("category", photoData.category);
		formData.append("desc", photoData.desc);

		try {
			const response = await addPhoto(formData);
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
					refetchCategory();
					setOpen((cur) => !cur);
				}, 500);
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
			photo: null,
			category: "",
			desc: "",
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
			<div className="flex items-center justify-center">
				<Button
					size="sm"
					variant="filled"
					color="blue-gray"
					onClick={handleOpenModal}
					className="flex gap-2"
				>
					<FaPlus size={14} /> Add photo
				</Button>
			</div>
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
				<Card className="mx-auto w-full py-4  gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
					<form onSubmit={handleSubmit}>
						<CardBody className="flex flex-col gap-4">
							<Typography
								variant="h4"
								color="blue-gray"
								className="text-center"
							>
								Add Photo
							</Typography>

							<Input
								variant="standard"
								label="Photo"
								size="lg"
								color="blue-gray"
								className="text-sm file:mr-5 file:py-1 file:px-3 file:border-none file:text-xs file:bg-secondary/20 file:text-secondary hover:file:cursor-pointer hover:file:bg-secondary hover:file:text-primary"
								type="file"
								name="photo"
								accept="image/png, image/jpeg"
								onChange={handleInputChange}
							/>

							<Select
								label="Select Category"
								variant="standard"
								color="blue-gray"
								name="category"
								value={photoData.category}
								onChange={handleSelectChange}
							>
								<Option value="couple">Couple</Option>
								<Option value="wedding">Wedding</Option>
								<Option value="tedak sinten">Tedak Sinten</Option>
								<Option value="graduation">Graduation</Option>
								<Option value="birthday">Birthday</Option>
							</Select>

							<Input
								variant="standard"
								label="Description"
								size="lg"
								color="blue-gray"
								type="text"
								name="desc"
								value={photoData.desc}
								onChange={handleInputChange}
							/>
						</CardBody>
						<CardFooter className="pt-0">
							<Button
								variant="filled"
								color="blue-gray"
								type="submit"
								fullWidth
							>
								Post Photo
							</Button>
						</CardFooter>
					</form>
				</Card>
			</Dialog>
		</>
	);
};
