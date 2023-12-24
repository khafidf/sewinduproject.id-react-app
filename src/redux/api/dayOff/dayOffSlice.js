import { apiSlice } from "../apiSlice";

export const dayOffSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		getDays: builder.query({
			query: () => `day-off/`,
		}),
		saveDays: builder.mutation({
			query: (days) => ({
				url: "day-off/",
				method: "POST",
				body: days,
			}),
		}),
	}),
});

export const { useGetDaysQuery, useSaveDaysMutation } = dayOffSlice;
