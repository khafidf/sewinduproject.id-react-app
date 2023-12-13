import { configureStore } from "@reduxjs/toolkit";
import { apiSlice } from "./api/apiSlice.js";
import calendarReducer from "./slice/calendarSlice.js";
import accordionReducer from "./slice/accordionSlice.js";
import sidebarSlice from "./slice/sidebarSlice.js";

export const store = configureStore({
	reducer: {
		[apiSlice.reducerPath]: apiSlice.reducer,
		calendar: calendarReducer,
		accordion: accordionReducer,
		sidebar: sidebarSlice,
	},
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({ serializableCheck: false }).concat(
			apiSlice.middleware
		),
	devTools: true,
});
