import { apiSlice } from "../apiSlice.js";

export const packageApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		package: builder.query({
			query: (category) => `package/${category}`,
		}),
		category: builder.query({
			query: () => "category/",
		}),
	}),
});

export const { usePackageQuery, useCategoryQuery } = packageApiSlice;
