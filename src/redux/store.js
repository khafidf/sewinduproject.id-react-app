import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";
import calendarReducer from "./slice/calendarSlice.js";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		calendar: calendarReducer,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware
		),
	devTools: true,
});
