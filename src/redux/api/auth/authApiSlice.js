import { apiSlice } from "../apiSlice.js";

export const authApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		login: builder.mutation({
			query: (credentials) => ({
				url: "user/login",
				method: "POST",
				body: credentials,
			}),
		}),
		register: builder.mutation({
			query: (userData) => ({
				url: "user/register",
				method: "POST",
				body: userData,
			}),
		}),
	}),
});

export const { useLoginMutation, useRegisterMutation } = authApiSlice;
