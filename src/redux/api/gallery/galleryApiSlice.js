import { apiSlice } from "../apiSlice.js";

export const galleryApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		photo: builder.query({
			query: (category) => `gallery/${category}`,
		}),
	}),
});

export const { usePhotoQuery } = galleryApiSlice;
