import React from "react";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../components/Sidebar";
import { Footer } from "../components/Footer";

export const LayoutAdmin = () => {
	return (
		<>
			<Sidebar />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
