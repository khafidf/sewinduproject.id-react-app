import { Outlet } from "react-router-dom";
import { Nav } from "../components/Nav";
import { Footer } from "../components/Footer";

export const Layout = () => {
	return (
		<>
			<Nav />
			<main className="container mx-auto">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};
