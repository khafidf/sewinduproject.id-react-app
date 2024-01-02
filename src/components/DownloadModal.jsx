import React from "react";
import {
	Button,
	Dialog,
	DialogHeader,
	DialogBody,
	DialogFooter,
	Card,
	Typography,
} from "@material-tailwind/react";
import { FaDownload } from "react-icons/fa6";
import { Link } from "react-router-dom";

export const DownloadModal = () => {
	const [open, setOpen] = React.useState(false);

	const handleOpen = () => setOpen(!open);

	const TABLE_HEAD = ["Url"];

	const TABLE_ROWS = [
		{
			name: "https://drive.google.com/drive/folders/1-CPm6rc32MFSlfzt_d-9cbg2qWiJoVkQ?usp=drive_link",
		},
		{
			name: "https://drive.google.com/drive/folders/1xjMypY34QvRhrPBj5hlgK8Ufedb397Ix?usp=drive_link",
		},
	];

	return (
		<>
			<FaDownload onClick={handleOpen} className="cursor-pointer" />
			<Dialog open={open} handler={handleOpen}>
				<DialogHeader>Google Drive Link</DialogHeader>
				<DialogBody>
					<Card className="w-full h-full overflow-scroll">
						<table className="w-full text-left table-auto min-w-max">
							<thead>
								<tr>
									{TABLE_HEAD.map((head) => (
										<th
											key={head}
											className="p-4 border-b border-secondary/20 bg-secondary/30"
										>
											<Typography
												variant="small"
												color="blue-gray"
												className="font-bold leading-none opacity-70"
											>
												{head}
											</Typography>
										</th>
									))}
								</tr>
							</thead>
							<tbody>
								{TABLE_ROWS.map(({ name }, index) => {
									const isLast = index === TABLE_ROWS.length - 1;
									const classes = isLast
										? "p-4 text-center"
										: "p-4 border-b text-center border-secondary/20";

									return (
										<tr key={name}>
											<td className={classes}>
												<Link to={name} target="_blank">
													{name}
												</Link>
											</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</Card>
				</DialogBody>
				<DialogFooter>
					<Button
						size="sm"
						variant="filled"
						color="blue-gray"
						onClick={handleOpen}
					>
						<span>Back</span>
					</Button>
				</DialogFooter>
			</Dialog>
		</>
	);
};
