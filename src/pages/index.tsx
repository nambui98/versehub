/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';
import { BasicLayout } from '@/layouts/BasicLayout';
import {
  Box,
  Button,
  Container,
  Grid,
	Stack,
  Paper,
  TextField,
  Theme,
  Typography,
  // Link,
  useMediaQuery,
} from '@mui/material';
import { SectionTitle, ContactForm, AnimatedArrow } from '@/components/index';
import { BANNER, SERVICE, PRODUCT, PARTNER, TEAM, JOB, OFFICE } from '@/constants/home';
import { Anchors } from '../constants';


const HomePage: NextPage = () => {
  const mobile = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'));

  return (
    <BasicLayout>
      <Box
        sx={{
          height: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          flexDirection: 'column',
          position: 'relative',
          overflow: 'hidden',
					backgroundImage: 'url("/assets/bg3.svg")',
					backgroundRepeat: 'no-repeat',
					backgroundSize: 'cover',
					backgroundPosition: 'bottom',
        }}
      >
        {/* <Box
          component="img"
          src={'/assets/bg3.svg'}
          sx={{
            pointerEvents: 'none',
            position: 'absolute',
            width: 1672.74,
            height: 1242.1,
            top: -317,
            left: 'calc(50% + 48px)',
            opacity: 0.4,
            right: -24,
            transform: 'translateX(-50%) rotate(20.99deg)',
          }}
        /> */}
        <Box
          sx={{
            px: { sm: 2 },
            display: 'flex',
            flexFlow: 'column wrap',
            mb: 6.5,
						textAlign: 'center',
						color: 'rgba(255, 255, 255, 0.5)',
          }}
          // color={'rgba(255, 255, 255, 0.5)'}
          // align="center"
        >
          <Typography 
						variant="subtitle1" 
						fontSize={{ xs: 22, md: 24 }}
					>
						{BANNER[0]}
					</Typography>
          <Typography 
						variant="h1" 
						color="#fff" 
						mt={4} 
						mb={0.5}
						fontSize={{ xs: 46, md: 70 }}
					>
						{BANNER[1]}
					</Typography>
          <Typography 
						variant="subtitle1" 
						fontSize={{ xs: 24, md: 32 }}
					>
						{BANNER[2]}
					</Typography>
        </Box>
        <Box sx={{
					position: 'absolute',
					bottom: '6rem',
				}}>
					<Link href="#services" passHref>
						<AnimatedArrow component="a"/>
						{/* <Button
							sx={{
								borderRadius: 10,
								fontSize: 22,
								fontWeight: 700,
								lineHeight: '27.24px',
								background:
									'linear-gradient(103.69deg, #390468 21.05%, #FD42FF 145.15%)',
								py: 3,
								px: 5,
							}}
						>
							EXPLORE
						</Button> */}
					</Link>
				</Box>
      </Box>

			<Stack spacing={22.5} mt={23}>
				<Stack justifyContent="center" alignItems="center" px={{ xs: 0, sm: 5, md: 10 }}>
					<SectionTitle bookmark={Anchors.Services} align="center" mb={{ xs: 4, md: 7.5 }}>
						{SERVICE.title}
					</SectionTitle>
					<Grid container spacing={{ xs: 6, md: 3 }}>
						{SERVICE.items.map(({ src, title, desc }, index) => (
							<Grid item xs={12} sm={6} lg={3} key={index}>
								<Paper
									sx={{
										background: 'linear-gradient(180deg, #200048 23.44%, rgba(90, 0, 180, 0) 100%)',
										borderRadius: 2,
										py: 5,
										px: { xs: 8, sm: 3, md: 5 },
									}}
								>
									<Box
										style={{
											backgroundImage: `url(${src})`,
										}}
										sx={{
											paddingTop: '100%',
											backgroundPosition: 'center',
											backgroundSize: 'cover',
										}}
									/>
									<Typography variant="h3" textAlign="center" fontWeight={700} mb={2.5} mt={5}>
										{title}
									</Typography>

									<Typography
										textAlign="center"
										color="rgba(255, 255, 255, 0.8)"
										fontSize={16}
										lineHeight={'21.17px'}
									>
										{desc}
									</Typography>
								</Paper>
							</Grid>
						))}
					</Grid>
				</Stack>

				<Stack justifyContent="center" alignItems="center" px={{ xs: 0, md: 10 }}>
					<SectionTitle bookmark={Anchors.Products} align="center" mb={{ xs: 4, md: 7.5 }}>
						{PRODUCT.title}
					</SectionTitle>
					<Container>
						<Grid container spacing={{xs: 1.5, sm: 3.5, md: 6.5}} justifyContent="center">
							{PRODUCT.items.map(({ src, title, active }, key) => (
								<Grid
									key={key}
									item
									xs={6}
									sm={6}
									md={4}
									sx={{ textAlign: 'center' }}
								>
									<Stack justifyContent="center" alignItems="center" sx={{
										width: '100%',
										height: '100%',
										p: '1px',
										overflow: 'hidden',
										borderRadius: 2,
										background: active 
											? 'linear-gradient(180deg, #7000FF 0%, #FC00FF 100%)' 
											: 'linear-gradient(180deg, #372D73 0%, #5A2966 100%)',
									}}>
										<Stack spacing={{xs: 0.5, sm: 1, md: 1.5}} justifyContent="center" alignItems="center" sx={{
											width: '100%',
											height: '100%',
											p: { xs: 2, md: 5 },
											borderRadius: 2,
											background: active 
												? 'linear-gradient(180deg, #2D0B4E 0%, #160328 100%)' 
												: '#160328',
											'img': {
												height: { xs: '50%', sm: 'unset' },
												maxHeight: '68px',
											},
											'&:hover': {
												'img, p': {
													transform: active ? 'scale(1.1)' : 'unset',
													transition: 'all .5s',
												}
											}
										}}>
											<img src={src} alt={`image-${key}`}/>
											<Typography 
												color={ active ? "#C496FF" : "#3B3164" } 
												fontSize={{xs: 11, sm: 16}} 
												fontWeight={600} 
												letterSpacing=".25rem"
												sx={{ textTransform: 'uppercase' }}
											>
												{title}
											</Typography>
										</Stack>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Container>
				</Stack>

				<Stack justifyContent="center" alignItems="center" px={{ xs: 0, md: 10 }}>
					<SectionTitle bookmark={Anchors.Partners} align="center" mb={{ xs: 4, md: 7.5 }}>
						{PARTNER.title}
					</SectionTitle>
					<Container>
						<Grid container spacing={{xs: 1.5, sm: 3.5, md: 6.5}} justifyContent="center">
							{PARTNER.items.map(({ src, title, active }, key) => (
								<Grid
									key={key}
									item
									xs={6}
									sm={6}
									md={4}
									sx={{ textAlign: 'center' }}
								>
									<Stack justifyContent="center" alignItems="center" sx={{
										width: '100%',
										height: '100%',
										p: '1px',
										overflow: 'hidden',
										borderRadius: 2,
										background: active 
											? 'linear-gradient(180deg, #7000FF 0%, #FC00FF 100%)' 
											: 'linear-gradient(180deg, #372D73 0%, #5A2966 100%)',
									}}>
										<Stack spacing={{xs: 0.5, sm: 1, md: 1.5}} justifyContent="center" alignItems="center" sx={{
											width: '100%',
											height: '100%',
											p: { xs: 3, md: 5 },
											borderRadius: 2,
											background: active 
												? 'linear-gradient(180deg, #2D0B4E 0%, #160328 100%)' 
												: '#160328',
											'img': {
												height: active ? 'unset' : { xs: '50%', sm: 'unset' },
												maxHeight: active ? 'unset' : '68px',
												width: active ? '80%' : 'unset',
												maxWidth: active ? '130px' : 'unset',
											},
											'&:hover': {
												'img, p': {
													transform: active ? 'scale(1.1)' : 'unset',
													transition: 'all .5s',
												}
											}
										}}>
											<img src={src} alt={`image-${key}`}/>
											<Typography 
												color={ active ? "#C496FF" : "#3B3164" } 
												fontSize={{xs: 11, sm: 16}} 
												fontWeight={600} 
												letterSpacing=".25rem"
												sx={{ textTransform: 'uppercase' }}
											>
												{title}
											</Typography>
										</Stack>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Container>
				</Stack>

				<Stack px={{ xs: 0, md: 10 }}>
					<SectionTitle align="center">
						{OFFICE.title}
					</SectionTitle>
					<Container>
						<Grid container spacing={{xs: 1.5, sm: 3}} rowSpacing={{xs: 1.5, sm: 3}}>
							{OFFICE.items.map(({ src, title, subtitle }, idx) => (
								<Grid item key={title} xs={6} md={3}>
									<Box sx={{
										width: "100%",
										height: 0,
										overflow: "hidden",
										paddingTop: { xs: "100%", md: "200%" },
										position: "relative",
										borderRadius: 2,
										backgroundImage: `linear-gradient(180deg, rgba(64, 54, 72, 0) 67.9%, rgba(0, 0, 0, 0.9) 100%), url(${src})`,
										backgroundRepeat: 'no-repeat',
										backgroundSize: 'cover',
										backgroundPosition: 'center',
										mixBlendMode: 'normal',
									}}>
										<Box sx={{
											position: 'absolute',
											bottom: 0,
											px: { xs: 2, sm: 4, md: 2, lg: 6},
											py: { xs: 1, sm: 2, md: 2, lg: 4},
										}}>
											<Typography fontSize={{ xs: 22, sm: 24, md: 22, lg: 24 }} lineHeight={1} fontWeight="bold" color="#FFF">{title}</Typography>
											<Typography fontSize={{ xs: 12, sm: 16, md: 14, lg: 16 }} lineHeight={1} color="rgba(255, 255, 255, 0.8)">{subtitle}</Typography>
										</Box>
									</Box>
								</Grid>
							))}
						</Grid>
					</Container>
				</Stack>

				<Stack justifyContent="center" alignItems="center" px={{ xs: 0, md: 10 }}>
					<SectionTitle align="center" bookmark={Anchors.Team}>
						{TEAM.title}
					</SectionTitle>
					<Container>
						<Grid container spacing={{xs: 1.5, sm: 2.5, md: 5}} rowSpacing={6}>
							{TEAM.items.map(({ src, name, title }, key) => (
								<Grid item xs={6} md={3} key={key}>
									<Stack spacing={2.5} justifyContent="center" alignItems="center">
										<Box sx={{
											width: "100%",
											height: 0,
											overflow: "hidden",
											paddingTop: "100%",
											position: "relative",
											borderRadius: 4,
											'&:hover': {
												'img': {
													transform: 'scale(1.1)',
													transition: 'all .5s',
												}
											}
										}}>
											<img src={src} alt={`image-${key}`} style={{
												position: "absolute",
												top: 0,
												left: 0,
												width: "100%",
												height: "100%"
											}}/>
										</Box>
										<Box sx={{textAlign: 'center'}}>
											<Typography
												fontSize={{xs: 16, sm: 24, md: 16, lg: 24}}
												fontWeight={700}
											>{name}</Typography>
											<Typography 
												fontSize={{xs: 12, sm: 14, md: 12, lg: 14}}
												fontWeight={600}
												letterSpacing="0.1rem"
												color="#714E9D"
											>{title}</Typography>
										</Box>
									</Stack>
								</Grid>
							))}
						</Grid>
					</Container>
				</Stack>

				<Stack px={{ xs: 0, md: 10 }}>
					<Container>
						<Grid container spacing={8}>
							<Grid item sm={12} lg={5}>
								<Grid container justifyContent="center" alignItems="center">
									<img src={JOB.src} alt={JOB.title} width="100%"/>
								</Grid>
							</Grid>
							<Grid item sm={12} lg={7}>
								<SectionTitle bookmark={Anchors.Jobs} mb={1}>
									{JOB.title}
								</SectionTitle>
								<Typography 
									variant="subtitle1" 
									fontSize={14} 
									lineHeight="19.64px"
									color="rgba(255, 255, 255, 0.5)"
									mb={6}
								>
									{JOB.subtitle}
								</Typography>
								<Typography fontSize={18} mb={6}>
									{JOB.desc}
								</Typography>
								<Box sx={{
									display: 'flex',
									justifyContent: {xs: 'center', md: 'flex-start'}
								}}>
									<Link href="/jobs" passHref>
										<Box component="a" sx={{
											display: 'inline-block',
											textDecoration: 'none',
											p: '2px',
											borderRadius: 7.5,
											background: 'linear-gradient(180deg, rgba(112, 0, 255, 0.7) 0%, rgba(252, 0, 255, 0.7) 100%)',
										}}>
											<Box sx={{
												px: 7, 
												py: 3,
												borderRadius: 7.5,
												background: '#000',
											}}>
												<Typography
													fontSize={22}
													fontWeight={700}
													color="#fff"
												>Explore roles</Typography>
											</Box>
										</Box>
									</Link>
								</Box>
							</Grid>
						</Grid>
					</Container>
				</Stack>
				<Box sx={{width: '100%'}}>
					<ContactForm/>
				</Box>
			</Stack>
    </BasicLayout>
  );
};

export default HomePage;
