import { OFFICE, PRODUCT, SERVICE_NEW } from "@/constants/home";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Box, Container, Grid, OutlinedInput, Stack, Typography, useMediaQuery } from "@mui/material";
import { NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { Anchors } from "../constants";
import { ButtonBase } from "@/components/Button";
import { ContactForm, SectionTitle } from "../components";
import styled from "@emotion/styled";
import { Box2, Game, Mobile, Monitor } from "../assets";

const SoftwareOutsourcingPage: NextPage = () => {
	return <>
		<Head>
		</Head>
		<BasicLayout>
			<Banner />
			<Stack spacing={{ xs: 0, sm: 10 }}>
				<WhatWeDo />
				<WhyVersehub />
				<OurTeam />
			</Stack>
		</BasicLayout>
	</>
}
export default SoftwareOutsourcingPage;
function Banner() {
	const width767 = useMediaQuery('(max-width: 767px)')
	return (
		<Box
			sx={{
				height: "356px",
				display: "flex",
				alignItems: "center",
				justifyContent: "center",
				flexDirection: "column",
				position: "relative",
				overflow: "hidden",
				// marginTop: '79px',
				'@media (min-width: 768px)': {
					height: "480px",
				}
			}}
		>
			<Box sx={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				left: 0,
				// top: -300
			}}>
				<video
					autoPlay
					loop
					muted
					playsInline
					style={{
						width: '100%',
						height: '100%',
						objectFit: 'cover',

					}}
				>
					<source
						src={'/assets/video/homepage-video-bg.mp4'}
						type='video/mp4'
					/>
				</video>
			</Box>
			<Box sx={{
				position: 'absolute',
				top: 'calc(50% - 80px)',
				transform: 'translateY(calc(-50% + 80px))',

			}}>
				<StackWrapper >
					<Box sx={{
						'@media (min-width: 768px)': {
							padding: '0 123px',
						}
					}}>
						<Grid
							container
							mt={5}
						>
							<Grid item xs={6}>
								<Typography variant="h2" sx={{
									...TEXT_STYLE(20, 400, '#151515'),
									'& b': {
										fontWeight: 600,
										color: '#5727A3'
									},
									'@media (min-width: 768px)': {
										...TEXT_STYLE(40, 400, '#151515'),
										lineHeight: '59px',
									}
								}}><b>ABOUT US</b></Typography>

								<Typography variant="h2" sx={{
									marginTop: "40px",
									...TEXT_STYLE(18, 400, '#31373E'),
									'& b': {
										fontWeight: 600,
										color: '#5727A3'
									},
									'@media (min-width: 768px)': {
										...TEXT_STYLE(18, 400, '#31373E'),
										lineHeight: '28px',
									}
								}}>
									VerseHub is a technology company that specializes in providing and implementing innovative solutions and consultancy services to businesses.<br />
									Our core team comprises a group of highly skilled professionals with extensive experience in researching and developing the latest cutting-edge technologies.
								</Typography>


							</Grid>
						</Grid>
					</Box>
				</StackWrapper>

			</Box>
		</Box>
	);
}

function StackWrapper({ children, bookmark, styles, noPading }: any) {
	return (
		<Box
			id={(bookmark) || ""}
			sx={[
				{
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					alignItems: "center",
					'@media (min-width: 600px)': {
						marginTop: !noPading ? '0 !important' : '-30px',
						paddingTop: !noPading ? '120px !important' : '30px'
					},
				},
			]}
		// style={match1440 ? { ...styles } : null}
		>
			<Container>{children}</Container>
		</Box>
	);
}

function WhatWeDo() {
	const data = [
		{
			icon: <Mobile />,
			text: 'Mobile App Development'
		},
		{
			icon: <Game />,
			text: 'Game Development'
		},
		{
			icon: <Monitor />,
			text: 'Website Development'
		},
		{
			icon: <Box2 />,
			text: 'Web3/Blockchain Products'
		},

	];
	return (
		<Container >
			<Box

				sx={{
					'@media (min-width: 768px)': {
						padding: '0 123px',
					}
				}}>
				<Grid container>

					<Grid
						marginTop={10}
						item xs={2} sm={6} md={6}  >
						<Typography variant="h2" sx={{
							...TEXT_STYLE(20, 600),
							color: '#5727A3',
							'@media (min-width: 768px)': {
								...TEXT_STYLE(40, 600),
								lineHeight: '59px',
							}
						}}>WHAT WE DO</Typography>

						<Typography variant="h2" sx={{
							marginTop: "40px",
							...TEXT_STYLE(18, 400, '#31373E'),
							'& b': {
								fontWeight: 600,
								color: '#5727A3'
							},
							'@media (min-width: 768px)': {
								...TEXT_STYLE(18, 400, '#31373E'),
								lineHeight: '28px',
							}
						}}>
							Our core team comprises a group of highly skilled professionals with extensive experience in researching and developing the latest cutting-edge technologies.
						</Typography>
					</Grid>

				</Grid>
				<Grid
					marginTop={5}

					// marginBottom={10}
					container
				>
					{data.map((item: any, index: number) => (
						<Grid item xs={2} sm={3} md={3} key={index} >
							<Box style={{
								display: 'flex',
								flexDirection: "column",
								alignItems: "center",
							}}>
								{item.icon}
								<Typography marginTop={2} fontWeight={600} fontSize={18} color={"#31373E"}>{item.text}</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}
function WhyVersehub() {

	return (
		<Box sx={{
			backgroundColor: '#F1ECFB',

		}}>

			<Container >
				<Box
					sx={{
						marginBottom: "80px",
						'@media (min-width: 768px)': {
							padding: '0 123px',
						}
					}}>
					<Grid container >

						<Grid
							marginTop={10}
							item xs={2} sm={6} md={6}  >
							<Typography variant="h2" sx={{
								...TEXT_STYLE(20, 600),
								textTransform: 'uppercase',
								color: '#5727A3',
								'@media (min-width: 768px)': {
									...TEXT_STYLE(40, 600),
									lineHeight: '59px',
								}
							}}>why versehub</Typography>
						</Grid>
					</Grid>
					<Box
						marginTop={5}
					>
						<Typography variant="h3" color={"#31373E"} fontWeight={600}>EXPERIENCED AND PROFESSIONAL TEAM</Typography>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>10 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>Game 2D & 3D</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>5 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>Web & Mobile Application</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>5 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>E-Commerce</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>3 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>VR, AR, Web3 & Blockchain</Typography>
						</Box>

						<Typography variant="body1" marginTop={3} color={"#31373E"} fontWeight={600}>Team profile: Amazon, Yelp, FPT Software, Tiki, Vingroup,...</Typography>

						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600}>DEMAND-DRIVEN CUSTOMIZATION</Typography>

						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>The delivery timeframe can be tailored to meet the specific requirements and requests based on  individual needs and preferences.</Typography>
						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600}>REASONABLE COST</Typography>

						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>At an affordable cost, our services offer significant cost savings to our customers by reducing their personnel and operational expenses by up to 70%</Typography>
					</Box>
				</Box>
			</Container>

		</Box>
	);
}
function OurTeam() {

	return (
		<Box sx={{
			// backgroundColor: '#F1ECFB',

		}}>

			<Container >
				<Box
					sx={{
						marginBottom: "80px",
						'@media (min-width: 768px)': {
							padding: '0 123px',
						}
					}}>
					<Grid container >

						<Grid
							item xs={2} sm={6} md={6}  >
							<Typography variant="h2" sx={{
								...TEXT_STYLE(20, 600),
								textTransform: 'uppercase',
								color: '#5727A3',
								'@media (min-width: 768px)': {
									...TEXT_STYLE(40, 600),
									lineHeight: '59px',
								}
							}}>Our team</Typography>

							<Typography variant="body1" marginTop={5} fontSize={18} color={"#31373E"} fontWeight={600}>Our end-to-end IT services and innovation empower global businesses to accelerate their digital transformation journey</Typography>
						</Grid>
					</Grid>
					<Box
						marginTop={5}
					>
						<Typography variant="h3" color={"#31373E"} fontWeight={600}>EXPERIENCED AND PROFESSIONAL TEAM</Typography>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>10 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>Game 2D & 3D</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>5 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>Web & Mobile Application</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>5 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>E-Commerce</Typography>
						</Box>
						<Box display={'flex'}>
							<Box width={85} marginRight={2}>
								<Typography marginTop={2} variant="body1" fontWeight={600}>3 + years</Typography>
							</Box>
							<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>VR, AR, Web3 & Blockchain</Typography>
						</Box>

						<Typography variant="body1" marginTop={3} color={"#31373E"} fontWeight={600}>Team profile: Amazon, Yelp, FPT Software, Tiki, Vingroup,...</Typography>

						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600}>DEMAND-DRIVEN CUSTOMIZATION</Typography>

						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>The delivery timeframe can be tailored to meet the specific requirements and requests based on  individual needs and preferences.</Typography>
						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600}>REASONABLE COST</Typography>

						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600}>At an affordable cost, our services offer significant cost savings to our customers by reducing their personnel and operational expenses by up to 70%</Typography>
					</Box>
				</Box>
			</Container>

		</Box>
	);
}


function Offices() {
	return (
		<StackWrapper>
			<Box sx={{
				marginTop: '80px',
				'@media (min-width: 768px)': {
					padding: '0 123px',
					marginTop: 0
				}
			}}>
				<SectionTitle align="center" title={OFFICE.title} subTitle={OFFICE.subtitle} typeSmall={true} />
				<Box sx={{

					justifyContent: 'space-between',
					margin: '40px 0',
					'@media (min-width: 768px)': {
						display: 'flex',
					},
					'@media (min-width: 1024px)': {
						margin: '40px 76px',
					}
				}}>
					{OFFICE.items.map((item, index) => (
						<Box key={index} sx={{
							textTransform: 'uppercase',
							textAlign: 'center',
							marginBottom: '24px',
							'& img': {
								maxWidth: '100%',
							},
							'@media (min-width: 768px)': {
								padding: '0 20px',
								marginBottom: 0
							}
						}}>
							<img src={item.src} />
							<Typography sx={{
								...TEXT_STYLE(20, 500, '#31373E'),
								marginBottom: '17px',
								marginTop: '18px'
							}}>{item.title}</Typography>
							<Typography sx={{
								...TEXT_STYLE(16, 500, '#A7ACB8'),
								textTransform: 'capitalize',
							}}>{item.subtitle}</Typography>
						</Box>
					))}
				</Box>
			</Box>
		</StackWrapper>
	);
}

const JoinOur = () => {
	return <Box sx={{
		padding: '40px 0',
		textAlign: 'center',
		textTransform: 'uppercase',
		backgroundRepeat: 'no-repeat',
		backgroundSize: 'cover',
		'@media (min-width: 768px)': {
			padding: '80px 0',
			backgroundImage: 'url(/assets/join-our.png)',
		},
		'@media (max-width: 767px)': {
			background: 'radial-gradient(85.49% 58.61% at 50% 90.72%, #3C12A0 48.44%, #3C126D 100%)',
		}
	}}>
		<StackWrapper noPading={true}>
			<Typography sx={{
				...TEXT_STYLE(40, 600, '#FFFFFF'),
				marginBottom: '24px',
				'@media (min-width: 768px)': {
					...TEXT_STYLE(64, 600, '#FFFFFF'),
				}
			}}>join our journey</Typography>
			<Typography sx={{
				...TEXT_STYLE(14, 600, '#FFFFFF'),
				marginBottom: '40px',
				'@media (min-width: 768px)': {
					...TEXT_STYLE(20, 600, '#FFFFFF'),
				}
			}}>Excellent products need excellent people. Our pioneering team is looking <br></br> for new members to join the fleet.</Typography>
			<a href="/jobs" style={{
				textDecoration: 'none'
			}}>
				<ButtonBase title="Apply now" style={{
					border: '1px solid #FFFFFF',
					borderRadius: '12px',
					background: 'transparent !important',
					...TEXT_STYLE(24, 600, '#FFFFFF'),
				}} />
			</a>
		</StackWrapper>
	</Box>
}

const ContactUs = () => {
	return <StackWrapper bookmark={Anchors.Contact}>
		<Box sx={{
			textAlign: 'center',
			maxWidth: '544px',
			margin: '80px auto',
			'@media (min-width: 768px)': {
				margin: '0 auto'
			},
			'@media (max-width: 1199px)': {
				marginBottom: '80px'
			}
		}}>
			<ContactForm />
			{/* <Typography variant="h2" sx={{
				...TEXT_STYLE(64, 600, '#1B0044'),
				fontSize: '40px !important',
				textTransform: 'uppercase',
				marginBottom: '40px',
				'@media (min-width: 768px)': {
					fontSize: '64px !important',
					marginBottom: '80px',
				}
			}}>contact us</Typography>
			<Box><InputContact placeholder="Your name" /></Box>
			<Box><InputContact placeholder="Your mail" /></Box>
			<Box><InputContact placeholder="Tell us how we can help" rows={4} multiline /></Box>
			<ButtonBase title='send messages' style={{
				width: '100%',
			}} /> */}
		</Box>
	</StackWrapper>
}

const logoBefitter = {
	'& img': {
		margin: '8px 0',
		'@media (min-width: 768px)': {
			margin: '15px 0'
		}
	}
}
const InputContact = styled(OutlinedInput)({
	...TEXT_STYLE(16, 600, '#31373E'),
	border: '1px solid #E9EAEF',
	borderRadius: '4px',
	background: '#ffffff',
	marginBottom: 24,
	width: '100%',
	maxWidth: 544,
})