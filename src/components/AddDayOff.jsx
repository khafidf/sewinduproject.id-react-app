import React, { useEffect, useState } from "react";
import { FaPlus } from "react-icons/fa6";
import {
	Button,
	Dialog,
	Card,
	CardBody,
	CardFooter,
} from "@material-tailwind/react";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";
import { format } from "date-fns";
import {
	useGetDaysQuery,
	useSaveDaysMutation,
} from "../redux/api/dayOff/dayOffSlice";

const css = `
  .my-selected:not([disabled]) {
	background-color: #2e2b2c;
	color: #fefefe;
  }
  .my-selected:hover:not([disabled]) {
    border-color: #2e2b2c;
    color: #2e2b2c;
  }
  .my-today {
    color: #2e2b2c;
  }
`;

export const AddDayOff = () => {
	const [open, setOpen] = useState(false);
	const [days, setDays] = useState([]);

	const { data: daysData, isLoading } = useGetDaysQuery();
	const [saveDays] = useSaveDaysMutation();

	useEffect(() => {
		!isLoading &&
			daysData?.data?.length !== 0 &&
			setDays(daysData?.data?.map(({ date }) => new Date(date)));
	}, [daysData?.data, isLoading]);

	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
			const daysConvert = days.map((day) => format(day, "yyyy-MM-dd"));

			await saveDays(daysConvert);
			setOpen((cur) => !cur);
		} catch (error) {
			console.log(error.message);
		}
	};

	const handleOpenModal = () => {
		setOpen((cur) => !cur);
	};
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
					<FaPlus size={14} /> Add day off
				</Button>
			</div>
			<Dialog
				size="xs"
				open={open}
				handler={handleOpenModal}
				className="bg-transparent shadow-none"
			>
				<Card className="mx-auto w-full py-4 rounded-none gap-4 lg:py-6 lg:gap-6 max-w-[40rem]">
					<form onSubmit={handleSubmit}>
						<CardBody>
							<div className="flex justify-center">
								<style>{css}</style>
								<DayPicker
									modifiersClassNames={{
										selected: "my-selected",
										today: "my-today",
									}}
									disabled={{ before: new Date() }}
									mode="multiple"
									selected={days}
									onSelect={setDays}
								/>
							</div>
						</CardBody>
						<CardFooter className="flex gap-2 pt-0">
							<Button
								variant="filled"
								color="blue-gray"
								type="button"
								onClick={handleOpenModal}
								fullWidth
							>
								Close
							</Button>
							<Button
								variant="filled"
								color="blue-gray"
								type="submit"
								fullWidth
							>
								Save Date
							</Button>
						</CardFooter>
					</form>
				</Card>
			</Dialog>
		</>
	);
};
