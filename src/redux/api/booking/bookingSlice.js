import { apiSlice } from "../apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		bookingByDay: builder.query({
			query: (day) => `booking/${day}`,
		}),
		allBooking: builder.query({
			query: () => "booking/schedule",
		}),
		history: builder.query({
			query: () => "booking/history",
		}),
	}),
});

export const { useBookingByDayQuery, useAllBookingQuery, useHistoryQuery } =
	bookingApiSlice;
