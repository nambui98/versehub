import React from "react";
import Link from "next/link";
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
	console.log(router)
	if (type === "h") {
		return (
			<Box
				sx={{
					display: { xs: "none", sm: "none", md: "flex" },
					alignItems: "center",
				}}
			>
				{items.map(({ label, value }) => (
					<Link key={value} href={value} passHref>
						<MuiLink
							onClick={handleClick(value)}
							sx={{
								px: 3.25,
								color:
									value === activeState
										? "#3C126D"
										: "#5A6178",
								fontSize: 16,
								lineHeight: "20px",
								fontWeight: '600',
								position: 'relative',
								// textDecoration:
								// 	value === activeState ? "underline #8470FF 3px" : "none",
								// textUnderlinePosition: "under",
							}}
						>
							{label}
							<Box sx={{
								display: value === router.asPath ? 'block' : 'none',
								position: "absolute",
								width: "100%",
								height: '4px',
								background: '#5727A3',
								left: 0,
								bottom: '-30px'
							}}></Box>
						</MuiLink>
					</Link>
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
				<Link key={value} href={value} passHref>
					<MuiLink
						onClick={handleClick(value)}
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
				</Link>
			))}
		</Box>
	);
};
