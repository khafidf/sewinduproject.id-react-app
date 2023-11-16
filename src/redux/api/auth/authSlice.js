/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
	name: "auth",
	initialState: { user: null, token: null },
	reducers: {
		setCredentials: (state, action) => {
			const { name, token } = action.payload;
			const auth = {
				name,
				token,
			};
			localStorage.setItem("auth", JSON.stringify(auth));
			state.user = name;
			state.token = token;
		},
		logOut: (state, action) => {
			localStorage.removeItem("auth");
			state.user = null;
			state.token = null;
		},
	},
});

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentUser = (state) => state.auth.user;
export const selectCurrentToken = (state) => state.auth.token;
