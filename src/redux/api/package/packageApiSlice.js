import { apiSlice } from "../apiSlice.js";

export const packageApiSlice = apiSlice.injectEndpoints({
	endpoints: (builder) => ({
		addPackage: builder.mutation({
			query: (packageData) => ({
				url: "package/add",
				method: "POST",
				body: packageData,
			}),
		}),
		editPackage: builder.mutation({
			query: ({ id, packageData }) => ({
				url: `package/update/${id}`,
				method: "PUT",
				body: packageData,
			}),
		}),
		deletePackage: builder.mutation({
			query: (id) => ({
				url: `package/delete/${id}`,
				method: "DELETE",
			}),
		}),
		packageDetails: builder.query({
			query: (id) => `package/details/${id}`,
		}),
		package: builder.query({
			query: (category) => `package/${category}`,
		}),
		category: builder.query({
			query: () => "category/",
		}),
	}),
});

export const {
	usePackageQuery,
	usePackageDetailsQuery,
	useCategoryQuery,
	useAddPackageMutation,
	useEditPackageMutation,
	useDeletePackageMutation,
} = packageApiSlice;
