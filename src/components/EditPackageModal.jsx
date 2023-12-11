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
import { useEditPackageMutation } from "../redux/api/package/packageApiSlice";
import { AlertComponent } from "./Alert";

export const EditPackageModal = ({
	category,
	name,
	desc,
	id,
	price,
	hour,
	refetchPackage,
}) => {
	const [open, setOpen] = useState(false);
	const [packageData, setPackageData] = useState({
		photo: null,
		category: "",
		desc: "",
		price: "",
		hour: "",
	});
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	const [editPackage] = useEditPackageMutation();

	const handleInputChange = (e) => {
		const { name, value, files } = e.target;

		if (name === "photo") {
			if (files.length > 0) {
				setPackageData((prevState) => ({
					...prevState,
					[name]: files[0],
				}));
			}
		} else {
			setPackageData((prevState) => ({
				...prevState,
				[name]: value,
			}));
		}
	};

	const handleSelectChange = (value) => {
		setPackageData((prevState) => ({
			...prevState,
			category: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();

		const formData = new FormData();
		if (packageData.photo !== null) {
			formData.append("photo", packageData.photo);
		}
		formData.append("name", packageData.name);
		formData.append("category", packageData.category);
		formData.append("desc", packageData.desc);
		formData.append("price", packageData.price);
		formData.append("hour", packageData.hour);

		try {
			const response = await editPackage({ packageData: formData, id });
			setPackageData({
				photo: null,
				name: "",
				category: "",
				desc: "",
				price: "",
				hour: "",
			});

			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					refetchPackage();
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
		setPackageData({
			name: name,
			category: category,
			desc: desc,
			price: price,
			hour: hour,
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
				<Card className="mx-auto w-full py-4 gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
					<form onSubmit={handleSubmit}>
						<CardBody className="flex flex-col gap-4">
							<Typography
								variant="h4"
								color="blue-gray"
								className="text-center"
							>
								Edit Package
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

							<Input
								variant="standard"
								label="Package Name"
								size="lg"
								type="text"
								name="name"
								value={packageData.name}
								onChange={handleInputChange}
							/>

							<Select
								label="Select Category"
								variant="standard"
								name="category"
								value={packageData.category}
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
								type="text"
								name="desc"
								value={packageData.desc}
								onChange={handleInputChange}
							/>

							<Input
								variant="standard"
								label="Price"
								size="lg"
								type="text"
								name="price"
								value={packageData.price}
								onChange={handleInputChange}
							/>

							<Input
								variant="standard"
								label="Hour"
								size="lg"
								type="text"
								name="hour"
								value={packageData.hour}
								onChange={handleInputChange}
							/>
						</CardBody>
						<CardFooter className="pt-0">
							<Button variant="gradient" type="submit" fullWidth>
								Edit Package
							</Button>
						</CardFooter>
					</form>
				</Card>
			</Dialog>
		</>
	);
};
