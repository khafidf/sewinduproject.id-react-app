import React from "react";
import {
	Accordion,
	AccordionHeader,
	AccordionBody,
	List,
	ListItem,
} from "@material-tailwind/react";
import { useSelector, useDispatch } from "react-redux";
import { format } from "date-fns";
import {
	dateAccordionSelector,
	openAccordionSelector,
	setCloseAccordion,
	setOpenAccordion,
} from "../../../redux/slice/accordionSlice";
import { FaAngleDown } from "react-icons/fa6";

export const Details = () => {
	const openData = useSelector(openAccordionSelector);
	const dateData = useSelector(dateAccordionSelector);
	const dispatch = useDispatch();

	const CUSTOM_ANIMATION = {
		mount: { scale: 1 },
		unmount: { scale: 0.9 },
	};

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
						<List>
							<ListItem>Inbox</ListItem>
							<ListItem>Trash</ListItem>
							<ListItem>Settings</ListItem>
						</List>
					</AccordionBody>
				</Accordion>
			</div>
		</div>
	);
};
