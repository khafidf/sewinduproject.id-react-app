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
		logout: builder.mutation({
			query: () => ({
				url: "user/logout",
				method: "POST",
			}),
		}),
		register: builder.mutation({
			query: (userData) => ({
				url: "user/register",
				method: "POST",
				body: userData,
			}),
		}),
		forgotPassword: builder.mutation({
			query: (email) => ({
				url: "user/forgot-password",
				body: email,
			}),
		}),
		client: builder.query({
			query: () => "user/client-auth",
		}),
		admin: builder.query({
			query: () => "user/admin-auth",
		}),
	}),
});

export const {
	useLoginMutation,
	useLogoutMutation,
	useRegisterMutation,
	useForgotPasswordMutation,
	useClientQuery,
	useAdminQuery,
} = authApiSlice;
