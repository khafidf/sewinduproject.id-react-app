import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function RequireAuth({ role }) {
	const user = Cookies.get("user");
	const roles = Cookies.get("roles");

	const location = useLocation();

	return roles === role ? (
		<Outlet />
	) : user ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
}
