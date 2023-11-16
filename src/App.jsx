import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/client/home";
import { GalleryPage } from "./pages/client/gallery";
import { PackagePage } from "./pages/client/package";
import { Layout } from "./Layouts/Layouts";

export default function App() {
	return (
		<Routes>
			<Route path="/" element={<Layout />}>
				{/* Public Routes */}
				<Route path="/" element={<HomePage />} />
				<Route path="gallery" element={<GalleryPage />} />
				<Route path="package" element={<PackagePage />} />
				<Route path="booking" />

				{/* Protect   Routes */}
				{/* <Route element={<RequireAuth />}>
					<Route />
				</Route> */}

				{/* Except All Routes */}
				{/* <Route path="*" /> */}
			</Route>
		</Routes>
	);
}
