import React from "react";
import { Outlet, useLocation, Navigate } from "react-router-dom";
import { useProfileQuery } from "../../redux/api/user/userApiSlice";
import Loading from "../../components/Loading";

export default function RequireAuth({ role }) {
	const { data: profileData, isLoading } = useProfileQuery();

	const location = useLocation();

	if (isLoading) {
		return <Loading />;
	}

	return profileData?.data?.roles === role ? (
		<Outlet />
	) : profileData?.data?.name ? (
		<Navigate to="/unauthorized" state={{ from: location }} replace />
	) : (
		<Navigate to="/" state={{ from: location }} replace />
	);
}
