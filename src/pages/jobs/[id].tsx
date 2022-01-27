import type { NextPage } from 'next';
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
	Divider,
} from "@mui/material";

import { SecondLayout } from '@/layouts/SecondLayout';
import { SectionTitle, ApplyForm } from '@/components/index';
import { getJobIds, getJobById } from "@/utils/spreadsheets";


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
  return {
    props: { job },
  };
}

const JobIdPage: NextPage = ({ job }: any) => {
	const [tabIndex, setTabIndex] = useState(0);

  const handleTabChange = (event: React.SyntheticEvent, newValue: number) => {
    setTabIndex(newValue);
  };

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
				<SectionTitle mb={0}>{job.name}</SectionTitle>
			</Box>
			<Container>
				<Box sx={{ width: '100%', mt: 2 }}>
					<Tabs value={tabIndex} onChange={handleTabChange} centered>
						<Tab label="Role Overview" sx={{fontSize: 24, px: 8}}/>
						{/* <Divider orientation="vertical" flexItem/> */}
						<Tab label="Application" sx={{fontSize: 24, px: 8}}/>
					</Tabs>
				</Box>
				{/* <Divider/> */}
				<Box sx={{ width: '100%' }}>
					<TabPanel value={tabIndex} index={0}>
						<Overview 
							desc={job.description} 
							requirements={job.requirements}
							offers={job.offers}
							handleClick={() => setTabIndex(1)}
						/>
					</TabPanel>
					<TabPanel value={tabIndex} index={1}>
						<ApplyForm jobName={job.name} />
					</TabPanel>
				</Box>
			</Container>
		</SecondLayout>
	);
};

export default JobIdPage;

function Overview({ desc, requirements, offers, handleClick }: any) {
	return (
		<Stack spacing={10} mt={10} px={20}>
			<Typography fontSize={24}>{desc}</Typography>
			<Box sx={{ width: '100%' }}>
				<SectionTitle>Requirements</SectionTitle>
				<Stack spacing={1}>
					{requirements.map((el: string, idx: number) => (
						<Typography key={idx} fontSize={24}>{el}</Typography>
					))}
				</Stack>
			</Box>
			<Box sx={{ width: '100%' }}>
				<SectionTitle>Offers</SectionTitle>
				<Stack spacing={1}>
					{offers.map((el: string, idx: number) => (
						<Typography key={idx} fontSize={24}>{el}</Typography>
					))}
				</Stack>
			</Box>
			<Grid container justifyContent="center">
				<Button onClick={handleClick} sx={{
					background: "rgba(196, 196, 196, 0.3)", 
					px: 8, 
					py: 2,
					fontSize: "24px",
					fontWeight: "bold"
				}}>
					Apply
				</Button>
			</Grid>
		</Stack>
	)
}

function TabPanel({ children, value, index, ...other }: any) {
  return (
    <Box
      role="tabpanel"
      hidden={value !== index}
      {...other}
    >
      {value === index && children}
    </Box>
  );
}
