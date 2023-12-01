import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openAccordion: 0,
	date: new Date(),
};

const accordionSlice = createSlice({
	name: "accordion",
	initialState,
	reducers: {
		setOpenAccordion(state, action) {
			const { open } = action.payload;
			state.openAccordion = open;
		},
		setCloseAccordion(state) {
			state.openAccordion = 0;
		},
		setOpenAccordionSection(state, action) {
			const { open, date } = action.payload;
			state.openAccordion = open;
			state.date = date;
		},
		setCloseAccordionSection(state, action) {
			const { date } = action.payload;
			state.openAccordion = 0;
			state.date = date;
		},
	},
});

export const {
	setOpenAccordion,
	setCloseAccordion,
	setOpenAccordionSection,
	setCloseAccordionSection,
} = accordionSlice.actions;

export const openAccordionSelector = (state) => state.accordion.openAccordion;
export const dateAccordionSelector = (state) => state.accordion.date;

export default accordionSlice.reducer;
