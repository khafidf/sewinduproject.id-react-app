import { apiSlice } from "../apiSlice.js";

export const galleryApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		photo: builder.query({
			query: (category) => `gallery/${category}`,
		}),
		category: builder.query({
			query: () => "category/",
		}),
	}),
});

export const { usePhotoQuery, useCategoryQuery } = galleryApiSlice;
