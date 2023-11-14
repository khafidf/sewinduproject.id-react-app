import React from "react";
import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/client/home";
import { GalleryPage } from "./pages/client/gallery";
import { PackagePage } from "./pages/client/package";

export default function App() {
	return (
		<Routes>
			<Route index element={<HomePage />} />
			<Route path="/gallery" element={<GalleryPage />} />
			<Route path="/package" element={<PackagePage />} />
			{
				// <Route path="/booking" element={<Booking />} />
				// <Route path="/admin" element={<Admin />} />
			}
			<Route path="*" />
		</Routes>
	);
}
