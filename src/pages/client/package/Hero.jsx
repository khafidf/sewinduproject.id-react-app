import React from "react";

export const Hero = () => {
	return (
		<div className="w-full text-blue-gray-900">
			<div className="container flex justify-start items-center mt-6 mx-auto h-[160px] lg:h-[240px] xl:h-[280px]">
				<div className="px-2">
					<div className="cursor-default">
						<p className="text-xs opacity-50">by Sewindu Project.</p>
						<h1 className="text-2xl font-bold md:text-3xl lg:text-4xl">
							Discover Our Captivating Gallery Collection
						</h1>
						<p className="mt-1 text-xs opacity-75 md:text-sm lg:text-base">
							Explore a curated collection of captivating images in our gallery.
						</p>
					</div>
				</div>
			</div>
		</div>
	);
};
