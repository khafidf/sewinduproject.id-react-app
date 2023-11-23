import { createSlice } from "@reduxjs/toolkit";

const calendarSlice = createSlice({
	name: "calendar",
	initialState: {
		currentMonth: new Date(),
	},
	reducers: {
		goToPreviousMonth: (state) => {
			state.currentMonth = new Date(
				state.currentMonth.getFullYear(),
				state.currentMonth.getMonth() - 1,
				1
			);
		},
		goToNextMonth: (state) => {
			state.currentMonth = new Date(
				state.currentMonth.getFullYear(),
				state.currentMonth.getMonth() + 1,
				1
			);
		},
		goToPreviousYear: (state) => {
			state.currentMonth = new Date(
				state.currentMonth.getFullYear() - 1,
				state.currentMonth.getMonth(),
				1
			);
		},
		goToNextYear: (state) => {
			state.currentMonth = new Date(
				state.currentMonth.getFullYear() + 1,
				state.currentMonth.getMonth(),
				1
			);
		},
		goToToday: (state) => {
			state.currentMonth = new Date();
		},
	},
});

export const {
	goToPreviousMonth,
	goToNextMonth,
	goToPreviousYear,
	goToNextYear,
	goToToday,
} = calendarSlice.actions;

export const dateSelector = (state) => state.calendar.currentMonth;

export default calendarSlice.reducer;
