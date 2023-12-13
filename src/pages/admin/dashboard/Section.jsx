import React from "react";
import ReactECharts from "echarts-for-react";
import { Typography } from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";

export const Section = () => {
	const openSidebar = useSelector(sidebarSelector);

	const options = {
		xAxis: {
			type: "category",
			data: ["1", "2", "3", "4", "5"],
		},
		yAxis: {
			type: "value",
		},
		series: [
			{
				data: [20, 10, 5, 6, 9, 12, 19],
				type: "line",
				smooth: true,
			},
		],
	};

	return (
		<div
			className={`absolute top-4 right-5 z-0 duration-300 shadow-lg p-4 shadow-blue-gray-900/40 bg-gray-50 text-blue-gray-900 h-[calc(100vh-9.2vh)] max-w-[calc(100vw-6.5rem)] ${
				openSidebar ? "w-[calc(100vw-24rem)]" : "w-full"
			}`}
		>
			<div className="grid w-full h-full grid-cols-2 gap-4">
				<div className="flex flex-col justify-center p-4 border border-gray-900">
					<div className="text-center">
						<Typography color="blue-gray" className="font-bold">
							Total Photos
						</Typography>
					</div>
					<ReactECharts
						option={options}
						className="mx-auto"
						style={{ height: "320px", width: "480px" }}
						opts={{ renderer: "canvas" }}
					/>
				</div>
				<div className="flex flex-col justify-center p-2 border border-gray-900">
					<div className="text-center">
						<Typography color="blue-gray" className="font-bold">
							Total Packages
						</Typography>
					</div>
					<ReactECharts
						option={options}
						className="mx-auto"
						style={{ height: "320px", width: "480px" }}
						opts={{ renderer: "canvas" }}
					/>
				</div>
				<div className="flex flex-col justify-center p-2 border border-gray-900">
					<div className="text-center">
						<Typography color="blue-gray" className="font-bold">
							Total Booking
						</Typography>
					</div>
					<ReactECharts
						option={options}
						className="mx-auto"
						style={{ height: "320px", width: "480px" }}
						opts={{ renderer: "canvas" }}
					/>
				</div>
				<div className="flex items-center justify-center bg-gray-900 text-blue-gray-50">
					<div className="max-w-lg text-center">
						<h2 className="text-2xl font-bold">
							Believe in yourself and all that you are. Know that there is
							something inside you that is greater than any obstacle
						</h2>
						<p className="mt-2 text-xs opacity-75">by Sewindu Project.</p>
					</div>
				</div>
			</div>
		</div>
	);
};
