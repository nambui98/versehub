import type { NextPage } from "next";
import { useState } from "react";
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
import { ourMission, coreValues } from "@/constants/jobs";
import { getJobList } from "@/utils/spreadsheets";

SwiperCore.use([Pagination, Autoplay]);

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
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
				<Box
					component="img"
					src={'/assets/bg1.svg'}
					sx={{
						pointerEvents: 'none',
						width: 1672.74,
						height: 1242.1,
						top: -317,
						left: 'calc(50% + 48px)',
						opacity: 0.4,
						right: -24,
						transform: 'translateX(-50%) rotate(20.99deg)',
						position: 'absolute',
					}}
				/>
			</Box>
			<Container>
				<Stack spacing={20}>
					<OurMission />
					<CoreValues />
					<Opportunities data={jobs} />
				</Stack>
			</Container>
		</SecondLayout>
	);
};

export default JobsPage;

function OurMission() {
	return (
		<Grid container direction="column">
			<SectionTitle>Our mission</SectionTitle>
			<Stack spacing={2} sx={{ px: 4 }}>
				{ourMission.map((el: string, idx: number) => (
					<Typography key={idx} fontSize={24}>
						{el}
					</Typography>
				))}
			</Stack>
		</Grid>
	);
}

function CoreValues() {
	return (
		<Grid container>
			<Swiper
				// centeredSlides={true}
				// pagination={{"clickable": true}}
				autoplay={{
					delay: 3000,
					disableOnInteraction: false,
				}}
			>
				{coreValues.map((el: any, idx: number) => (
					<SwiperSlide key={idx}>
						<Container>
							<Grid container spacing={4}>
								<Grid item sm={12} md={5}>
									<Grid container justifyContent="center" alignItems="center">
										{idx === 0 && <PeopleAltIcon sx={{ fontSize: 350 }} />}
										{idx === 1 && <CategoryIcon sx={{ fontSize: 350 }} />}
										{idx === 2 && (
											<AutoAwesomeMosaicIcon sx={{ fontSize: 350 }} />
										)}
									</Grid>
								</Grid>
								<Grid item sm={12} md={7}>
									<Typography textAlign="right">Core values</Typography>
									<Typography
										textAlign="right"
										variant="h2"
										fontSize={40}
										mt={1}
										mb={3}
									>
										{el.title}
									</Typography>
									<Stack spacing={1}>
										{el.content.map((text: string, idx: number) => (
											<Typography key={idx} textAlign="right" fontSize={24}>
												{text}
											</Typography>
										))}
									</Stack>
								</Grid>
							</Grid>
						</Container>
					</SwiperSlide>
				))}
			</Swiper>
		</Grid>
	);
}

function Opportunities({ data }: any) {
	const { departments, locations } = countDepartmentsAndLocations(data);
	const [roles, setRoles] = useState([...data]);
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
								sx={{
									color: "#fff",
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
								control={<Checkbox defaultChecked />}
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
