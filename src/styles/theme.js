export const theme = {
	navbar: {
		styles: {
			base: {
				navbar: {
					fullWidth: {
						rounded: "rounded-none",
					},
				},
			},
			variants: {
				filled: {
					white: {
						background: "bg-primary",
						color: "text-secondary",
					},
				},
			},
		},
	},
	button: {
		styles: {
			base: {
				initial: {
					fontWeight: "font-semibold",
				},
			},
			sizes: {
				sm: {
					fontSize: "text-xs",
					borderRadius: "rounded-none",
				},
				lg: {
					borderRadius: "rounded-none",
				},
			},
			variants: {
				filled: {
					white: {
						background: "bg-primary border border-primary",
						color: "text-secondary",
						shadow: "",
						hover: "hover:bg-secondary hover:border-primary hover:text-primary",
					},
					"blue-gray": {
						background: "bg-secondary border border-secondary",
						color: "text-primary",
						shadow: "",
						hover:
							"hover:bg-primary hover:border-secondary hover:text-secondary",
					},
				},
			},
		},
	},
	dialog: {
		styles: {
			base: {
				backdrop: {
					backgroundColor: "bg-secondary",
				},
				container: {
					bg: "bg-primary",
					borderRadius: "rounded-none",
					color: "text-secondary",
				},
			},
		},
	},
	cardFooter: {
		styles: {
			base: {
				initial: {
					p: "pt-2 px-6",
				},
			},
		},
	},
	typography: {
		styles: {
			colors: {
				"blue-gray": {
					color: "text-secondary",
				},
				gray: {
					color: "text-secondary/90",
				},
				white: {
					color: "text-primary",
				},
			},
		},
	},
	menu: {
		defaultProps: {
			placement: "bottom",
			offset: 5,
			dismiss: {
				itemPress: true,
			},
			animate: {
				unmount: {},
				mount: {},
			},
			lockScroll: false,
		},
		styles: {
			base: {
				menu: {
					bg: "bg-primary",
					minWidth: "min-w-[180px]",
					p: "p-3",
					border: "border border-secondary/10",
					borderRadius: "rounded-none",
					boxShadow: "",
					color: "text-secondary/90",
				},
				item: {
					initial: {
						borderRadius: "rounded-none",
						px: "pl-1 pr-3",
						bg: "",
						color: "",
					},
				},
			},
		},
	},
	input: {
		defaultProps: {
			variant: "outlined",
			size: "md",
			color: "blue",
			label: "",
			error: false,
			success: false,
			icon: undefined,
			labelProps: undefined,
			containerProps: undefined,
			shrink: false,
			className: "",
		},
		valid: {
			variants: ["standard", "outlined", "static"],
			sizes: ["md", "lg"],
			colors: [
				"black",
				"white",
				"blue-gray",
				"gray",
				"brown",
				"deep-orange",
				"orange",
				"amber",
				"yellow",
				"lime",
				"light-green",
				"green",
				"teal",
				"cyan",
				"light-blue",
				"blue",
				"indigo",
				"deep-purple",
				"purple",
				"pink",
				"red",
			],
		},
		styles: {
			variants: {
				standard: {
					base: {
						input: {
							borderWidth: "border-b",
							borderColor: "placeholder-shown:border-secondary",
						},
					},
					colors: {
						input: {
							"blue-gray": {
								borderColor: "border-secondary",
								borderColorFocused: "focus:border-secondary",
							},
						},
						label: {
							"blue-gray": {
								color: "text-secondary peer-focus:text-secondary",
								after:
									"after:border-secondary peer-focus:after:border-secondary",
							},
						},
					},
				},
			},
		},
	},
};
