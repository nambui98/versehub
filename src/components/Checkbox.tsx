import { Checkbox, CheckboxProps, styled } from "@mui/material";

const Icon = styled("span")(({ theme }) => ({
	borderRadius: 0,
	border: "1px solid #7000FF",
	width: 24,
	height: 24,
	// boxShadow:
	// 	theme.palette.mode === "dark"
	// 		? "0 0 0 1px rgb(16 22 26 / 40%)"
	// 		: "inset 0 0 0 1px rgba(16,22,26,.2), inset 0 -1px 0 rgba(16,22,26,.1)",
	// backgroundColor: theme.palette.mode === "dark" ? "#394b59" : "#f5f8fa",
	backgroundColor: "#0F000F",
	// backgroundImage:
	// 	theme.palette.mode === "dark"
	// 		? "linear-gradient(180deg,hsla(0,0%,100%,.05),hsla(0,0%,100%,0))"
	// 		: "linear-gradient(180deg,hsla(0,0%,100%,.8),hsla(0,0%,100%,0))",
	".Mui-focusVisible &": {
		outline: "2px auto rgba(19,124,189,.6)",
		outlineOffset: 2,
	},
	"input:hover ~ &": {
		// backgroundColor: theme.palette.mode === "dark" ? "#30404d" : "#ebf1f5",
	},
	"input:disabled ~ &": {
		// boxShadow: "none",
		// background:
		// 	theme.palette.mode === "dark"
		// 		? "rgba(57,75,89,.5)"
		// 		: "rgba(206,217,224,.5)",
	},
}));

const CheckedIcon = styled(Icon)({
	backgroundColor: "#7000FF",
	// backgroundImage: "linear-gradient(180deg,hsla(0,0%,100%,.1),hsla(0,0%,100%,0))",
	"&:before": {
		display: "block",
		width: 24,
		height: 24,
		backgroundImage: "url(/assets/checked.svg)",
		backgroundRepeat: "no-repeat",
		backgroundSize: "auto",
		backgroundPosition: "center",
		content: '""',
	},
	"input:hover ~ &": {
		// backgroundColor: "#106ba3",
	},
});

export const CustomCheckbox = (props: CheckboxProps) => {
	return (
		<Checkbox
			sx={{
				"&:hover": { bgcolor: "transparent" },
			}}
			disableRipple
			color="default"
			checkedIcon={<CheckedIcon />}
			icon={<Icon />}
			inputProps={{ "aria-label": "Checkbox demo" }}
			{...props}
		/>
	);
};
