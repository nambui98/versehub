import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Link from "next/link";
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
	Checkbox,
	List,
	ListItem,
	ListItemText,
	IconButton,
} from "@mui/material";
import PeopleAltIcon from "@mui/icons-material/PeopleAlt";
import CategoryIcon from "@mui/icons-material/Category";
import AutoAwesomeMosaicIcon from "@mui/icons-material/AutoAwesomeMosaic";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { SecondLayout } from "@/layouts/SecondLayout";
import { SectionTitle } from "@/components/SectionTitle";
import { MISSION, VALUES, BENEFIT } from "@/constants/jobs";
import { getJobList } from "@/utils/spreadsheets";

SwiperCore.use([Pagination, Autoplay]);

export async function getStaticProps() {
	const jobs = await getJobList();
	return {
		// props: { jobs },
		// revalidate: 30, // In seconds
		notFound: true,
	};
}

const JobsPage: NextPage = ({ jobs }: any) => {
	return (
		<SecondLayout>
			<Box
				sx={{
					// height: '100vh',
					// minHeight: '100vh',
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
						mt: 11,
						width: "100%",
						height: "100%",
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
					<Opportunities data={jobs} />
				</Stack>
			</Container>
		</SecondLayout>
	);
};

export default JobsPage;

function OurMission() {
	return (
		<Grid container spacing={8}>
			<Grid item sm={12} lg={7}>
				<SectionTitle mb={4}>{MISSION.title}</SectionTitle>
				<Stack spacing={1}>
					{MISSION.desc.map((content: string, idx: number) => (
						<Typography key={idx} fontSize={18}>
							{content}
						</Typography>
					))}
				</Stack>
			</Grid>
			<Grid item sm={12} lg={5}>
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
			<Swiper
				// centeredSlides={true}
				pagination={{ clickable: true }}
				// autoplay={{
				// 	delay: 3000,
				// 	disableOnInteraction: false,
				// }}
			>
				{VALUES.map((el: any, idx: number) => (
					<SwiperSlide key={idx}>
						<Box
							sx={{
								width: "100%",
								background: "#494662",
								borderRadius: 2,
								overflow: "hidden",
							}}
						>
							<Grid container columns={11}>
								<Grid item sm={11} md={5}>
									{/* <img src="/assets/jobs/core_value.png" alt="values" width="100%"/> */}
									<Box
										sx={{
											width: "100%",
											height: "100%",
											minHeight: "450px",
											backgroundImage: "url(/assets/jobs/core_value.png)",
											backgroundRepeat: "no-repeat",
											backgroundSize: "cover",
											backgroundPosition: "right",
										}}
									/>
								</Grid>
								<Grid item sm={11} md={6} px={10} py={12.5}>
									{/* <Typography textAlign="right">Core values</Typography> */}
									<Typography variant="h2" fontSize={40} mt={1} mb={3}>
										{el.title}
									</Typography>
									<Stack spacing={1}>
										{el.content.map((text: string, idx: number) => (
											<Typography key={idx} fontSize={18}>
												{text}
											</Typography>
										))}
									</Stack>
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
								spacing={1}
								justifyContent={"center"}
								alignItems={"center"}
								sx={{ height: "100%" }}
							>
								<img src={src} alt={desc} width="100px" />
								<Typography fontSize={18} align="center">
									{desc.split("\n").join(" ")}
								</Typography>
							</Stack>
						</Grid>
					))}
				</Grid>
			</Box>
		</Grid>
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

	function handleLocationChange(title: string, checked: boolean) {
		if (checked) setCurrentLocation([...currentLocation, title]);
		else
			setCurrentLocation(currentLocation.filter((el: string) => el !== title));
	}

	return (
		<Grid container>
			<SectionTitle>Opportunities</SectionTitle>
			<Grid container>
				<Grid item sm={12} md={6}>
					<Typography fontSize={32} mb={2}>
						Departments
					</Typography>
					<Stack spacing={1}>
						{departments.map((el: any) => (
							<Button
								key={el.title}
								variant="text"
								onClick={() => handleDepartmentClick(el.title)}
								sx={{
									color: currentDepartment === el.title ? "primary" : "#fff",
									p: 0,
									justifyContent: "start",
									textTransform: "none",
									fontSize: 24,
								}}
							>
								{el.title} ({el.count})
							</Button>
						))}
					</Stack>
					<Typography fontSize={32} mt={12} mb={2}>
						Locations
					</Typography>
					<FormGroup>
						{locations.map((el: any) => (
							<FormControlLabel
								key={el.title}
								control={
									<Checkbox
										defaultChecked
										onChange={(e) =>
											handleLocationChange(el.title, e.target.checked)
										}
									/>
								}
								label={el.title}
								sx={{
									"& span": { fontSize: 24 },
								}}
							/>
						))}
					</FormGroup>
				</Grid>
				<Grid item sm={12} md={6}>
					<Typography fontSize={32} mb={2}>
						Featured roles
					</Typography>
					<List>
						{roles.map((el: any) => (
							<ListItem
								key={el.name}
								secondaryAction={
									<Link href={el.href} passHref>
										<IconButton edge="end">
											<ChevronRightIcon />
										</IconButton>
									</Link>
								}
							>
								<ListItemText
									primary={
										<Link href={el.href} passHref>
											<Typography
												fontSize={24}
												fontWeight="bold"
												sx={{ cursor: "pointer" }}
											>
												{el.name}
											</Typography>
										</Link>
									}
									secondary={
										<Typography fontSize={24}>
											<LocationOnOutlinedIcon /> {el.location}
										</Typography>
									}
								/>
							</ListItem>
						))}
					</List>
				</Grid>
			</Grid>
		</Grid>
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
