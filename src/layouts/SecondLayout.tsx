import {
  Box,
  AppBar,
  Container,
  Toolbar,
	Button,
	Stack,
	Drawer,
  IconButton,
  Theme,
  useMediaQuery,
  useScrollTrigger,
} from '@mui/material';
import Link from 'next/link';
import React from 'react';
import { CloseIcon, MenuIcon } from '../assets';
import { Footer, Logo } from '../components';
import { secondLayoutNavigation } from '../constants';


export interface SecondLayoutProps {}

export const SecondLayout: React.FC<SecondLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
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
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));
	const handleDrawerToggle = () => {
    setOpen(!open);
  };

	return (
		<>
			<AppBar
				sx={{
					backgroundColor: (theme) => trigger ? theme.palette.background.default : 'transparent',
					transition: 'background 0.2s ',
				}}
				color="transparent"
				square
				elevation={0}
			>
				<Toolbar>
					<Container
						sx={{
							display: 'flex',
							justifyContent: 'space-between',
							gap: 2,
						}}
					>
						<Logo />
						<Navigation />
						<IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              sx={{ display: { sm: 'none' } }}
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
					display: { xs: 'block', sm: 'block' },
					'& .MuiDrawer-paper': {
						boxSizing: 'border-box',
						width: '100vw',
						background: (theme) => theme.palette.background.default,
					},
				}}
			>
				<Container>
					<Toolbar sx={{ justifyContent: 'space-between', mb: 8 }}>
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
					<Navigation mobile={mobile} />
				</Container>
			</Drawer>
		</>
	);
}

function Navigation({ mobile }: any) {
	return (
		<Stack 
			direction={mobile ? "column" : "row"} 
			spacing={{xs: 2, sm: 4, md: 8, lg: 12}}
			sx={{
				display: mobile ? 'flex' : { xs: 'none', sm: 'flex' }
			}}
		>
			{secondLayoutNavigation.map((el: any) => (
				<Link key={el.label} href={el.href} passHref>
					<Button variant="text" fullWidth={mobile} sx={{
						color: "#fff",
						fontSize: "24px",
						textTransform: "none",
						borderRadius: 0,
						'&:hover': {
							background: "transparent"
						}
					}}>
						{el.label}
					</Button>
				</Link>
			))}
		</Stack>
	);
}
