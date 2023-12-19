import React from "react";
import Chart from "react-apexcharts";
import {
	Typography,
	CardBody,
	Card,
	CardHeader,
} from "@material-tailwind/react";
import { useSelector } from "react-redux";
import { sidebarSelector } from "../../../redux/slice/sidebarSlice";

export const Section = () => {
	const openSidebar = useSelector(sidebarSelector);

	const chartConfig = {
		type: "line",
		width: 480,
		height: 240,
		series: [
			{
				name: "Sales",
				data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
			},
		],
		options: {
			chart: {
				toolbar: {
					show: false,
				},
			},
			title: {
				show: "",
			},
			dataLabels: {
				enabled: false,
			},
			colors: ["#020617"],
			stroke: {
				lineCap: "round",
				curve: "smooth",
			},
			markers: {
				size: 0,
			},
			xaxis: {
				axisTicks: {
					show: false,
				},
				axisBorder: {
					show: false,
				},
				labels: {
					style: {
						colors: "#616161",
						fontSize: "12px",
						fontFamily: "inherit",
						fontWeight: 400,
					},
				},
				categories: [
					"Apr",
					"May",
					"Jun",
					"Jul",
					"Aug",
					"Sep",
					"Oct",
					"Nov",
					"Dec",
				],
			},
			yaxis: {
				labels: {
					style: {
						colors: "#616161",
						fontSize: "12px",
						fontFamily: "inherit",
						fontWeight: 400,
					},
				},
			},
			grid: {
				show: true,
				borderColor: "#dddddd",
				strokeDashArray: 5,
				xaxis: {
					lines: {
						show: true,
					},
				},
				padding: {
					top: 5,
					right: 20,
				},
			},
			fill: {
				opacity: 0.8,
			},
			tooltip: {
				theme: "dark",
			},
		},
	};

	return (
		<div
			className={`absolute top-4 right-5 z-0 duration-300 shadow-lg p-4 shadow-blue-gray-900/40 bg-gray-50 text-blue-gray-900 h-[calc(100vh-9.2vh)] max-w-[calc(100vw-6.5rem)] ${
				openSidebar ? "w-[calc(100vw-24rem)]" : "w-full"
			}`}
		>
			<div className="grid w-full h-full grid-cols-2 gap-4">
				<Card>
					<CardHeader
						floated={false}
						shadow={false}
						color="transparent"
						className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
					>
						<div>
							<Typography variant="h6" color="blue-gray">
								Pie Chart
							</Typography>
							<Typography
								variant="small"
								color="gray"
								className="max-w-sm font-normal"
							>
								Visualize your data in a simple way using the
								@material-tailwind/react chart plugin.
							</Typography>
						</div>
					</CardHeader>
					<CardBody className="grid px-2 place-items-center">
						<Chart {...chartConfig} />
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						floated={false}
						shadow={false}
						color="transparent"
						className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
					>
						<div>
							<Typography variant="h6" color="blue-gray">
								Pie Chart
							</Typography>
							<Typography
								variant="small"
								color="gray"
								className="max-w-sm font-normal"
							>
								Visualize your data in a simple way using the
								@material-tailwind/react chart plugin.
							</Typography>
						</div>
					</CardHeader>
					<CardBody className="grid px-2 place-items-center">
						<Chart {...chartConfig} />
					</CardBody>
				</Card>
				<Card>
					<CardHeader
						floated={false}
						shadow={false}
						color="transparent"
						className="flex flex-col gap-4 rounded-none md:flex-row md:items-center"
					>
						<div>
							<Typography variant="h6" color="blue-gray">
								Pie Chart
							</Typography>
							<Typography
								variant="small"
								color="gray"
								className="max-w-sm font-normal"
							>
								Visualize your data in a simple way using the
								@material-tailwind/react chart plugin.
							</Typography>
						</div>
					</CardHeader>
					<CardBody className="grid px-2 place-items-center">
						<Chart {...chartConfig} />
					</CardBody>
				</Card>
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
