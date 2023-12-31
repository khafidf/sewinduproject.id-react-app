import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
	Input,
} from "@material-tailwind/react";

import {
	useLoginMutation,
	useRegisterMutation,
} from "../redux/api/auth/authApiSlice.js";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { AlertComponent } from "./Alert.jsx";

export const LoginModal = ({ openNav }) => {
	// Login
	const [loginData, setLoginData] = useState({
		identifier: "",
		password: "",
	});

	const [login] = useLoginMutation();

	const navigate = useNavigate();

	const handleLoginInput = (e) => {
		const { name, value } = e.target;
		setLoginData({
			...loginData,
			[name]: value,
		});
	};
	const handleLogin = async (e) => {
		e.preventDefault();

		try {
			const response = await login(loginData);

			setLoginData({
				identifier: "",
				password: "",
			});

			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					setOpenLogin((cur) => !cur);
					if (response?.data?.roles === "1") {
						navigate("/admin");
					} else {
						navigate(0);
					}
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

	// Register
	const [registerData, setRegisterData] = useState({
		name: "",
		email: "",
		phoneNumber: "",
		password: "",
		confirmPassword: "",
	});

	const handleRegisterInput = (e) => {
		const { name, value } = e.target;
		setRegisterData({
			...registerData,
			[name]: value,
		});
	};

	const [register] = useRegisterMutation();

	const handleRegister = async (e) => {
		e.preventDefault();

		try {
			const response = await register(registerData);

			setRegisterData({
				name: "",
				email: "",
				phoneNumber: "",
				password: "",
				confirmPassword: "",
			});

			if (response.data) {
				setAlert({
					open: true,
					message: response.data.message,
					type: "success",
				});
				setTimeout(() => {
					setAction("login");
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

	const [openLogin, setOpenLogin] = useState(false);
	const [show, setShow] = useState(false);
	const [showConfirm, setShowConfirm] = useState(false);
	const [action, setAction] = useState("login");
	const [alert, setAlert] = useState({
		open: false,
		message: "",
		type: "",
	});

	useEffect(() => {
		let timer;
		if (alert.open) {
			timer = setTimeout(() => {
				setAlert({
					open: false,
					message: "",
					type: "",
				});
			}, 2500);
		}
		return () => clearTimeout(timer);
	}, [alert.open]);

	const handleOpenModal = () => {
		setOpenLogin((cur) => !cur);
		setAction("login");
	};
	const handleToRegister = () => setAction("register");
	const handleToLogin = () => setAction("login");
	const handleShow = () => setShow((cur) => !cur);
	const handleShowConfirm = () => setShowConfirm((cur) => !cur);

	return (
		<>
			<Button
				size="sm"
				variant="filled"
				color="blue-gray"
				onClick={handleOpenModal}
				className={`${openNav ? `w-full py-2.5` : `hidden lg:inline-block`} `}
			>
				<span className="lg:px-4">Log In</span>
			</Button>
			{action === "login" ? (
				<Dialog size="xs" open={openLogin} handler={handleOpenModal}>
					<AlertComponent
						open={alert.open}
						onClose={() => setAlert({ ...alert, open: false })}
						message={alert.message}
						type={alert.type}
					/>
					<Card className="mx-auto w-full py-4 gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
						<form onSubmit={handleLogin}>
							<CardBody className="flex flex-col gap-4">
								<Typography
									variant="h4"
									color="blue-gray"
									className="text-center"
								>
									Login
									<Typography
										className="font-normal text-center"
										variant="paragraph"
										color="gray"
									>
										Login to booking.
									</Typography>
								</Typography>

								<Input
									variant="standard"
									color="blue-gray"
									label="Email or Phone Number"
									size="lg"
									type="text"
									name="identifier"
									value={loginData.identifier}
									onChange={handleLoginInput}
									required
								/>
								<Input
									variant="standard"
									color="blue-gray"
									label="Password"
									size="lg"
									type={show ? `text` : `password`}
									name="password"
									value={loginData.password}
									onChange={handleLoginInput}
									icon={
										show ? (
											<FaRegEyeSlash
												className="cursor-pointer"
												onClick={handleShow}
											/>
										) : (
											<FaRegEye
												className="cursor-pointer"
												onClick={handleShow}
											/>
										)
									}
									required
								/>
							</CardBody>
							<CardFooter>
								<Button
									size="sm"
									variant="filled"
									color="blue-gray"
									type="submit"
									fullWidth
								>
									Log in
								</Button>
								<Typography
									variant="small"
									color="gray"
									className="flex justify-center mt-4"
								>
									Don&apos;t have an account?
									<Typography
										as="a"
										variant="small"
										color="blue-gray"
										className="ml-1 font-bold cursor-pointer"
										onClick={handleToRegister}
									>
										Register
									</Typography>
								</Typography>
							</CardFooter>
						</form>
					</Card>
				</Dialog>
			) : (
				<Dialog size="xs" open={openLogin} handler={handleOpenModal}>
					<AlertComponent
						open={alert.open}
						onClose={() => setAlert({ ...alert, open: false })}
						message={alert.message}
						type={alert.type}
					/>
					<Card className="mx-auto w-full py-4 gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
						<CardBody className="flex flex-col gap-4 pb-0">
							<Typography
								variant="h4"
								className="text-center"
								color="blue-gray"
							>
								Register
								<Typography
									className="font-normal text-center"
									variant="paragraph"
									color="gray"
								>
									Make account to booking.
								</Typography>
							</Typography>
							<Input
								variant="standard"
								color="blue-gray"
								label="Name"
								size="md"
								value={registerData.name}
								name="name"
								onChange={handleRegisterInput}
								required
							/>
							<Input
								variant="standard"
								color="blue-gray"
								label="Email"
								size="md"
								value={registerData.email}
								name="email"
								onChange={handleRegisterInput}
								required
							/>
							<Input
								variant="standard"
								color="blue-gray"
								label="Phone Number"
								size="md"
								value={registerData.phoneNumber}
								name="phoneNumber"
								onChange={handleRegisterInput}
								required
							/>
							<Input
								variant="standard"
								color="blue-gray"
								label="Password"
								size="md"
								value={registerData.password}
								name="password"
								onChange={handleRegisterInput}
								type={show ? `text` : `password`}
								icon={
									show ? (
										<FaRegEyeSlash
											className="cursor-pointer"
											onClick={handleShow}
										/>
									) : (
										<FaRegEye className="cursor-pointer" onClick={handleShow} />
									)
								}
								required
							/>
							<Input
								variant="standard"
								color="blue-gray"
								label="Confirm Password"
								size="md"
								value={registerData.confirmPassword}
								name="confirmPassword"
								onChange={handleRegisterInput}
								type={showConfirm ? `text` : `password`}
								icon={
									showConfirm ? (
										<FaRegEyeSlash
											className="cursor-pointer"
											onClick={handleShowConfirm}
										/>
									) : (
										<FaRegEye
											className="cursor-pointer"
											onClick={handleShowConfirm}
										/>
									)
								}
								required
							/>
						</CardBody>
						<CardFooter>
							<Button
								size="sm"
								variant="filled"
								color="blue-gray"
								type="submit"
								fullWidth
								onClick={handleRegister}
								disabled={
									!(registerData.password === registerData.confirmPassword)
								}
							>
								Register
							</Button>
							<Typography
								variant="small"
								color="gray"
								className="flex justify-center mt-4"
							>
								Already have an account?
								<Typography
									as="a"
									variant="small"
									color="blue-gray"
									className="ml-1 font-bold cursor-pointer"
									onClick={handleToLogin}
								>
									Login
								</Typography>
							</Typography>
						</CardFooter>
					</Card>
				</Dialog>
			)}
		</>
	);
};
