import { apiSlice } from "../apiSlice";

export const bookingApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		bookingByDay: builder.query({
			query: (day) => `booking/${day}`,
		}),
		allBooking: builder.query({
			query: () => "booking/schedule",
		}),
		bookingByUser: builder.query({
			query: () => "booking/status-order",
		}),
	}),
});

export const {
	useBookingByDayQuery,
	useAllBookingQuery,
	useBookingByUserQuery,
} = bookingApiSlice;
