/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';
import Link from 'next/link';
import { BasicLayout } from '@/layouts/BasicLayout';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Theme,
  Typography,
  // Link,
  useMediaQuery,
} from '@mui/material';
import { SectionTitle, ContactForm } from '../components';
import { ArrowRightIcon } from '@/assets/index';
import { Anchors } from '../constants';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';


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
        <Typography
          variant="h2"
          component="div"
          sx={{
            px: { sm: 2 },
            display: 'flex',
            flexFlow: 'column wrap',
            mb: 6.5,
          }}
          color={'rgba(255, 255, 255, 0.5)'}
          align="center"
        >
          <span>we bring</span>
          <Typography variant="h1" color="#fff" my={2}>
            blockchain technology
          </Typography>
          <span>into individual lives and businesses</span>
        </Typography>

        <Link href="#services" passHref>
          <Button
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
          </Button>
        </Link>
      </Box>

      <Container>
        <SectionTitle bookmark={Anchors.Services}>what do we do</SectionTitle>
        <Grid container spacing={3}>
          {[
            {
              src: '/assets/missions/image1.png',
              title: 'Game NFT & Metaverse',
              desc: 'The first true metaverse game on the blockchain which has an ecosystem and provides a real user experience as close to real life experiences with unlimited possibilities.',
            },
            {
              src: '/assets/missions/image2.png',
              title: 'Communication & Decentralized Financial Solution',
              desc: 'Our products bring a combined solution for communication, asset management, and co-working. Everything crypto-related in one place, ready for exploring.',
            },
            {
              src: '/assets/missions/image3.png',
              title: 'Web3',
              desc: 'We believe Web3 will be a game-changing technology of the internet and we are working hard to research and contribute to its development.',
            },
            {
              src: '/assets/missions/image4.png',
              title: 'Incubation & Advisory',
              desc: 'We provide strategic, technical, and financial support to other teams and projects for their R&D, while helping them adopt blockchain for better results.',
            },
          ].map(({ src, title, desc }, index) => (
            <Grid item md={3} key={index}>
              <Paper
                sx={{
                  background:
                    'linear-gradient(180deg, #310032 0%, rgba(84, 0, 85, 0) 100%)',
                  borderRadius: 4,
                  py: 4,
                  px: 3,
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

                <Typography variant="h3" mb={2} mt={3}>
                  {title}
                </Typography>

                <Typography
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

        <SectionTitle mt={20} align="center" bookmark={Anchors.Products}>
          release
        </SectionTitle>
        <Grid container spacing={6.5} justifyContent="center">
          {[
            { src: '/assets/nextverse-logo.png', title: 'Coming soon' },


          ].map(({ src, title }, key) => (
            <Grid
              item
              xs={6}
              sm={6}
              md={2}
              key={key}
              sx={{ textAlign: 'center' }}
            >
              <Box sx={{ mb: 1 }}>
                <img src={src} alt={`image-${key}`} height={59.03} />
              </Box>
              <Typography align="center" variant="h3">
                {title}
              </Typography>
            </Grid>
          ))}
        </Grid>

        <SectionTitle mt={20} align="center" bookmark={Anchors.Partners}>
          partners
        </SectionTitle>
        {mobile ? (
          <Grid container spacing={6.5} justifyContent="center">
            {[
              { src: '/assets/partners/icetealabs_logo_square.png' },
            ].map(({ src }, key) => (
              <Grid item xs={6} sm={6} key={key} sx={{ textAlign: 'center' }}>
                <Box sx={{ mb: 3 }}>
                  <img
                    src={src}
                    alt={`image-${key}`}
                    width={152}
                    height={159.03}
                  />
                </Box>
                <Typography align="center" variant="h3">
                </Typography>
              </Grid>
            ))}
          </Grid>
        ) : (
          <Grid container spacing={6.5} justifyContent="center">
            {[
              '/assets/partners/icetealabs_logo_square.png',
            ].map((path, key) => (
              <Grid item md={12 / 5} sm={12} key={key}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 6.5,
                  }}
                >
                  <img src={path} alt={key + 'image'} />
                </Box>
              </Grid>
            ))}
          </Grid>
        )}

        <SectionTitle align="center" bookmark={Anchors.Team} mt={20}>
          our team
        </SectionTitle>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              ['CEO/Founder', 'Quy Vu'],
              ['CTO', 'Canh Ho'],
              ['Game Designer', 'Jolly'],
              ['Software Engineer', 'Tuyen Nguyen'],
              ['Marketing Lead', 'Biba Nguyen'],
              ['Software Engineer', 'Hung Nguyen'],
              ['3D Artist', 'Hung Nguyen'],
            ].map(([role, name], key) => (
              <Grid item md={3} sm={6} xs={6} key={key}>
                <Box
                  sx={{
                    display: 'flex',
                    flexDirection: 'column',
                  }}
                >
                  <Box
                    sx={{
                      paddingTop: '100%',
                      backgroundPosition: 'center',
                      backgroundSize: 'cover',
                    }}
                    style={{
                      backgroundImage: `url(/assets/teams/${key + 7}.png)`,
                    }}
                  />

                  <Typography variant="h3" fontSize={24} mt={3} mb={1.5}>
                    {name}
                  </Typography>
                  <Typography fontSize={18} color="primary.light">
                    {role}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>

				<Container maxWidth="lg" sx={{mt: 20}}>
					<Grid container spacing={8}>
						<Grid item sm={12} lg={7}>
							<SectionTitle bookmark={Anchors.Jobs} mb={1}>
								join our journey
							</SectionTitle>
							<Typography variant="h3" fontSize={24} mb={8} fontWeight="bold">
								Excellent products need excellent people. Our pioneering team is looking for new members to join the fleet. 
							</Typography>
							<Typography fontSize={24}>
								VerseHub is powered by people with long term perspectives and big ideas, it is a diverse group of problem solvers and innovators who share the same desire of building great products. Come join us and become who you would want to be, contribute to the belonging and inclusive company culture while together working on the mission of bringing cutting-edge technologies such as Virtual Reality, Web3.0 into individual lives and businesses.
							</Typography>
						</Grid>
						<Grid item sm={12} lg={5}>
							{/* <img src="https://placekitten.com/500/500" alt="Image" width="100%"/> */}
							<Grid container justifyContent="center" alignItems="center">
								<BusinessCenterIcon sx={{ fontSize: 350 }} />
							</Grid>
						</Grid>
					</Grid>
					<Grid container justifyContent="center" alignItems="center" sx={{mt: 10}}>
						<Link href="/jobs" passHref>
							<Button sx={{
								background: "rgba(196, 196, 196, 0.3)", 
								borderRadius: "30px", 
								px: 6, 
								py: 3,
								fontSize: "24px",
								fontWeight: "bold"
							}}>
								Explore roles
							</Button>
						</Link>
					</Grid>
				</Container>
				<ContactForm/>
      </Container>
    </BasicLayout>
  );
};

export default HomePage;
