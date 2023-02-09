/* eslint-disable @next/next/no-img-element */
import { ButtonBase } from "@/components/Button";
import {
	ContactForm,
	SectionTitle, useSmoothScroll
} from "@/components/index";
import {
	JOB,
	OFFICE, PRODUCT, SERVICE_NEW, TEAM
} from "@/constants/home";
import { BasicLayout } from "@/layouts/BasicLayout";
import {
	Box,
	Button,
	Container,
	Grid,
	Stack, Theme,
	Typography,
	// Link,
	useMediaQuery,
	styled
} from "@mui/material";
import OutlinedInput from '@mui/material/OutlinedInput';
import type { NextPage } from "next";
import Link from "next/link";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { Anchors } from "../constants";

const HomePage: NextPage = () => {
	const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down("md"));
	useSmoothScroll();

	// const [openProfile, setOpenProfile] = useState(false);
	// const [profile, setProfile] = useState({
	// 	name: "",
	// 	title: "",
	// 	desc: [],
	// });

	// const handleClickProfile = (data: any) => {
	// 	if (data && data.name && data.title && data.desc) {
	// 		setProfile(data);
	// 		setOpenProfile(true);
	// 	}
	// };

	// const handleCloseProfile = () => {
	// 	setOpenProfile(false);
	// };

	return (
		<BasicLayout>
			{/* <ProfileDialog
				open={openProfile}
				onClose={handleCloseProfile}
				data={profile}
			/> */}
			<Banner />
			<Stack spacing={{ xs: 0, sm: 15 }}>
				<Services />
				<ProductsPartners data={{ ...PRODUCT, anchor: Anchors.Products }} />
				<Offices />
				<JoinOur />
				<ContactUs />
			</Stack>
		</BasicLayout>
	);
};

export default HomePage;

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
				marginTop: '79px',
				'@media (min-width: 768px)': {
					height: "calc(100vh - 79px)",
					
				}
			}}
		>
			<Box sx={{
				position: 'absolute',
				width: '100%',
				height: '100%',
				left: 0,
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
				top: '50%',
				left: '16px',
				transform: 'translateY(-50%)',
				'@media (min-width: 768px)': {
					top: '40%',
					left: '10%',
					transform: 'none'
				}
			}}>
				<Typography variant="h2" sx={{
					...TEXT_STYLE(22, 400, '#151515'),
					marginBottom: '24px',
					'& b': {
						fontWeight: 600,
						color: '#5727A3'
					},
					'@media (min-width: 768px)': {
						...TEXT_STYLE(48, 400, '#151515'),
						lineHeight: '59px',
						marginBottom: '70px',
					}
				}}>Bring <b>blockchain technology</b> <br></br> into individual lives and businesses.</Typography>
				<a style={{
					textDecoration: 'none',
				}} href="#contact"><ButtonBase title='Start your project' style={{
					'@media (max-width: 767px)': {
						...TEXT_STYLE(16, 600, '#FFFFFF'),
						padding: '16px 20px'
					}
				}} /></a>
			</Box>
			{!width767 && <Box
				sx={{
					position: "absolute",
					bottom: "78px",
					cursor: 'pointer',
				}}
			>
				<Link href="#services" passHref>
					<img src="/assets/icons/mouse.png" />
				</Link>
			</Box>}
		</Box>
	);
}

function StackWrapper({ children, bookmark, styles, noPading }: any) {
	// const match1200 = useMediaQuery("(min-width:1200px)");
	// const match1440 = useMediaQuery("(min-width:1440px)");

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
						paddingTop: !noPading ? '120px !important' : 'auto',
						marginTop: !noPading ? '0 !important' : 'auto',
					}
				},
			]}
		// style={match1440 ? { ...styles } : null}
		>
			<Container>{children}</Container>
		</Box>
	);
}

function Services() {
	return (
		<StackWrapper bookmark={Anchors.Services}>
			<Box sx={{
				backgroundImage: 'url(/assets/provide.png)',
				position: 'relative',
				paddingBottom: '30px',
				marginBottom: '50px',
				backgroundSize: 'contain',
				backgroundRepeat: 'no-repeat',
				backgroundPosition: 'center',

				'@media (min-width: 992px)': {
					display: 'flex',
					justifyContent: 'space-between',
					boxShadow: '0px 0px 40px rgba(87, 39, 163, 0.05)',
					backgroundImage: 'none',
					paddingBottom: 0,
					marginBottom: 0
				}
			}}>
				<Box sx={{
					width: "100%",
					maxWidth: '699px',
					padding: '51px 0 0',
					backgroundRepeat: 'no-repeat',
					backgroundPosition: 'right',
					'@media (min-width: 992px)': {
						padding: '80px 0 0 123px',
						backgroundImage: 'url(/assets/provide.png)',
					}
				}}>
					<SectionTitle						
						title={SERVICE_NEW.title}
						subTitle={SERVICE_NEW.subtitle}
					/>
				</Box>
				<Box sx={{
					marginTop: '40px',
					'@media (min-width: 992px)': {
						margin: '80px 113px 40px 30px',
					}
				}}>
					{SERVICE_NEW.items.map((item, index) => (
						<Box key={index} sx={{
							marginBottom: index < 3 ? '40px' : 0,
						}}>
							<Box sx={{
								...TEXT_STYLE(24, 600, '#31373E'),
								marginBottom: '8px'
							}}>{item.title}</Box>
							<Box sx={{
								...TEXT_STYLE(14, 500, '#898E9E')
							}}>{item.body}</Box>
						</Box>
					))}
				</Box>
				<Box sx={{
					position: 'absolute',
					top: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: 'calc(100% - 246px)',
					height: '4px',
					background: '#5727A3',
				}}></Box>
			</Box>
		</StackWrapper>
	);
}

function ProductsPartners({ data }: any) {
	return (
		<StackWrapper bookmark={data.anchor} >
			<Box sx={{							
				'@media (min-width: 768px)': {
					padding: '0 123px',			
				}
			}}>
				<SectionTitle
					bookmark={data.anchor}
					title={data.title}
					subTitle={data.subtitle}
				>
					{data.title}
				</SectionTitle>
				<Grid
					container
					mt={5}
					spacing={{ xs: 2, md: 3 }} columns={{ xs: 1, sm: 8, md: 12 }}
					sx={{
						marginTop: '35px !important',
						'@media (min-width: 768px)': {
							
						}
					}}
				>
					{data.items.map((item: any, index: number) => (
						<Grid item xs={2} sm={4} md={4} key={index}>
							<a href={item.url} target='_blank' style={{
								minHeight: '117px',
								display: 'flex',
								justifyContent: 'center',
								alignItems: 'center',
								background: '#ffffff',
								padding: '10px',
							}}><Box key={index} sx={{
								lineHeight: 0,
								'& img': {
									maxWidth: '100%',
								},
							}}><img src={item.src} /></Box></a>
						</Grid>
					))}
				</Grid>
			</Box>
		</StackWrapper>
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
								...TEXT_STYLE(16, 500, '#A7ACB8')
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
		<StackWrapper bookmark={Anchors.Jobs} noPading={true}>
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
			<ContactForm/>
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