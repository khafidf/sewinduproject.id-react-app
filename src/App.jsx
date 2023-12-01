import React, { Suspense, lazy, useEffect } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Loading from "./components/Loading";
import Cookies from "js-cookie";

const RequireAuth = lazy(() => import("./pages/helper/RequireAuth"));
const Layout = lazy(() => import("./Layout/Layout"));
const LayoutAdmin = lazy(() => import("./Layout/LayoutAdmin"));

const HomePage = lazy(() => import("./pages/client/home"));
const GalleryPage = lazy(() => import("./pages/client/gallery"));
const PackagePage = lazy(() => import("./pages/client/package/list"));
const PackageDetailPage = lazy(() => import("./pages/client/package/detail"));
const BookingPage = lazy(() => import("./pages/client/booking"));
const Dashboard = lazy(() => import("./pages/admin/dashboard"));

export default function App() {
	const { pathname } = useLocation();
	const roles = Cookies.get("roles");
	const navigate = useNavigate();

	useEffect(() => {
		if (roles === "1") {
			if (!pathname.includes("admin")) {
				navigate("/admin");
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [pathname]);

	return (
		<Suspense fallback={<Loading />}>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Public Routes */}
					<Route index element={<HomePage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="package" element={<PackagePage />} />
					<Route path="package/:id" element={<PackageDetailPage />} />

					{/* Protect Client Routes */}
					<Route element={<RequireAuth role="0" />}>
						<Route path="booking" element={<BookingPage />} />
					</Route>
					{/* Except All Routes */}
				</Route>
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route element={<RequireAuth role="1" />}>
						<Route index element={<Dashboard />} />
						{/* <Route path="gallery" element={} />
						<Route path="package" element={} /> */}
					</Route>
				</Route>
				<Route path="*" element={<div>Ilank</div>} />
			</Routes>
		</Suspense>
	);
}
