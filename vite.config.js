import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteCompression } from "vite-plugin-compress";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		viteCompression({
			verbose: true,
			disable: false,
			threshold: 10240,
			algorithm: "gzip",
			ext: ".gz",
		}),
	],
});
