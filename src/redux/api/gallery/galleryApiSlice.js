import { apiSlice } from "../apiSlice.js";

export const galleryApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addPhoto: builder.mutation({
			query: (photoData) => ({
				url: "gallery/add",
				method: "POST",
				body: photoData,
			}),
		}),
		editPhoto: builder.mutation({
			query: ({ id, photoData }) => ({
				url: `gallery/update/${id}`,
				method: "PUT",
				body: photoData,
			}),
		}),
		deletePhoto: builder.mutation({
			query: (id) => ({
				url: `gallery/delete/${id}`,
				method: "DELETE",
			}),
		}),
		photos: builder.query({
			query: (category) => `gallery/${category}`,
		}),
		category: builder.query({
			query: () => "category/",
		}),
	}),
});

export const {
	usePhotosQuery,
	useCategoryQuery,
	useAddPhotoMutation,
	useEditPhotoMutation,
	useDeletePhotoMutation,
} = galleryApiSlice;
