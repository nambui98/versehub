import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import {
	Container,
	Typography,
	Box,
	Grid,
	Stack,
	Button,
	FormGroup,
	FormControlLabel,
	FormControl,
	Select,
	SelectChangeEvent,
	MenuItem,
	List,
	ListItem,
	ListItemText,
	ListItemIcon,
	ListItemButton,
	Theme,
	useMediaQuery,
} from "@mui/material";
import FmdGoodOutlinedIcon from "@mui/icons-material/FmdGoodOutlined";
import ArrowForwardIosOutlinedIcon from "@mui/icons-material/ArrowForwardIosOutlined";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";

import { SecondLayout } from "@/layouts/SecondLayout";
import { SectionTitle, CustomCheckbox } from "@/components/index";
import { MISSION, VALUES, BENEFIT, CONTACT } from "@/constants/jobs";
import { getJobList } from "@/utils/sheets.google";

// SwiperCore.use([Pagination, Autoplay]);

export async function getStaticProps() {
	const jobs = await getJobList();
	return {
		props: { jobs },
		revalidate: 30, // In seconds
	};
}

const JobsPage: NextPage = ({ jobs }: any) => {
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));

	return (
		<SecondLayout>
			<Banner />
			{mobile && <OpportunitiesMobile data={jobs} />}
			<Container sx={{ mb: 20 }}>
				<OurMission />
			</Container>
			{!mobile && (
				<Container sx={{ mb: 20 }}>
					<CoreValues />
				</Container>
			)}
			{mobile && <CoreValues />}
			<Container sx={{ my: 20 }}>
				<Benefits />
			</Container>
			{!mobile && <OpportunitiesDesktop data={jobs} />}
			<Contact />
		</SecondLayout>
	);
};

export default JobsPage;

function Banner() {
	return (
		<Box
			sx={{
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				position: "relative",
				overflow: "hidden",
				backgroundImage: "url(/assets/bg3.svg)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "bottom",
				mb: { xs: 13, sm: 20 },
			}}
		>
			<Box
				sx={{
					mt: "140px",
					width: "100%",
				}}
			>
				<img src="/assets/jobs/banner.webp" alt="banner" width={"100%"} />
			</Box>
		</Box>
	);
}

function OurMission() {
	return (
		<Grid container spacing={8}>
			<Grid item xs={12} md={7}>
				<Stack px={{ xs: 5, md: 0 }}>
					<SectionTitle mb={4} fontSize={{ xs: 27, sm: 40 }}>
						{MISSION.title}
					</SectionTitle>
				</Stack>
				<Stack spacing={1} px={{ xs: 5, md: 0 }}>
					{MISSION.desc.map((content: string, idx: number) => (
						<Typography
							key={idx}
							fontSize={{ xs: 16, sm: 18 }}
							fontWeight={{ xs: 300, sm: 500 }}
						>
							{content}
						</Typography>
					))}
				</Stack>
			</Grid>
			<Grid item xs={12} md={5}>
				<Grid container justifyContent="center" alignItems="center">
					<img src={MISSION.src} alt={MISSION.title} width="100%" />
				</Grid>
			</Grid>
		</Grid>
	);
}

function CoreValues() {
	return (
		<Grid container>
			<Grid item xs={12}>
				<Stack px={{ xs: 6, md: 0 }}>
					<SectionTitle
						fontSize={{ xs: 27, sm: 40 }}
						mb={{ xs: 3.5, md: 7 }}
						sx={{
							textAlign: { xs: "left", md: "center" },
						}}
					>
						{VALUES.title}
					</SectionTitle>
				</Stack>
			</Grid>
			<Grid item xs={12}>
				<Swiper
					modules={[Pagination, Autoplay]}
					// centeredSlides={true}
					pagination={{ clickable: true }}
					autoplay={{
						delay: 5000,
						disableOnInteraction: false,
					}}
				>
					{VALUES.items.map(({ title, image, content }) => (
						<SwiperSlide key={title}>
							<Box
								sx={{
									width: "100%",
									background: { xs: "none", md: "#494662" },
									borderRadius: { xs: 0, md: 2 },
									overflow: "hidden",
								}}
							>
								<Grid
									container
									columns={11}
									sx={{ display: { xs: "none", md: "flex" } }}
								>
									<Grid item sm={11} md={5}>
										<Box
											sx={{
												width: "100%",
												height: "100%",
												minHeight: "450px",
												backgroundImage: `url(${image})`,
												backgroundRepeat: "no-repeat",
												backgroundSize: "cover",
												backgroundPosition: "right",
											}}
										/>
									</Grid>
									<Grid
										item
										sm={11}
										md={6}
										px={{ md: 4, lg: 7, xl: 10 }}
										py={{ md: 6, lg: 9, xl: 12.5 }}
									>
										<Typography
											fontSize={24}
											fontWeight={"bold"}
											mt={1}
											mb={2}
											sx={{ textTransform: "uppercase" }}
										>
											{title}
										</Typography>
										<Stack spacing={1}>
											{content.map((text: string, idx: number) => (
												<Typography key={idx} fontSize={18}>
													{text}
												</Typography>
											))}
										</Stack>
									</Grid>
								</Grid>
								<Grid
									container
									spacing={3}
									sx={{ display: { xs: "flex", md: "none" } }}
								>
									<Grid item xs={12} height={{ xs: 355, sm: 300 }}>
										<Typography
											fontSize={{ xs: 18, sm: 24 }}
											fontWeight={"bold"}
											mt={1}
											mb={2}
											mx={6}
											sx={{
												textTransform: "uppercase",
												textAlign: "left",
											}}
										>
											{title}
										</Typography>
										<Stack spacing={1} px={6}>
											{content.map((text: string, idx: number) => (
												<Typography
													key={idx}
													fontSize={{ xs: 16, sm: 18 }}
													fontWeight={{ xs: 300, sm: 500 }}
												>
													{text}
												</Typography>
											))}
										</Stack>
									</Grid>
									<Grid item xs={12}>
										<Grid container justifyContent="center" alignItems="center">
											<img src={image} alt={title} width="100%" />
										</Grid>
									</Grid>
								</Grid>
							</Box>
						</SwiperSlide>
					))}
				</Swiper>
			</Grid>
		</Grid>
	);
}

function Benefits() {
	return (
		<Grid
			container
			direction={"column"}
			justifyContent={"center"}
			alignItems={"center"}
		>
			<Box sx={{ width: "100%", px: { xs: 5, md: 0 } }}>
				<SectionTitle
					fontSize={{ xs: 27, sm: 40 }}
					sx={{
						textAlign: { xs: "left", md: "center" },
					}}
					mb={{ xs: 2, md: "unset" }}
				>
					{BENEFIT.title}
				</SectionTitle>
			</Box>
			<Box
				sx={{
					width: "100%",
					maxWidth: "840px",
					px: { xs: 5, md: 0 },
					mt: 3.75,
					mb: { xs: 10, md: 15 },
				}}
			>
				<Typography
					fontSize={{ xs: 16, sm: 18 }}
					fontWeight={{ xs: 300, md: 500 }}
					sx={{
						textAlign: { xs: "left", md: "center" },
					}}
				>
					{BENEFIT.desc}
				</Typography>
			</Box>
			<Box sx={{ width: "100%", maxWidth: "900px", px: { xs: 5, md: 0 } }}>
				<Grid container spacing={{ xs: 10, md: 5 }}>
					{BENEFIT.items.map(({ src, desc }, idx) => (
						<Grid key={idx} item xs={6} sm={6} md={4}>
							<Stack
								spacing={2}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<Box
									sx={{
										height: { xs: "55px", md: "110px" },
										display: "flex",
										flexDirection: "column",
										justifyContent: "end",
										px: { xs: 2, md: 0 },
									}}
								>
									<img src={src} alt={desc} width="100%" />
								</Box>
								<Box
									sx={{
										height: "40px",
										display: "flex",
										flexDirection: "column",
										justifyContent: "start",
									}}
								>
									<Typography
										fontSize={{ xs: 14, md: 18 }}
										lineHeight={1.2}
										align="center"
										fontWeight={{ xs: 300, md: 500 }}
									>
										{desc.split("\n").map((el, idx) => (
											<span key={idx}>
												{el}
												<br />
											</span>
										))}
									</Typography>
								</Box>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
	);
}

function Contact() {
	return (
		<Box
			sx={{
				width: "100%",
				height: { md: "495px" },
				position: "relative",
				background: "#271067",
				py: { xs: 12, sm: 20, md: 12.5 },
				px: 5,
				mt: { xs: 20, md: 0 },
			}}
		>
			<Box
				sx={{
					display: { xs: "none", md: "block" },
					position: "absolute",
					left: 0,
					top: 0,
					width: "100%",
					height: "100%",
					backgroundImage: "url(/assets/jobs/contact_bg.png)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "auto",
					backgroundPosition: "left top",
					mixBlendMode: "screen",
				}}
			/>
			<Box
				sx={{
					display: { xs: "none", md: "block" },
					position: "absolute",
					right: 0,
					top: 0,
					width: "100%",
					height: "100%",
					background:
						"linear-gradient(90deg, rgba(44, 26, 98, 0) 4.93%, #2C1A62 55.54%)",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					right: { xs: "2rem", md: "5%", xl: "10%" },
					top: { xs: "-20%", sm: "-25%" },
					width: { xs: "40%", md: "100%" },
					maxWidth: "600px",
					height: 0,
					paddingTop: { xs: "40%", md: "589px" },
					backgroundImage: "url(/assets/jobs/contact.png)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			/>
			<Box
				sx={{
					position: "absolute",
					left: { xs: "2rem", md: "5%", xl: "15%" },
					bottom: { xs: "20%", sm: "35%", md: "25%" },
					width: { md: "max-content" },
					// mb: { xs: 5, md: 0 },
				}}
			>
				<Box sx={{ width: { xs: "50%", sm: "unset" } }}>
					<Typography
						fontSize={{ xs: 18, sm: 28, md: 42 }}
						fontWeight={300}
						mb={3}
						sx={{
							textAlign: { xs: "left", md: "center" },
						}}
					>
						{CONTACT.title}
					</Typography>
				</Box>
				<Typography
					fontSize={{ xs: 14, sm: 16 }}
					sx={{
						textAlign: { xs: "left", md: "center" },
						fontWeight: { xs: 300, sm: "normal" },
					}}
				>
					<PhoneOutlinedIcon
						sx={{
							color: "#7B4BE1",
							mb: { xs: -0.5, sm: -0.75 },
							mr: { xs: 0.5, sm: 1 },
							fontSize: { xs: 18, sm: "1.5rem" },
						}}
					/>
					{CONTACT.phone}
					<EmailOutlinedIcon
						sx={{
							color: "#7B4BE1",
							mb: { xs: -0.5, sm: -0.75 },
							mr: { xs: 0.5, sm: 1 },
							ml: 5,
							fontSize: { xs: 18, sm: "1.5rem" },
						}}
					/>
					{CONTACT.email}
				</Typography>
			</Box>
		</Box>
	);
}

function OpportunitiesDesktop({ data, sxProp }: any) {
	const [roles, setRoles] = useState([...data]);
	let departments: string[] = ["All"];
	let locations: string[] = [];
	data.forEach(({ department, location }: any) => {
		if (!departments.includes(department)) departments.push(department);
		if (!locations.includes(location)) locations.push(location);
	});
	const [currentLocation, setCurrentLocation] = useState(locations);
	const [currentDepartment, setCurrentDepartment] = useState(departments[0]);

	useEffect(() => {
		setRoles(
			data.filter(
				(el: any) =>
					(currentDepartment === "All" ||
						el.department === currentDepartment) &&
					currentLocation.includes(el.location)
			)
		);
		return () => {};
	}, [data, currentDepartment, currentLocation]);

	function countDepartment(title: string) {
		if (title === "All") return data.length;
		return data.filter(
			(el: any) =>
				el.department === title && currentLocation.includes(el.location)
		).length;
	}

	function handleDepartmentClick(title: string) {
		setCurrentDepartment(title);
	}

	function handleLocationChange(title: string, checked: boolean) {
		if (checked) setCurrentLocation([...currentLocation, title]);
		else
			setCurrentLocation(currentLocation.filter((el: string) => el !== title));
	}

	return (
		<Box
			mt={28}
			px={10}
			pb={30}
			sx={{
				backgroundImage: "url(/assets/jobs/opportunities.png)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto",
				backgroundPosition: "left bottom",
				...sxProp,
			}}
		>
			<Grid container>
				<SectionTitle fontSize={40} mb={6.5}>
					Opportunities
				</SectionTitle>
				<Grid container spacing={15}>
					<Grid item xs={12} md={6} lg={4}>
						<Typography
							fontSize={24}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={6}
						>
							DEPARTMENTS
						</Typography>
						<Stack spacing={0} ml={3.75}>
							{departments.map((title: string) => (
								<Button
									key={title}
									variant="text"
									onClick={() => handleDepartmentClick(title)}
									sx={{
										backgroundColor:
											currentDepartment === title ? "#7000FF" : "unset",
										color: "#fff",
										p:
											currentDepartment === title
												? "14px 20px 10px"
												: "14px 20px 10px 0",
										justifyContent: "start",
										textTransform: "none",
										fontSize: 18,
										borderRadius: 0,
										clipPath:
											"polygon(0% 0%, 95% 0%, 100% 50%, 95% 100%, 0% 100%)",
										transition: "all ease .25s",
										"&:hover": {
											backgroundColor:
												currentDepartment === title
													? "#7000FF"
													: "rgba(170, 0, 172, 0.08)",
										},
									}}
								>
									{title} ({countDepartment(title)})
								</Button>
							))}
						</Stack>
						<Typography
							fontSize={24}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={6}
							mt={10}
						>
							LOCATIONS
						</Typography>
						<FormGroup sx={{ pl: 3.75 }}>
							{locations.map((title: string) => (
								<FormControlLabel
									key={title}
									control={
										<CustomCheckbox
											defaultChecked
											onChange={(e) =>
												handleLocationChange(title, e.target.checked)
											}
										/>
									}
									label={title}
									sx={{
										"& .MuiFormControlLabel-label": {
											fontSize: 18,
											color: "#9F53FF",
											ml: "18px",
										},
									}}
								/>
							))}
						</FormGroup>
					</Grid>
					<Grid item xs={12} md={6} lg={8}>
						<Typography
							fontSize={24}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={6}
						>
							FEATURED ROLES
						</Typography>
						<Box
							sx={{
								width: "100%",
								height: { sm: "700px" },
								overflowY: "scroll",
								"&::-webkit-scrollbar": {
									width: "8px",
								},
								"&::-webkit-scrollbar-thumb": {
									background: "rgba(255, 255, 255, 0.15)",
									borderRadius: "30px",
								},
							}}
						>
							<List
								sx={{
									p: 0,
									"& li": {
										py: "5px",
										px: 0,
									},
								}}
							>
								{roles.map((el: any) => (
									<ListItem key={el.name}>
										<Link href={`${el.href}#overview`} passHref>
											<ListItemButton
												sx={{
													background: "rgba(138, 171, 255, 0.1)",
													borderRadius: "16px",
													"&:hover": {
														background: "rgba(138, 171, 255, 0.2)",
													},
													p: 0,
												}}
											>
												<ListItemText
													primary={
														<Typography
															fontSize={{ xs: 20, sm: 24 }}
															fontWeight="bold"
															sx={{ cursor: "pointer" }}
														>
															{el.name}
														</Typography>
													}
													secondary={
														<Typography fontSize={{ xs: 14, sm: 18 }}>
															<FmdGoodOutlinedIcon
																sx={{
																	fontSize: { xs: 18 },
																	mr: 1,
																	mb: "-4px",
																	mt: 1,
																}}
															/>
															<span>{el.location}</span>
														</Typography>
													}
													sx={{
														my: 0,
														px: { xs: 4, sm: 6 },
														py: { xs: 3, sm: 4 },
														borderRight: "1px solid #0F000F",
													}}
												/>
												<ListItemIcon
													sx={{
														minWidth: "unset",
														color: "rgba(255, 255, 255, 0.1)",
														px: 2,
													}}
												>
													<ArrowForwardIosOutlinedIcon />
												</ListItemIcon>
											</ListItemButton>
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}

function OpportunitiesMobile({ data, sxProp }: any) {
	const [roles, setRoles] = useState([...data]);
	let departments: string[] = ["All"];
	let locations: string[] = ["All"];
	data.forEach(({ department, location }: any) => {
		if (!departments.includes(department)) departments.push(department);
		if (!locations.includes(location)) locations.push(location);
	});
	const [currentLocation, setCurrentLocation] = useState(locations[0]);
	const [currentDepartment, setCurrentDepartment] = useState(departments[0]);

	useEffect(() => {
		setRoles(
			data.filter(
				(el: any) =>
					(currentDepartment === "All" ||
						el.department === currentDepartment) &&
					(currentLocation === "All" || el.location === currentLocation)
			)
		);
		return () => {};
	}, [data, currentDepartment, currentLocation]);

	function countDepartment(title: string) {
		if (title === "All") return data.length;
		return data.filter(
			(el: any) =>
				el.department === title &&
				(currentLocation === "All" || el.location === currentLocation)
		).length;
	}

	function handleDepartmentChange(event: SelectChangeEvent) {
		setCurrentDepartment(event.target.value as string);
	}

	function handleLocationChange(event: SelectChangeEvent) {
		setCurrentLocation(event.target.value as string);
	}

	return (
		<Box
			mb={20}
			px={2}
			pb={40}
			sx={{
				backgroundImage: "url(/assets/jobs/opportunities.png)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto",
				backgroundPosition: "left bottom",
				...sxProp,
			}}
		>
			<Grid container>
				<SectionTitle fontSize={27} mb={5} mx={4}>
					Opportunities
				</SectionTitle>
				<Grid container spacing={10}>
					<Grid item xs={12} md={6} lg={4}>
						<Typography
							fontSize={16}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={3.75}
							mx={4}
						>
							DEPARTMENTS
						</Typography>
						<Box sx={{ px: 4 }}>
							<FormControl fullWidth>
								<Select
									value={currentDepartment}
									onChange={handleDepartmentChange}
								>
									{departments.map((title: string) => (
										<MenuItem key={title} value={title}>
											{title} ({countDepartment(title)})
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
						<Typography
							fontSize={16}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={3.75}
							mt={7}
							mx={4}
						>
							LOCATIONS
						</Typography>
						<Box sx={{ px: 4 }}>
							<FormControl fullWidth>
								<Select value={currentLocation} onChange={handleLocationChange}>
									{locations.map((title: string) => (
										<MenuItem key={title} value={title}>
											{title}
										</MenuItem>
									))}
								</Select>
							</FormControl>
						</Box>
					</Grid>
					<Grid item xs={12} md={6} lg={8}>
						<Typography
							fontSize={16}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={2}
							mx={4}
						>
							FEATURED ROLES
						</Typography>
						<Box
							sx={{
								width: "100%",
								px: 2,
							}}
						>
							<List
								sx={{
									p: 0,
									"& li": {
										py: "5px",
										px: 0,
									},
								}}
							>
								{roles.map((el: any) => (
									<ListItem key={el.name}>
										<Link href={`${el.href}#overview`} passHref>
											<ListItemButton
												sx={{
													// background: "rgba(138, 171, 255, 0.1)",
													borderRadius: "16px",
													"&:hover": {
														background: "rgba(138, 171, 255, 0.2)",
													},
													p: 0,
												}}
											>
												<ListItemText
													primary={
														<Typography
															fontSize={{ xs: 20, sm: 24 }}
															fontWeight="bold"
															sx={{ cursor: "pointer" }}
														>
															{el.name}
														</Typography>
													}
													secondary={
														<Typography fontSize={{ xs: 14, sm: 18 }}>
															<FmdGoodOutlinedIcon
																sx={{
																	fontSize: { xs: 18 },
																	mr: 1,
																	mb: "-4px",
																	mt: 1,
																}}
															/>
															<span>{el.location}</span>
														</Typography>
													}
													sx={{
														my: 0,
														px: { xs: 4, sm: 6 },
														py: { xs: 3, sm: 4 },
														borderRight: "1px solid #0F000F",
													}}
												/>
												<ListItemIcon
													sx={{
														minWidth: "unset",
														color: "rgba(255, 255, 255, 0.1)",
														px: 2,
													}}
												>
													<ArrowForwardIosOutlinedIcon />
												</ListItemIcon>
											</ListItemButton>
										</Link>
									</ListItem>
								))}
							</List>
						</Box>
					</Grid>
				</Grid>
			</Grid>
		</Box>
	);
}
