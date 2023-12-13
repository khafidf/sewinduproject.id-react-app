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
				md: {
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
					gray: {
						background: "bg-primary border border-secondary",
						color: "text-secondary",
						shadow: "",
						hover:
							"hover:bg-secondary hover:border-secondary hover:text-primary",
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
	select: {
		styles: {
			base: {
				select: {
					color: "text-secondary",
				},
				arrow: {
					initial: {
						color: "text-secondary",
					},
					active: {
						transform: "rotate-180",
						mt: "mt-px",
					},
				},
				menu: {
					border: "border border-secondary/20",
					borderRadius: "rounded-none",
					boxShadow: "shadow-lg shadow-secondary/10",
					color: "text-secondary",
				},
				option: {
					initial: {
						borderRadius: "rounded-none",
						background: "hover:bg-secondary/5 focus:bg-secondary/5",
						color: "hover:text-secondary focus:text-secondary",
					},
					active: {
						bg: "bg-primary bg-opacity-80",
						color: "text-secondary",
					},
				},
			},
			variants: {
				outlined: {
					base: {
						label: {
							before: {
								mt: "before:mt-[6px]",
								borderRadius: "before:rounded-none",
							},
							after: {
								mt: "after:mt-[6px]",
								borderRadius: "after:rounded-none",
							},
						},
						colors: {
							select: {
								"blue-gray": {
									close: {
										borderColor: "border-secondary",
									},
									open: {
										borderColor: "border-secondary",
										borderTopColor: "border-t-transparent",
									},
									withValue: {
										borderColor: "border-secondary",
										borderTopColor: "border-t-transparent",
									},
								},
							},
							label: {
								"blue-gray": {
									close: {
										color: "text-secondary",
										before: "before:border-transparent",
										after: "after:border-transparent",
									},
									open: {
										color: "text-secondary",
										before: "before:border-secondary",
										after: "after:border-secondary",
									},
									withValue: {
										color: "text-secondary",
										before: "before:border-secondary",
										after: "after:border-secondary",
									},
								},
							},
						},
					},
				},
				standard: {
					colors: {
						select: {
							"blue-gray": {
								close: {
									borderColor: "border-secondary",
								},
								open: {
									borderColor: "border-secondary",
								},
								withValue: {
									borderColor: "border-secondary",
								},
							},
						},
						label: {
							"blue-gray": {
								close: {
									color: "text-secondary",
									after: "after:border-secondary",
								},
								open: {
									color: "text-secondary",
									after: "after:border-secondary",
								},
								withValue: {
									color: "text-secondary",
									after: "after:border-secondary",
								},
							},
						},
					},
				},
			},
		},
	},
	tabsHeader: {
		styles: {
			base: {
				bg: "bg-secondary/10",
				borderRadius: "rounded-none",
			},
		},
	},
	tab: {
		styles: {
			base: {
				indicator: {
					position: "absolute",
					inset: "inset-0",
					zIndex: "z-10",
					height: "h-full",
					bg: "bg-primary",
					borderRadius: "rounded-none",
					boxShadow: "shadow",
				},
			},
		},
	},
	list: {
		defaultProps: {
			ripple: true,
			className: "",
		},
		styles: {
			base: {
				list: {
					color: "text-secondary",
				},
				item: {
					initial: {
						borderRadius: "rounded-none",
						bg: "hover:bg-secondary/10 hover:bg-opacity-80 focus:bg-secondary/10 focus:bg-opacity-80 active:bg-secondary/10 active:bg-opacity-80",
						color:
							"hover:text-secondary focus:text-secondary active:text-secondary",
					},
				},
			},
		},
	},
};
