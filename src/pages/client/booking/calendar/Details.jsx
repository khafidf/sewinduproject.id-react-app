import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	List,
	ListItem,
	Typography,
	Spinner,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import {
	dateAccordionSelector,
	openAccordionSelector,
	setCloseAccordion,
	setOpenAccordion,
} from "../../../../redux/slice/accordionSlice";
import { FaAngleDown } from "react-icons/fa6";
import { useBookingByDayQuery } from "../../../../redux/api/booking/bookingSlice";

export const Details = () => {
	const openData = useSelector(openAccordionSelector);
	const dateData = useSelector(dateAccordionSelector);
	const dispatch = useDispatch();

	const CUSTOM_ANIMATION = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

	const dateParams = format(dateData, "yyyy-MM-dd");
	const { data: bookingData, isLoading } = useBookingByDayQuery(dateParams);

	const capitalize = (str) => {
		return str.charAt(0).toUpperCase() + str.slice(1);
	};

	// const dateNow = format(dateData, "yyyy-MM-dd"); return 2023-01-02

	return (
		<div className="w-full">
			<div className="container max-w-[50rem] px-2 pt-6 mx-auto mb-12">
				<Accordion
					open={openData === 1}
					animate={CUSTOM_ANIMATION}
					icon={
						<FaAngleDown
							className={` duration-300 ${openData === 1 && "rotate-180"}`}
						/>
					}
				>
					<AccordionHeader
						onClick={() => {
							openData === 0
								? dispatch(setOpenAccordion({ open: 1 }))
								: dispatch(setCloseAccordion());
						}}
					>
						Booking Details ({format(dateData, "MMMM d, yyyy")}) :
					</AccordionHeader>
					<AccordionBody>
						{!isLoading ? (
							bookingData?.data.length !== 0 ? (
								<List>
									{bookingData?.data.map(
										({ packageName, categoryName, date }, index) => (
											<ListItem key={index} className="flex justify-between">
												<Typography variant="paragraph" color="blue-gray">
													{packageName} ({capitalize(categoryName)})
												</Typography>
												<Typography variant="paragraph" color="blue-gray">
													{date.time[0]} - {date.time[1]}
												</Typography>
											</ListItem>
										)
									)}
								</List>
							) : (
								<div className="flex justify-center text-center">
									<Typography variant="h5" color="blue-gray">
										Date available, Booking Now!
									</Typography>
								</div>
							)
						) : (
							<div className="flex justify-center">
								<Spinner />
							</div>
						)}
					</AccordionBody>
				</Accordion>
			</div>
		</div>
	);
};
