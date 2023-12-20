import React, { Suspense, lazy, useEffect, useState } from "react";
import { Routes, Route, useLocation, useNavigate } from "react-router-dom";

import Cookies from "js-cookie";

const RequireAuth = lazy(() => import("./pages/helper/RequireAuth"));
const Layout = lazy(() => import("./Layout/Layout"));
const LayoutAdmin = lazy(() => import("./Layout/LayoutAdmin"));

const SplashScreen = lazy(() => import("./components/SplashScreen"));
const PageNotFound = lazy(() => import("./components/PageNotFound"));

const HomePage = lazy(() => import("./pages/client/home"));
const GalleryPage = lazy(() => import("./pages/client/gallery"));
const PackagePage = lazy(() => import("./pages/client/package/list"));
const PackageDetailPage = lazy(() => import("./pages/client/package/detail"));
const BookingPage = lazy(() => import("./pages/client/booking"));

const Dashboard = lazy(() => import("./pages/admin/dashboard"));
const GalleryAdmin = lazy(() => import("./pages/admin/gallery"));
const PackageAdmin = lazy(() => import("./pages/admin/package"));

const BookingOrder = lazy(() => import("./pages/client/bookingOrder"));

export default function App() {
	const [splash, setSplash] = useState(true);
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

	useEffect(() => {
		const splashTimer = setTimeout(() => {
			setSplash(false);
		}, 300);

		return () => clearTimeout(splashTimer);
	}, []);

	if (splash) {
		return <SplashScreen />;
	}

	return (
		<Suspense>
			<Routes>
				<Route path="/" element={<Layout />}>
					{/* Public Routes */}
					<Route index element={<HomePage />} />
					<Route path="gallery" element={<GalleryPage />} />
					<Route path="package" element={<PackagePage />} />
					<Route path="package/:id" element={<PackageDetailPage />} />
					<Route path="booking" element={<BookingPage />} />

					{/* Protect Client Routes */}
					{/* <Route element={<RequireAuth role="0" />}>

					</Route> */}
					{/* Except All Routes */}
				</Route>
				<Route path="/admin" element={<LayoutAdmin />}>
					<Route element={<RequireAuth role="1" />}>
						<Route index element={<Dashboard />} />
						<Route path="gallery" element={<GalleryAdmin />} />
						<Route path="package" element={<PackageAdmin />} />
					</Route>
				</Route>
				<Route path={`/booking-order`} element={<BookingOrder />} />
				<Route path="*" element={<PageNotFound />} />
			</Routes>
		</Suspense>
	);
}
