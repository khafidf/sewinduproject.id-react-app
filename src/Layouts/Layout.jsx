import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const Layout = () => {
	return (
		<>
			<Nav />
			<main>
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
