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
		createTransaction: builder.mutation({
			query: (transaction) => ({
				url: "booking/create-transaction",
				method: "POST",
				body: transaction,
			}),
		}),
		getOrder: builder.query({
			query: (orderId) => `booking/pay-order/${orderId}`,
		}),
	}),
});

export const {
	useBookingByDayQuery,
	useAllBookingQuery,
	useHistoryQuery,
	useGetOrderQuery,
	useCreateTransactionMutation,
} = bookingApiSlice;
