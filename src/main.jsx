import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./styles/index.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Provider } from "react-redux";
import { store } from "./redux/store.js";

import { ThemeProvider } from "@material-tailwind/react";

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<Provider store={store}>
			<ThemeProvider>
				<Router>
					<Routes>
						<Route path="/*" element={<App />} />
					</Routes>
				</Router>
			</ThemeProvider>
		</Provider>
	</React.StrictMode>
);
