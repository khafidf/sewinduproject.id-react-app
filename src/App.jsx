import React, { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";

import { Layout } from "./layouts/Layouts";
import { LayoutAdmin } from "./layouts/LayoutAdmin";

import Loading from "./components/Loading";
const RequireAuth = lazy(() => import("./pages/helper/RequireAuth"));

const HomePage = lazy(() => import("./pages/client/home"));
const GalleryPage = lazy(() => import("./pages/client/gallery"));
const PackagePage = lazy(() => import("./pages/client/package"));
const BookingPage = lazy(() => import("./pages/client/booking"));
const Dashboard = lazy(() => import("./pages/admin/dashboard"));

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
					{/* Except All Routes */}
					{/* <Route path="*" /> */}
				</Route>
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route element={<RequireAuth role="1" />}>
						<Route index element={<Dashboard />} />
					</Route>
				</Route>
			</Routes>
		</Suspense>
	);
}
