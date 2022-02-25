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
	return (
		<SecondLayout>
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
					mb: 20,
				}}
			>
				<Box
					sx={{
						mt: "140px",
						width: "100%",
						// height: "calc(100vh - 140px)",
					}}
				>
					<img src="/assets/jobs/banner.png" alt="banner" width={"100%"} />
				</Box>
			</Box>
			<Container>
				<Stack spacing={20}>
					<OurMission />
					<CoreValues />
					<Benefits />
				</Stack>
			</Container>
			<Opportunities data={jobs} />
			<Contact />
		</SecondLayout>
	);
};

export default JobsPage;

function OurMission() {
	return (
		<Grid container spacing={8}>
			<Grid item xs={12} md={7}>
				<SectionTitle
					mb={4}
					sx={{
						textAlign: { xs: "center", md: "left" },
					}}
				>
					{MISSION.title}
				</SectionTitle>
				<Stack spacing={1}>
					{MISSION.desc.map((content: string, idx: number) => (
						<Typography key={idx} fontSize={18}>
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
				<SectionTitle
					mb={7}
					sx={{
						textAlign: "center",
					}}
				>
					{VALUES.title}
				</SectionTitle>
			</Grid>
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
								spacing={8}
								sx={{ display: { xs: "flex", md: "none" } }}
							>
								<Grid item xs={12}>
									<Typography
										fontSize={24}
										fontWeight={"bold"}
										mt={1}
										mb={2}
										sx={{
											textTransform: "uppercase",
											textAlign: { xs: "center", md: "left" },
										}}
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
			<Typography variant="h2" fontSize={40} align="center">
				{BENEFIT.title}
			</Typography>
			<Box sx={{ width: "100%", maxWidth: "840px", mt: 3.75, mb: 15 }}>
				<Typography fontSize={18} align="center">
					{BENEFIT.desc}
				</Typography>
			</Box>
			<Box sx={{ width: "100%", maxWidth: "900px" }}>
				<Grid container spacing={5}>
					{BENEFIT.items.map(({ src, desc }, idx) => (
						<Grid key={idx} item xs={6} sm={6} md={4}>
							<Stack
								spacing={2}
								justifyContent={"center"}
								alignItems={"center"}
							>
								<Box
									sx={{
										height: "110px",
										display: "flex",
										flexDirection: "column",
										justifyContent: "end",
									}}
								>
									<img src={src} alt={desc} />
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
				height: { xs: "unset", md: "495px" },
				position: "relative",
				background: "#271067",
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				py: 12.5,
				px: 5,
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
					position: { xs: "unset", md: "absolute" },
					left: { xs: "unset", md: "5%", xl: "15%" },
					bottom: { xs: "unset", md: "25%" },
					width: { xs: "100%", md: "max-content" },
					mb: { xs: 5, md: 0 },
				}}
			>
				<Typography
					fontSize={{ xs: 30, md: 42 }}
					fontWeight={300}
					mb={3}
					align={"center"}
				>
					{CONTACT.title}
				</Typography>
				<Typography fontSize={16} align={"center"}>
					<PhoneOutlinedIcon sx={{ color: "#7B4BE1", mb: -0.75, mr: 1 }} />
					{CONTACT.phone}
					<EmailOutlinedIcon
						sx={{ color: "#7B4BE1", mb: -0.75, mr: 1, ml: 4 }}
					/>
					{CONTACT.email}
				</Typography>
			</Box>
			<Box
				sx={{
					position: { xs: "unset", md: "absolute" },
					right: { xs: "unset", md: "5%", xl: "10%" },
					top: { xs: "unset", md: "-25%" },
					width: "100%",
					maxWidth: "600px",
					height: 0,
					// maxHeight: "589px",
					paddingTop: { xs: "98%", sm: "589px" },
					backgroundImage: "url(/assets/jobs/contact.png)",
					backgroundRepeat: "no-repeat",
					backgroundSize: "cover",
				}}
			/>
		</Box>
	);
}

function Opportunities({ data }: any) {
	const { departments, locations } = countDepartmentsAndLocations(data);
	const [roles, setRoles] = useState([...data]);
	const [currentDepartment, setCurrentDepartment] = useState(
		departments[0].title
	);
	const [currentLocation, setCurrentLocation] = useState(
		locations.map((el) => el.title)
	);

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

	function handleDepartmentClick(title: string) {
		setCurrentDepartment(title);
	}

	function handleDepartmentChange(event: SelectChangeEvent) {
		setCurrentDepartment(event.target.value as string);
	}

	function handleLocationChange(title: string, checked: boolean) {
		if (checked) setCurrentLocation([...currentLocation, title]);
		else
			setCurrentLocation(currentLocation.filter((el: string) => el !== title));
	}

	return (
		<Box
			mt={28}
			px={{ xs: 2, md: 10 }}
			pb={{ xs: 40, md: 30 }}
			sx={{
				backgroundImage: "url(/assets/jobs/opportunities.png)",
				backgroundRepeat: "no-repeat",
				backgroundSize: "auto",
				backgroundPosition: "left bottom",
			}}
		>
			<Grid container>
				<SectionTitle>Opportunities</SectionTitle>
				<Grid container spacing={{ xs: 10, md: 15 }}>
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
						<FormControl fullWidth sx={{ display: { xs: "flex", md: "none" } }}>
							<Select
								value={currentDepartment}
								onChange={handleDepartmentChange}
							>
								{departments.map((el: any) => (
									<MenuItem key={el.title} value={el.title}>
										{el.title} ({el.count})
									</MenuItem>
								))}
							</Select>
						</FormControl>
						<Stack
							spacing={0}
							ml={3.75}
							sx={{ display: { xs: "none", md: "flex" } }}
						>
							{departments.map((el: any) => (
								<Button
									key={el.title}
									variant="text"
									onClick={() => handleDepartmentClick(el.title)}
									sx={{
										backgroundColor:
											currentDepartment === el.title ? "#7000FF" : "unset",
										color: "#fff",
										p:
											currentDepartment === el.title
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
												currentDepartment === el.title
													? "#7000FF"
													: "rgba(170, 0, 172, 0.08)",
										},
									}}
								>
									{el.title} ({el.count})
								</Button>
							))}
						</Stack>
						<Typography
							fontSize={24}
							fontWeight={"bold"}
							letterSpacing={"0.2rem"}
							color={"#564F8B"}
							mb={4}
							mt={10}
						>
							LOCATIONS
						</Typography>
						<FormGroup sx={{ pl: 3.75 }}>
							{locations.map((el: any) => (
								<FormControlLabel
									key={el.title}
									control={
										<CustomCheckbox
											defaultChecked
											onChange={(e) =>
												handleLocationChange(el.title, e.target.checked)
											}
										/>
									}
									label={el.title}
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
							mb={5}
						>
							FEATURED ROLES
						</Typography>
						<Box
							sx={{
								width: "100%",
								// height: "100vh",
								// minHeight: "768px",
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
										<Link href={el.href} passHref>
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

function countDepartmentsAndLocations(data: any) {
	interface Map {
		[key: string]: any;
	}
	let departments: Map = {
		All: { title: "All", count: data.length },
	};
	let locations: Map = {};
	data.forEach((el: any) => {
		if (!departments[el.department]) {
			departments[el.department] = {
				title: el.department,
				count: data.filter((e1: any) => e1.department === el.department).length,
			};
		}
		if (!locations[el.location]) {
			locations[el.location] = { title: el.location };
		}
	});
	return {
		departments: Object.values(departments),
		locations: Object.values(locations),
	};
}
