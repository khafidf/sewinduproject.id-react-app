import React from "react";

export const Card = () => {
	return (
		<div className="flex flex-col max-w-xs m-2 rounded-lg shadow-gray-300 gap-6 px-4 py-6 shadow-lg">
			<div className="flex w-full h-44 mx-auto shadow-md">
				<img className="object-cover rounded-md" src="1.jpg" alt="Tes" />
			</div>
			<div className="flex flex-col gap-2 px-2">
				<h2 className="font-medium text-sm sm:text-base">Package Name</h2>
				<p className="font-light text-xs sm:text-base">
					Lorem ipsum dolor sit amet consectetur adipisicing elit. At eos dolore
					ipsa nostrum nesciunt! Vitae, ipsa. Laboriosam, recusandae asperiores
					explicabo numquam iste officia fugiat laborum quae tempora,
					dignissimos soluta ipsa?
				</p>
			</div>
			<button className="bg-black text-sm sm:text-base text-white hover:shadow-gray-400 hover:text-black hover:bg-gray-100 py-2 rounded-md shadow-md">
				Check
			</button>
		</div>
	);
};
