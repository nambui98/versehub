import {
	Box, Checkbox, Container, styled, Theme, Typography, useMediaQuery
} from "@mui/material";
import type { NextPage } from "next";
import "swiper/css";
import "swiper/css/pagination";
import { BasicLayout } from "@/layouts/BasicLayout";
import { getJobList } from "@/utils/sheets.google";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { useState } from "react";
import { ButtonBase } from "@/components/Button";
import { BENEFIT, JOB, MISSION, VALUES } from "@/constants/jobs";

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
		<BasicLayout>
			<OurMission />
			<CoreValue />
			<Benefits />
			<OpeningJobs />
			<Cta />
		</BasicLayout>
	);
};

export default JobsPage;

const OurMission = () => {
	return <Box sx={{
		padding: '40px 0 0',
		margin: '80px 0',
		position: 'relative',
		'@media (min-width: 768px)': {
			padding: '200px 0 0',
		}
	}}>
		<Box sx={{
			position: 'absolute',
			top: 0,
			left: 0,
			width: '100%',
			'& img': {
				width: '100%'
			},
			'@media (max-width: 767px)': {
				height: '100%',
				'& img': {
					height: '100%',
					objectFit: 'cover'
				},
			}
		}}><img src="/assets/missions/bg-our-mission.png" /></Box>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Box sx={{
				paddingBottom: '40px',
				borderBottom: '4px solid #5727A3',
				textAlign: 'center',
				'@media (min-width: 768px)': {
					paddingBottom: '80px',
				}
			}}>
				<Typography variant="h2" sx={{
					...TEXT_STYLE(40, 600, '#5727A3'),
					marginBottom: '24px',
					textTransform: 'uppercase'
				}}>{MISSION.title}</Typography>
				{MISSION.desc.map((item, index) => (
					<Typography key={index} sx={{
						...TEXT_STYLE(14, 500, '#31373E'),
						maxWidth: '736px',
						margin: 'auto',
						lineHeight: '28px',
						letterSpacing: '0.04em',
						'@media (min-width: 768px)': {
							...TEXT_STYLE(18, 500, '#31373E'),
						}
					}}>{item}</Typography>
				))}
			</Box>
		</Container>
	</Box>
}

const CoreValue = () => {
	const [currentData, setCurrentData] = useState(0)
	const data = VALUES.items[currentData]
	return <Box sx={{
		textAlign: 'center',
		marginBottom: '80px'
	}}>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Box sx={{
				paddingBottom: '80px',
				borderBottom: '4px solid #5727A3',
			}}>
				<Typography variant="h2" sx={{
					...TEXT_STYLE(40, 600, '#5727A3'),
					marginBottom: '40px',
					textTransform: 'uppercase',
				}}>{VALUES.title}</Typography>
				<Box sx={{
					'@media (max-width: 767px)': {
						overflow: 'auto'
					}
				}}>
					<Box sx={{
						display: 'flex',
						justifyContent: 'center',
						marginBottom: '40px',
						'@media (max-width: 767px)': {
							minWidth: 385,
							marginBottom: '32px',

						},
						'@media (max-width: 420px)': {
							justifyContent: 'flex-start',
						}
					}}>
						{VALUES.items.map((item, index) => (
							<Typography key={index} sx={{
								borderBottom: currentData === index ? '4px solid #5727A3' : 0,
								paddingBottom: '9px',
								marginRight: index < 2 ? '40px' : 0,
								...TEXT_STYLE(16, 600, '#5A6178'),
								cursor: 'pointer',
								color: currentData === index ? '#5727A3' : '#5A6178',
								'@media (min-width: 768px)': {
									...TEXT_STYLE(20, 600, '#5A6178'),
									paddingBottom: '16px',
									marginRight: index < 2 ? '48px' : 0,
								}
							}} onClick={() => setCurrentData(index)}>{item.title}</Typography>
						))}
					</Box>
				</Box>
				<Box sx={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'center',
					'@media (max-width: 767px)': {
						flexDirection: 'column',
						alignItems: 'center'
					}
				}}>
					<Box sx={{
						'@media (max-width: 767px)': {
							marginBottom: '24px',
							lineHeight: 0,
							'& img': {
								maxWidth: '57px'
							}
						}
					}}><img src={data.image} /></Box>
					<Box sx={{
						...TEXT_STYLE(14, 500, '#5A6178'),
						maxWidth: '736px',
						textAlign: 'center',
						lineHeight: '28px',

						'@media (min-width:  768px)': {
							marginLeft: '55px',
							textAlign: 'left',
						}
					}}>{data.content}</Box>
				</Box>
			</Box>
		</Container>
	</Box>
}

const Benefits = () => {
	return <Box sx={{
		marginBottom: '80px'
	}}>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Box sx={{
				paddingBottom: '80px',
				borderBottom: '4px solid #5727A3',
				textAlign: 'center',
			}}>
				<Typography variant="h2" sx={{
					...TEXT_STYLE(40, 600, '#5727A3'),
					marginBottom: '16px',
					textTransform: 'uppercase',
					'@media (min-width: 768px)': {
						marginBottom: '24px',
					}
				}}>{BENEFIT.title}</Typography>
				<Typography sx={{
					...TEXT_STYLE(14, 500, '#31373E'),
					marginBottom: '40px',
					lineHeight: '28px',
					'@media (min-width: 768px)': {
						marginBottom: '80px',
						...TEXT_STYLE(18, 500, '#31373E'),
					}
				}}>{BENEFIT.desc}</Typography>
				<Box sx={{
					display: 'flex',
					justifyContent: 'space-between',
					flexWrap: 'wrap'
				}}>
					{BENEFIT.items.map((item, index) => (
						<Box key={index} sx={{
							width: 'calc(50% - 8.5px)',
							marginBottom: '40px',
							'& img': {
								maxHeight: '60px'
							},
							'@media (min-width: 768px)': {
								width: '33.3333%',
								marginBottom: '80px',
								'& img': {
									minHeight: '88px'
								},
							}
						}}>
							<img src={item.src} />
							<Typography sx={{
								...TEXT_STYLE(16, 600, '#31373E'),
								marginTop: '24px',
								'@media (min-width: 768px)': {
									...TEXT_STYLE(20, 600, '#31373E'),
								}
							}}>{item.desc}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</Container>
	</Box>
}

const Cta = () => {
	return <Box sx={{
		padding: '80px 0',
		backgroundImage: 'url(/assets/joinourjourney.png)',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		letterSpacing: '0.04em',
		'@media (max-width: 767px)': {
			backgroundPosition: 'center',
			padding: '40px 0',
			marginBottom: '80px'
		}
	}}>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Typography variant="h2" sx={{
				...TEXT_STYLE(24, 600, '#FFFFFF'),
				textAlign: 'center',
				'@media (min-width: 768px)': {
					...TEXT_STYLE(40, 600, '#FFFFFF'),
				}
			}}>&quot;A global team with metaversal mission&quot;</Typography>
		</Container>
	</Box>
}

const OpeningJobs = () => {
	const width767 = useMediaQuery('(max-width: 767px)')
	const [currentItem, setCurrentItem] = useState('All')
	const [data, setData] = useState([
		{
			title: 'All',
			number: 1,
			checked: true
		},
		{
			title: 'Engineer',
			number: 1,
			checked: false
		}
	])

	return <Box>
		<Container sx={{
			maxWidth: '1160px !important'
		}}>
			<Typography variant="h2" sx={{
				...TEXT_STYLE(40, 600, '#5727A3'),
				marginBottom: '40px',
				textTransform: 'uppercase',
				textAlign: 'center'
			}}>{JOB.title}</Typography>
			<Box sx={{
				justifyContent: 'space-between',
				'@media (min-width: 768px)': {
					display: 'flex',
				}
			}}>
				<Box sx={{
					marginBottom: '24px',
					'@media (min-width: 768px)': {
						marginRight: '30px',
						marginBottom: 0
					}
				}}>
					<Typography sx={{
						...TEXT_STYLE(24, 600, '#5A6178'),
						marginBottom: '24px',
						'@media (min-width: 768px)': {
							marginBottom: '40px',
						}
					}}>Jobs Group</Typography>
					<Box sx={{
						'@media (max-width: 767px)': {
							display: 'flex',
						}
					}}>
						{data.map((item, index) => (
							<Box key={index} sx={{
								display: 'flex',
								justifyContent: 'space-between',
								alignItems: 'center',
								minWidth: '352px',
								'@media (max-width: 1100px)': {
									minWidth: '252px',
								},
								'@media (max-width: 767px)': {
									minWidth: 'auto',
									marginRight: '24px'
								}
							}}>
								<Box sx={{
									display: 'flex',
									alignItems: 'center',
								}} onClick={() => setCurrentItem(item.title)}>
									<Checkbox inputProps={{ 'aria-label': 'all' }} checked={currentItem === item.title} sx={{
										color: '#5A6178',
										'@media (max-width: 767px)': {
											padding: 0,
											marginRight: '16px'
										}
									}} />
									<Typography sx={{
										...TEXT_STYLE(16, 500, '#31373E'),
										'@media (max-width: 767px)': {
											marginRight: '8px'
										}
									}}>{item.title}</Typography>
								</Box>
								<Typography sx={{
									...TEXT_STYLE(16, 600, '#5727A3')
								}}>{item.number}</Typography>
							</Box>
						))}
					</Box>
				</Box>
				<Box>
					<Typography sx={{
						...TEXT_STYLE(24, 600, '#5A6178'),
						marginBottom: '24px',
						'@media (min-width: 768px)': {
							marginBottom: '40px',
						}
					}}>Features Roles</Typography>
					{JOB.items.map((item, index) => (
						<Box key={index} sx={{
							paddingBottom: '12px',
							borderBottom: '1px solid #E9EAEF',
							marginBottom: '24px',
							minWidth: '640px',
							display: 'flex',
							alignItems: 'flex-start',
							justifyContent: 'space-between',
							'& a': {
								textDecoration: 'none',
							},
							'@media (max-width: 1100px)': {
								minWidth: '440px',
							},
							'@media (max-width: 767px)': {
								minWidth: 'auto',
							}
						}}>
							<Box>
								<a href={`/jobs/${item.id}`}>
									<Typography sx={{
										...TEXT_STYLE(24, 600, '#1B0044'),
										marginBottom: '12px'
									}}>{item.title}</Typography>
								</a>
								<Typography sx={{
									...TEXT_STYLE(14, 500, '#31373E'),
									marginBottom: '12px'
								}}>{item.type}</Typography>
								<Time><img src="/assets/icons/location.svg" /> Hanoi, Vietnam</Time>
								{item.time &&

									<Time><img src="/assets/icons/clock.svg" /> {item.time}</Time>
								}
							</Box>
							{!width767 && <a href={`/jobs/${item.id}`}>
								<ButtonBase title="Apply now" style={{
									...TEXT_STYLE(16, 600, '#5727A3'),
									padding: '12px',
									minWidth: '142px',
									border: '1px solid #5727A3',
									background: 'transparent',
									'&:hover': {
										...TEXT_STYLE(16, 600, '#ffffff'),
										background: 'radial-gradient(39.08% 73.92% at 50% 90.72%, #3C12A0 48.44%, #3C126D 100%)'
									}
								}} />
							</a>}
						</Box>
					))}
				</Box>
			</Box>
		</Container>
	</Box>
}

const Time = styled(Box)({
	...TEXT_STYLE(14, 400, '#5A6178'),
	display: 'flex',
	alignItems: 'center',
	marginBottom: '12px',
	'& img': {
		marginRight: '8px'
	}
})