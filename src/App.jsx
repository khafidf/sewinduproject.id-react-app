import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/client/home";
import { GalleryPage } from "./pages/client/gallery";

export default function App() {
	return (
		<Router>
			<Routes>
				<Route path="/" element={<HomePage />} />
				{
					<Route path="/gallery" element={<GalleryPage />} />
					// <Route path="/package" element={<Package />} />
					// <Route path="/booking" element={<Booking />} />
					// <Route path="/admin" element={<Admin />} />
				}
				<Route path="*" />
			</Routes>
		</Router>
	);
}
