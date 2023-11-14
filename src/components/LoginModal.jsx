import React, { useState } from "react";
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
	Typography,
	Input,
} from "@material-tailwind/react";

export const LoginModal = ({ openNav }) => {
	const [openLogin, setOpenLogin] = useState(false);
	const [action, setAction] = useState("login");
	const handleOpenModal = () => {
		setOpenLogin((cur) => !cur);
		setAction("login");
	};

	const handleRegister = () => setAction("register");
	const handleLogin = () => setAction("login");

	return (
		<>
			<Button
				size="sm"
				onClick={handleOpenModal}
				className={`${
					openNav ? `w-full py-2.5` : `hidden lg:inline-block`
				} text-white duration-100 bg-black rounded shadow-md hover:shadow-gray-400  hover:text-blue-gray-900 hover:bg-gray-100`}
			>
				<span className="lg:px-4">Log In</span>
			</Button>
			{action === "login" ? (
				<Dialog
					size="xs"
					open={openLogin}
					handler={handleOpenModal}
					className="bg-transparent shadow-none"
				>
					<Card className="mx-auto w-full py-4 gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
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

							<Input label="Email or Phone Number" size="lg" />
							<Input label="Password" size="lg" />
						</CardBody>
						<CardFooter className="pt-0">
							<Button variant="gradient" onClick={handleOpenModal} fullWidth>
								Log in
							</Button>
							<Typography variant="small" className="flex justify-center mt-4">
								Don&apos;t have an account?
								<Typography
									as="a"
									variant="small"
									color="blue-gray"
									className="ml-1 font-bold cursor-pointer"
									onClick={handleRegister}
								>
									Register
								</Typography>
							</Typography>
						</CardFooter>
					</Card>
				</Dialog>
			) : (
				<Dialog
					size="xs"
					open={openLogin}
					handler={handleOpenModal}
					className="bg-transparent shadow-none"
				>
					<Card className="mx-auto w-full py-4 gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
						<CardBody className="flex flex-col gap-4">
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
							<Input label="Name" size="md" />
							<Input label="Email" size="md" />
							<Input label="Phone Number" size="md" />
							<Input label="Password" size="md" />
							<Input label="Confirm Password" size="md" />
						</CardBody>
						<CardFooter className="pt-0">
							<Button variant="gradient" onClick={handleOpenModal} fullWidth>
								Register
							</Button>
							<Typography variant="small" className="flex justify-center mt-4">
								Already have an account?
								<Typography
									as="a"
									variant="small"
									color="blue-gray"
									className="ml-1 font-bold cursor-pointer"
									onClick={handleLogin}
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
