import React from "react";

export default function SplashScreen() {
	return (
		<div className="flex items-center justify-center w-full h-screen">
			<img
				className="animate-bounce"
				src="sewinduproject-logo.webp"
				width={120}
				alt="sewinduproject"
			/>
		</div>
	);
}
