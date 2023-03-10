import { Box, Container, Grid, Typography } from '@mui/material'
import { TEXT_STYLE } from 'src/styles/common/textStyles'
import Title from '@/components/SectionTitle/Title'

type Props = {}

const Banner = (props: Props) => {
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
				backgroundColor: "#fff",
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
						objectPosition: 'right'
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
				width: '100%',
				height: '100%',
				left: 0,
				background: "#ffffff90",
				display: 'block',
				'@media (min-width: 768px)': {
					display: 'none'
				}
			}}>
			</Box>
			<Box sx={{
				position: 'absolute',
				top: 'calc(50% - 80px)',
				transform: 'translateY(calc(-50% + 80px))',
			}}>
				<Container >
					<Box sx={{
						'@media (min-width: 768px)': {
							padding: '0 123px',
						}
					}}>
						<Grid
							container
							mt={5}
						>
							<Grid item xs={12} md={6}>
								<Title marginTop={{ xs: '40px', sm: 0 }}>
									ABOUT US
								</Title>
								<Typography variant="h2" sx={{
									marginTop: "16px",
									...TEXT_STYLE(14, 500, '#31373E'),
									lineHeight: '28px',
									'& b': {
										fontWeight: 600,
										color: '#5727A3'
									},
									'@media (min-width: 768px)': {
										...TEXT_STYLE(18, 500, '#31373E'),
										marginTop: "40px",
										lineHeight: '28px',
									}
								}}>
									VerseHub is a technology company that specializes in providing and implementing innovative solutions and consultancy services to businesses.<br />
									Our core team comprises a group of highly skilled professionals with extensive experience in researching and developing the latest cutting-edge technologies.
								</Typography>


							</Grid>
						</Grid>
					</Box>
				</Container>

			</Box >
		</Box >
	)
}

export default Banner