import type { NextPage } from "next";
import React, { useState } from "react";
import {
	Container,
	Typography,
	Box,
	Grid,
	Stack,
	Button,
	Tabs,
	Tab,
	Theme,
	useMediaQuery,
} from "@mui/material";

import { SecondLayout } from "@/layouts/SecondLayout";
import { SectionTitle, ApplyForm, useSmoothScroll } from "@/components/index";
import { getJobIds, getJobById } from "@/utils/sheets.google";

export async function getStaticPaths() {
	const jobs = await getJobIds();
	const paths = jobs.map(({ id }) => ({ params: { id: `${id}` } }));
	return {
		paths,
		fallback: false,
	};
}

export async function getStaticProps({ params }: any) {
	const job = await getJobById(params.id);
	// console.log(job);
	return {
		props: { job },
	};
}

const JobIdPage: NextPage = ({ job }: any) => {
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	const [tabIndex, setTabIndex] = useState(0);
	useSmoothScroll();

	const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
		setTabIndex(newValue);
	};

	return (
		<SecondLayout>
			<Banner />
			{/* <Box id="overview" sx={{ width: "100%", height: "1px" }} /> */}
			<JobHeader title={job.name} subtitle={job.location} mobile={mobile} />
			<Container sx={{ mt: 15, px: { md: 25 } }} id="apply">
				<JobTabs
					currentTabIndex={tabIndex}
					onTabChange={handleTabChange}
					mobile={mobile}
				/>
				<Box sx={{ width: "100%" }}>
					<TabPanel value={tabIndex} index={0}>
						<Overview
							desc={job.description}
							responsibilities={job.responsibilities}
							needRequirements={job.needRequirements}
							loveRequirements={job.loveRequirements}
							offers={job.offers}
							handleClick={() => setTabIndex(2)}
						/>
					</TabPanel>
					<TabPanel value={tabIndex} index={2}>
						<ApplyForm jobName={job.name} />
					</TabPanel>
				</Box>
			</Container>
		</SecondLayout>
	);
};

export default JobIdPage;

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
				mb: 20,
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

function JobHeader({ title, subtitle, mobile }: any) {
	return (
		<Box
			sx={{
				width: "100%",
				borderBottom: "2px solid rgba(255, 255, 255, 0.1)",
			}}
		>
			<Container sx={{ px: { md: 25 } }}>
				<Stack spacing={0} alignItems={mobile ? "center" : "start"}>
					<Typography
						fontSize={{ xs: 24, sm: 40 }}
						fontWeight={300}
						color="#fff"
						lineHeight={1}
					>
						<Box
							component="span"
							sx={{ mt: -14, position: "absolute" }}
							id="overview"
						/>
						{title}
					</Typography>
					<Typography
						fontSize={{ xs: 18, sm: 24 }}
						fontWeight={300}
						color="#fff"
					>
						{subtitle}
					</Typography>
					<Box
						sx={{
							background: "#7000FF",
							width: "150px",
							height: "5px",
							mt: 2,
						}}
					/>
				</Stack>
			</Container>
		</Box>
	);
}

function JobTabs({ currentTabIndex, onTabChange, mobile }: any) {
	return (
		<Box sx={{ width: "100%", mt: 2 }}>
			<Tabs
				centered={mobile}
				value={currentTabIndex}
				onChange={onTabChange}
				TabIndicatorProps={{
					style: {
						display: "none",
					},
				}}
				sx={{
					"& .Mui-selected": {
						color: "#957AFF !important",
					},
				}}
			>
				<Tab
					label="Role Overview"
					sx={{
						color: "#3E3962",
						fontSize: { xs: 18, sm: 24 },
						fontWeight: 700,
						pr: 4,
						pl: 0,
					}}
				/>
				<Box
					sx={{
						width: "2px",
						height: "25px",
						margin: "auto 0",
						background: "#3E3962",
					}}
				></Box>
				<Tab
					label="Application"
					sx={{
						color: "#3E3962",
						fontSize: { xs: 18, sm: 24 },
						fontWeight: 700,
						pl: 4,
					}}
				/>
			</Tabs>
		</Box>
	);
}

function Overview({
	desc,
	responsibilities,
	needRequirements,
	loveRequirements,
	offers,
	handleClick,
}: any) {
	return (
		<Stack spacing={7.5} mt={7.5}>
			<Typography fontSize={16} lineHeight={"24px"}>
				{desc}
			</Typography>
			<Stack spacing={4}>
				<OverviewH bigger>RESPONSIBILITY</OverviewH>
				<OverviewUl items={responsibilities} />
			</Stack>
			<Stack spacing={4}>
				<OverviewH bigger>REQUIREMENT</OverviewH>
				<OverviewH>What you&apos;ll definitely need:</OverviewH>
				<OverviewUl items={needRequirements} />
				<OverviewH>What we&apos;d love you to have:</OverviewH>
				<OverviewUl items={loveRequirements} />
				<OverviewH>What we offer:</OverviewH>
				<OverviewUl items={offers} />
			</Stack>
			<Grid container justifyContent="center">
				<Button
					href="#apply"
					onClick={handleClick}
					sx={{
						background: "#7000FF",
						py: 3,
						fontSize: "24px",
						fontWeight: "bold",
						width: "320px",
					}}
				>
					Apply
				</Button>
			</Grid>
		</Stack>
	);
}

function OverviewH({ children, bigger }: any) {
	return (
		<Typography fontSize={bigger ? 24 : 16} fontWeight={700}>
			{children}
		</Typography>
	);
}

function OverviewUl({ items }: any) {
	return (
		<Stack spacing={1}>
			{items.map((el: string, idx: number) => (
				<Stack direction={"row"} spacing={2} key={idx} pl={2}>
					<Typography fontSize={16} lineHeight={"24px"}>
						{"•"}
					</Typography>
					<Typography fontSize={16} lineHeight={"24px"}>
						{el}
					</Typography>
				</Stack>
			))}
		</Stack>
	);
}

function TabPanel({ children, value, index, ...other }: any) {
	return (
		<Box role="tabpanel" hidden={value !== index} {...other}>
			{value === index && children}
		</Box>
	);
}
