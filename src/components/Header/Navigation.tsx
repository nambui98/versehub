import React from "react";
import { useRouter } from "next/router";
import { Link as MuiLink, Box } from "@mui/material";
import { navigations as items } from "@/constants/index";
import { ArrowRightIcon } from "@/assets/index";

export interface NavigationProps {
	activeState?: string | null;
	type: "h" | "v";

	handleClick: (hash: string) => (event: any) => any;
}

export const Navigation: React.FC<NavigationProps> = ({
	type,
	activeState,
	handleClick,
}) => {
	const router = useRouter();

	if (type === "h") {
		return (
			<Box
				sx={{
					display: { xs: "none", sm: "none", md: "flex" },
					alignItems: "center",
				}}
			>
				{items.map(({ label, value }) => (
					<MuiLink
						href={value === "jobs" ? `#${activeState || ""}` : `#${value}`}
						onClick={() =>
							value === "jobs" ? router.push("/jobs") : handleClick(value)
						}
						sx={{
							px: 3.25,
							color:
								value === activeState ? "#A89AFF" : "rgba(255, 255, 255, 0.8)",
							fontSize: 18,
							lineHeight: "21.09px",
							textDecoration:
								value === activeState ? "underline #8470FF 3px" : "none",
							textUnderlinePosition: "under",
						}}
						key={value}
					>
						{label}
					</MuiLink>
				))}
			</Box>
		);
	}

	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "flex-start",
				justifyContent: "stretch",
				// gap: 4,
			}}
		>
			{items.map(({ label, value }) => (
				// <Button
				// 	key={value}
				// 	variant="text"
				// 	href={`#${value}`}
				// 	onClick={handleClick(value)}
				// 	sx={{
				//     // display: 'flex',
				//     // alignItems: 'center',
				// 		color: '#fff',
				//     fontSize: 24,
				//     lineHeight: '28px',
				//     pl: 4,
				//     gap: 3,
				// 		background: activeState ? '#7000FF' : 'transparent',
				//   }}
				// >
				// 	{value === activeState ? <ArrowRightIcon /> : <Box minWidth={24} />}
				// 	<span>{label}</span>
				// </Button>
				<MuiLink
					// href={`#${value}`}
					onClick={handleClick(value)}
					href={value === "jobs" ? "/jobs" : `#${value}`}
					// onClick={() =>
					// 	value === "jobs" ? router.push("/jobs") : handleClick(value)
					// }
					color="#fff"
					sx={{
						display: "flex",
						alignItems: "center",
						fontSize: 24,
						lineHeight: "28px",
						py: 2,
						px: 6,
						gap: 3,
						backgroundColor: value === activeState ? "#7000FF" : "unset",
						width: "100%",
					}}
					key={value}
				>
					{value === activeState ? <ArrowRightIcon /> : <Box minWidth={24} />}
					<span>{label}</span>
				</MuiLink>
			))}
		</Box>
	);
};
