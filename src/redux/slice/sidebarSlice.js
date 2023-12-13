import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	openSidebar: true,
};

const sidebarSlice = createSlice({
	name: "sidebar",
	initialState,
	reducers: {
		setOpenSidebar(state) {
			state.openSidebar = !state.openSidebar;
		},
	},
});

export const { setOpenSidebar } = sidebarSlice.actions;

export const sidebarSelector = (state) => state.sidebar.openSidebar;

export default sidebarSlice.reducer;
