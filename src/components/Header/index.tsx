import React from "react";
import { navigations as items } from "@/constants/index";
import throttle from "lodash/throttle";
import {
	Box,
	AppBar,
	Container,
	Tabs,
	Tab,
	useScrollTrigger,
	IconButton,
	useMediaQuery,
	Theme,
	Toolbar,
	Drawer,
	Link,
} from "@mui/material";
import { Logo } from "..";

import { CloseIcon, MenuIcon } from "@/assets/index";
import { Navigation } from "./Navigation";
export interface HeaderProps {}

const noop = () => {};

function useThrottledOnScroll(callback: any, delay: number) {
	const throttledCallback = React.useMemo(
		() => (callback ? throttle(callback, delay) : noop),
		[callback, delay]
	);

	React.useEffect(() => {
		if (throttledCallback === noop) {
			return undefined;
		}

		window.addEventListener("scroll", throttledCallback);
		return () => {
			window.removeEventListener("scroll", throttledCallback);
			// @ts-ignore
			throttledCallback.cancel();
		};
	}, [throttledCallback]);
}

export const Header: React.FC<HeaderProps> = () => {
	const [activeState, setActiveState] = React.useState<string | null>();

	const [open, setOpen] = React.useState(false);

	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const clickedRef = React.useRef<any>(false);
	const unsetClickedRef = React.useRef<any>(null);
	const findActiveIndex = React.useCallback(() => {
		if (clickedRef.current) {
			return;
		}

		let active;

		for (let i = items.length - 1; i >= 0; i -= 1) {
			// No hash if we're near the top of the page
			if (document.documentElement.scrollTop < 200) {
				active = null;
				break;
			}

			const item = items[i];
			const node = document.getElementById(item.value);

			if (
				node &&
				node.offsetTop <
					document.documentElement.scrollTop +
						document.documentElement.clientHeight / 8
			) {
				active = item.value;
				break;
			}
		}

		if (activeState !== active) {
			setActiveState(active);
		}
	}, [activeState, items]);

	// Corresponds to 10 frames at 60 Hz
	useThrottledOnScroll(findActiveIndex, 166);

	const trigger = useScrollTrigger({
		disableHysteresis: true,
		threshold: 200,
	});

	const handleClick = (hash: string) => (event: any) => {
		// Ignore click for new tab/new window behavior
		if (
			event.defaultPrevented ||
			event.button !== 0 || // ignore everything but left-click
			event.metaKey ||
			event.ctrlKey ||
			event.altKey ||
			event.shiftKey
		) {
			return;
		}

		// Used to disable findActiveIndex if the page scrolls due to a click
		clickedRef.current = true;
		unsetClickedRef.current = setTimeout(() => {
			clickedRef.current = false;
		}, 500);

		if (activeState !== hash) {
			setActiveState(hash);
			setOpen(false);
		}
	};
	React.useEffect(
		() => () => {
			clearTimeout(unsetClickedRef.current);
		},
		[]
	);

	const handleDrawerToggle = () => {
		setOpen(!open);
	};

	return (
		<>
			<AppBar
				sx={{
					background: (theme) =>
						trigger
							? theme.palette.background.default
							: // ? `linear-gradient(${theme.palette.background.default}, transparent)`
							  "transparent",
					transition: "background 0.2s ",
				}}
				color="transparent"
				square
				elevation={0}
			>
				<Toolbar>
					<Container
						disableGutters
						maxWidth={false}
						sx={{
							// py: { xs: 2, md: 5 },
							py: 0,
							px: { xs: 5, lg: 10 },
							display: "flex",
							justifyContent: "space-between",
							// gap: 2,
						}}
					>
						<Logo />
						<Navigation
							handleClick={handleClick}
							activeState={activeState}
							type="h"
						/>

						{/* <div style={{ width: 155.648 }} /> */}
						<IconButton
							color="inherit"
							aria-label="open drawer"
							edge="end"
							sx={{ display: { md: "none" } }}
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
						sx={{
							justifyContent: "space-between",
							mb: 12.5,
							px: 4,
							pt: 4,
						}}
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

					<Navigation
						handleClick={handleClick}
						activeState={activeState}
						type="v"
					/>
				</Container>
			</Drawer>
		</>
	);
};
