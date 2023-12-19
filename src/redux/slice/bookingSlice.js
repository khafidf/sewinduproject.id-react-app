// bookingSlice.js

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	refetchCalendar: null,
	refetchHistory: null,
};

const bookingSlice = createSlice({
	name: "booking",
	initialState,
	reducers: {
		setRefetchCalendar: (state, action) => {
			state.refetchCalendar = action.payload;
		},
		setRefetchHistory: (state, action) => {
			state.refetchHistory = action.payload;
		},
	},
});

export const { setRefetchCalendar, setRefetchHistory } = bookingSlice.actions;

export const selectRefetchCalendar = (state) => state.booking.refetchCalendar;
export const selectRefetchHistory = (state) => state.booking.refetchHistory;

export default bookingSlice.reducer;
