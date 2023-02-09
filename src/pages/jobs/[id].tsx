import {
	Box, styled, Theme,
	useMediaQuery
} from "@mui/material";
import type { NextPage } from "next";
import React, { useState } from "react";

import { ApplyForm, useSmoothScroll } from "@/components/index";
import { BasicLayout } from "@/layouts/BasicLayout";
import { getJobById, getJobIds } from "@/utils/sheets.google";
import { useRouter } from "next/router";
import { JOB } from "@/constants/jobs";
import Typography from "@mui/material/Typography";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import Container from "@mui/material/Container";
import Link from 'next/link';
import { ButtonBase } from "@/components/Button";

const JobIdPage: NextPage = ({ job }: any) => {
	const router = useRouter()

	const data = JOB.items.filter(item => item.id.toString() === router.query?.id)

	return (
		<BasicLayout>
			<Banner data={data[0]} />
			<Back />
			<BodyJob data={data[0]} />
		</BasicLayout>
	);
};

export default JobIdPage;

const Banner = (props: any) => {
	return <Box sx={{
		padding: '80px 0',
		backgroundImage: 'url(/assets/jobs/banner.png)',
		backgroundSize: 'cover',
		backgroundRepeat: 'no-repeat',
		backgroundPosition: 'center',
		margin: '81px 0 16px',
		width: '100%',
		'@media (min-width: 768px)': {
			padding: '121px 0',
			margin: '81px 0 42px',
		}
	}}>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Typography sx={{
				...TEXT_STYLE(32, 600, '#FFFFFF'),
				textAlign: 'center',
				'@media (min-width: 768px)': {
					...TEXT_STYLE(64, 600, '#FFFFFF'),
					textAlign: 'left'
				}
			}}>{props.data?.title}</Typography>
		</Container>
	</Box>
}
const Back = () => {
	return <Container sx={{
		maxWidth: '1160px !important'
	}}>
		<Link href="/jobs">
			<Box sx={{
				display: 'flex',
				alignItems: 'center',
				...TEXT_STYLE(16, 500, '#5A6178'),
				cursor: 'pointer',
				'& img': {
					marginRight: '16px'
				}
			}}>
				<img src="/assets/icons/arrow-left.svg" />
				Back to Jobs
			</Box>
		</Link>
	</Container>
}

const BodyJob = (props: any) => {
	const [statusSubmitForm, setStatusSubmitForm] = useState(false)
	const [statusFormApply, setStatusFormApply] = useState(false)
	return <Box sx={{
		margin: '24px 0 40px',
		'@media (min-width: 768px)': {
			margin: '40px 0 80px',
		}
	}}>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Box sx={{		
				justifyContent: 'space-between',
				alignItems: 'flex-start',
				'@media (min-width: 768px)': {
					display: 'flex',
				}
			}}>
				<Box sx={{
					...TEXT_STYLE(14, 500, '#5A6178'),
					marginBottom: '24px',
					'& h3': {
						...TEXT_STYLE(24, 600, '#31373E'),
						marginBottom: '16px'
					},
					'& ul': {
						paddingLeft: '30px'
					},
					'@media (min-width: 768px)': {
						marginRight: '40px',
						marginBottom: 0
					}
				}}>
					<Typography sx={{
						...TEXT_STYLE(24, 600, '#5727A3'),
						marginBottom: '24px',
						'@media (min-width: 768px)': {
							marginBottom: '40px',
						}
					}}>Job Description</Typography>
					{props.data?.body}
				</Box>
				<Box sx={{				
					'@media (min-width: 768px)': {
						minWidth: '448px',
						maxWidth: '448px',
					}
				}}>
					<Box sx={{
						padding: '24px',
						border: '1px solid #E9EAEF',
						borderRadius: '8px',
						background: '#ffffff',
						marginBottom: '16px',
						'@media (min-width: 768px)': {
							padding: '40px',
						}
					}}>
						{statusSubmitForm ? 
						<Box sx={{
							textAlign: 'center',
						}}>
							<img src="/assets/icons/tick-circle.svg" />
							<Typography sx={{
								...TEXT_STYLE(24, 600, '#5A6178')
							}}>Thanks for your apply! We will contact you soon!</Typography>
						</Box> : 
						(statusFormApply ? <ApplyForm jobName={props.data?.title} back={() => setStatusFormApply(false)} setStatusSubmitForm={setStatusSubmitForm} /> : <Box>
							<Typography sx={{
								...TEXT_STYLE(24, 600, '#5727A3'),
								marginBottom: '24px'
							}}>{props.data?.title}</Typography>
							<TitleItemJob>Salary</TitleItemJob>
							<SubTitleItemJob>Negotiable</SubTitleItemJob>
							<TitleItemJob>Location</TitleItemJob>
							<SubTitleItemJob>Hanoi</SubTitleItemJob>
							<TitleItemJob>Team</TitleItemJob>
							<SubTitleItemJob>{props.data?.type}</SubTitleItemJob>
							<TitleItemJob>Application deadline</TitleItemJob>
							<SubTitleItemJob sx={{
								borderBottom: '0 !important',
								'@media (max-width: 767px)': {
									marginBottom: 0
								}
							}}>{props.data?.time}</SubTitleItemJob>
							<Box onClick={() => setStatusFormApply(true)}>
							<ButtonBase title='Apply now' style={{
								width: '100%'
							}} />
						</Box>
						</Box>)}
					</Box>
					<Box sx={{
						padding: '24px',
						background: '#EEE9F6',
						borderRadius: '8px'
					}}>
						<Typography sx={{
							...TEXT_STYLE(16, 600, '#5A6178'),
							marginBottom: '16px',
							'@media (min-width: 768px)': {
								marginBottom: '24px',
							}
						}}>Need more information? Contact us</Typography>
						<TitleContact><img src="/assets/icons/sms.svg" />hr@versehub.io </TitleContact>
						<TitleContact><img src="/assets/icons/call.svg" />+84 967 913 863</TitleContact>
					</Box>
				</Box>
			</Box>
		</Container>
	</Box>
}

const TitleItemJob = styled(Typography)({
	...TEXT_STYLE(20, 600, '#31373E'),
	marginBottom: '8px'
})
const SubTitleItemJob = styled(Typography)({
	...TEXT_STYLE(16, 500, '#5A6178'),
	paddingBottom: '24px',
	marginBottom: '16px',
	borderBottom: '1px solid #E9EAEF',
	'@media (min-width: 768px)': {
		marginBottom: '24px',
	}
})
const TitleContact = styled(Box)({
	...TEXT_STYLE(16, 600, '#151515'),
	display: 'flex',
	alignItems: 'center',
	marginBottom: '16px',
	'&:last-of-type': {
		marginBottom: 0,
	},
	'& img': {
		marginRight: '8px'
	},
	'@media (min-width: 768px)': {
		marginBottom: '24px',
	}
})