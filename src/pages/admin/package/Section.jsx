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
	useDeletePackageMutation,
	usePackageQuery,
} from "../../../redux/api/package/packageApiSlice";
import { FaRegTrashCan } from "react-icons/fa6";
import Loading from "../../../components/Loading";
import { EditPackageModal } from "../../../components/EditPackageModal";
import { AlertComponent } from "../../../components/Alert";
import { AddPackageModal } from "../../../components/AddPackageModal";
import toRupiah from "@develoka/angka-rupiah-js";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";

export const Section = () => {
	const [category, setCategory] = useState("");
	const [packages, setPackages] = useState([]);
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	const openSidebar = useSelector(sidebarSelector);

	const [deletePackage] = useDeletePackageMutation();
	const {
		data: dataCategory,
		isLoading: categoryLoading,
		refetch: refetchCategory,
	} = useCategoryQuery();
	const {
		data: dataPackage,
		isLoading: packageLoading,
		refetch: refetchPackage,
	} = usePackageQuery(category);

	const changeHandler = (value) => {
		setCategory(value);
	};

	const handleDelete = async (id) => {
		try {
			const response = await deletePackage(id);
			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					refetchPackage();
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
		if (dataPackage?.data) {
			setPackages(dataPackage.data);
		}
	}, [category, dataPackage?.data]);

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

	const TABLE_HEAD = [
		"No.",
		"Photo",
		"Name",
		"Category",
		"Description",
		"Price",
		"Hour",
		"Action",
	];

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

				<AddPackageModal
					refetchPackage={refetchPackage}
					refetchCategory={refetchCategory}
				/>
			</div>
			<Card className="w-full h-[calc(100vh-19.3vh)] overflow-scroll">
				<table className="w-full table-auto min-w-max">
					<thead className="sticky top-0 z-40">
						<tr>
							{TABLE_HEAD.map((head) => (
								<th
									key={head}
									className="p-4 mx-auto text-center border-b border-secondary/10 bg-secondary"
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
					{!packageLoading ? (
						<tbody>
							{packages.map(
								(
									{ photoUrl, category, name, desc, price, hour, _id },
									index
								) => {
									const isLast = index === packages.length - 1;
									const classes = isLast
										? "p-4"
										: "p-4 border-b border-blue-primary";
									if (index < 15) {
										return (
											<tr key={index}>
												<td className={`${classes} text-center`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{index + 1}
													</Typography>
												</td>
												<td className={`${classes} text-center`}>
													<Avatar
														src={photoUrl}
														size="xl"
														alt="avatar"
														variant="square"
													/>
												</td>
												<td className={`${classes} text-center`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{name}
													</Typography>
												</td>
												<td className={`${classes} text-center`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{capitalize(category)}
													</Typography>
												</td>
												<td className={`${classes} w-[286px]`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{desc}
													</Typography>
												</td>
												<td className={`${classes} text-center`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{toRupiah(Number(price), {
															formal: false,
															dot: ",",
															floatingPoint: 0,
														})}
													</Typography>
												</td>
												<td className={`${classes} text-center`}>
													<Typography
														variant="small"
														color="blue-gray"
														className="font-normal"
													>
														{hour}
													</Typography>
												</td>
												<td className={`${classes}`}>
													<div className="flex justify-center gap-2">
														<EditPackageModal
															name={name}
															category={category}
															desc={desc}
															id={_id}
															price={price}
															hour={hour}
															refetchPackage={refetchPackage}
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
								}
							)}
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
