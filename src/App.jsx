import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./Layouts/Layouts";
import Loading from "./components/Loading";
const RequireAuth = lazy(() => import("./pages/helper/RequireAuth"));

const HomePage = lazy(() => import("./pages/client/home"));
const GalleryPage = lazy(() => import("./pages/client/gallery"));
const PackagePage = lazy(() => import("./pages/client/package"));
const BookingPage = lazy(() => import("./pages/client/booking"));

export default function App() {
	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Public Routes */}
					<Route path="/" element={<HomePage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="package" element={<PackagePage />} />

					{/* Protect Client Routes */}
					<Route element={<RequireAuth role="0" />}>
						<Route path="booking" element={<BookingPage />} />
					</Route>

					{/* Protect Admin Routes */}
					{/* <Route element={<RequireAuth role="1" />}>
						<Route path="admin" />
					</Route> */}
					{/* Except All Routes */}
					{/* <Route path="*" /> */}
				</Route>
			</Routes>
		</Suspense>
	);
}
