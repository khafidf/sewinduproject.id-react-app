import { apiSlice } from "../apiSlice.js";

export const userApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		profile: builder.query({
			query: () => "user",
		}),
		updateData: builder.mutation({
			query: (userData) => ({
				url: "user/update",
				method: "PUT",
				body: userData,
			}),
		}),
	}),
});

export const { useProfileQuery, useUpdateDataMutation } = userApiSlice;
