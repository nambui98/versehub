import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
	Box,
	AppBar,
	Container,
	Toolbar,
	Button,
	Stack,
	Drawer,
	IconButton,
	Link as MuiLink,
	Theme,
	useMediaQuery,
	useScrollTrigger,
} from "@mui/material";
import { CloseIcon, MenuIcon } from "../assets";
import { Footer, Logo } from "../components";
import { secondLayoutNavigation } from "../constants";
import { ArrowRightIcon } from "@/assets/index";

export interface SecondLayoutProps {}

export const SecondLayout: React.FC<SecondLayoutProps> = ({ children }) => {
	return (
		<Box sx={{ minHeight: "100vh", display: "flex", flexDirection: "column" }}>
			<Header />
			<Box component="main" flexGrow={1}>
				{children}
			</Box>
			<Footer />
		</Box>
	);
};

function Header() {
	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});
	const [open, setOpen] = React.useState(false);
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const handleDrawerToggle = () => {
		setOpen(!open);
	};
	const router = useRouter();

	return (
		<>
			<AppBar
				sx={{
					backgroundColor: (theme) =>
						trigger ? theme.palette.background.default : "transparent",
					transition: "background 0.2s ",
				}}
				color="transparent"
				square
				elevation={0}
			>
				<Toolbar
					sx={{
						height: trigger ? "unset" : "140px",
						transition: "all ease .5s",
					}}
				>
					<Container
						maxWidth={false}
						sx={{
							py: trigger ? 2 : 0,
							px: { xs: 5, lg: 10 },
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Logo />
						<Navigation currentPath={router.asPath} />
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							sx={{ display: { sm: "none" } }}
							onClick={() => setOpen(true)}
						>
							<MenuIcon />
						</IconButton>
					</Container>
				</Toolbar>
			</AppBar>
			<Drawer
				variant="temporary"
				open={mobile && open}
				onClose={handleDrawerToggle}
				anchor="right"
				ModalProps={{
					keepMounted: true, // Better open performance on mobile.
				}}
				sx={{
					display: { xs: "block", sm: "block" },
					"& .MuiDrawer-paper": {
						boxSizing: "border-box",
						width: "100vw",
						// background: (theme) => theme.palette.background.default,
						backgroundColor: (theme) => theme.palette.background.default,
						backgroundImage: 'url("/assets/bg3.svg")',
						backgroundRepeat: "no-repeat",
						backgroundSize: "cover",
						backgroundPosition: "bottom",
					},
				}}
			>
				<Container sx={{ px: 0 }}>
					<Toolbar
						sx={{ justifyContent: "space-between", mb: 12.5, px: 4, pt: 4 }}
					>
						<Logo />
						<IconButton
							color="inherit"
							aria-label="close drawer"
							edge="end"
							onClick={() => setOpen(false)}
						>
							<CloseIcon />
						</IconButton>
					</Toolbar>
					<Navigation currentPath={router.asPath} mobile={mobile} />
				</Container>
			</Drawer>
		</>
	);
}

function Navigation({ mobile, currentPath }: any) {
	return (
		<Stack
			// direction={{ xs: "column", md: "row" }}
			direction={mobile ? "column" : "row"}
			spacing={{ xs: 2, sm: 6.25 }}
			sx={{
				display: mobile ? "flex" : { xs: "none", sm: "flex" },
			}}
		>
			{secondLayoutNavigation.map(({ label, href }) => (
				<Link key={label} href={href} passHref>
					{mobile ? (
						<MuiLink
							color="#fff"
							sx={{
								display: "flex",
								alignItems: "center",
								fontSize: 24,
								lineHeight: "28px",
								py: 2,
								px: 6,
								gap: 3,
								backgroundColor: href === currentPath ? "#7000FF" : "unset",
								width: "100%",
							}}
						>
							{href === currentPath ? (
								<ArrowRightIcon />
							) : (
								<Box minWidth={24} />
							)}
							<span>{label}</span>
						</MuiLink>
					) : (
						<MuiLink
							sx={{
								color:
									href === currentPath ? "#A89AFF" : "rgba(255, 255, 255, 0.8)",
								fontSize: 18,
								lineHeight: "21.09px",
								textDecoration:
									href === currentPath ? "underline #8470FF 3px" : "none",
								textUnderlinePosition: "under",
							}}
						>
							{label}
						</MuiLink>
					)}
				</Link>
			))}
		</Stack>
	);
}
