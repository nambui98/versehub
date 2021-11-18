/* eslint-disable @next/next/no-img-element */
import type { NextPage } from 'next';

import { BasicLayout } from '@/layouts/BasicLayout';
import {
  Box,
  Button,
  Container,
  Grid,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import { SectionTitle } from '../components';
import { ArrowRightIcon } from '@/assets/index';
import { Anchors } from '../constants';

const HomePage: NextPage = () => {
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
          <span>into the lives of individuals and businesses</span>
        </Typography>

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
          DISCOVER
        </Button>
      </Box>

      <Container>
        <SectionTitle bookmark={Anchors.Services}>what do we do</SectionTitle>
        <Grid container spacing={3}>
          {[
            {
              src: '/assets/missions/image1.png',
              title: 'Game NFT & Metaverse',
              desc: 'The first true metaverse game on blockchain which have the ecosystem and experience as close as possible to real life but still providing the unlimited creativity',
            },
            {
              src: '/assets/missions/image2.png',
              title: 'Communication & Decentralized Financial Solution',
              desc: 'Communication, managing assets, sharing ideas and information... Everything about crypto in one place, ready for exploring.',
            },
            {
              src: '/assets/missions/image3.png',
              title: 'Web 3',
              desc: 'We believe that web3 is <something big> and we are working hard to research and contribute to the development of web3 technology.',
            },
            {
              src: '/assets/missions/image4.png',
              title: 'Incubation & Advisory',
              desc: 'Provide strategic advice, technical and financial support, ease researching and development for small or new teams/projects, help them get into the blockchain industry faster and get better results',
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
            { src: '/assets/logo.png', title: 'Coming soon' },
            { src: '/assets/logo.png', title: 'Coming soon' },
            { src: '/assets/logo.png', title: 'Coming soon' },
            { src: '/assets/logo.png', title: 'Coming soon' },
          ].map(({ src, title }, key) => (
            <Grid item key={key} sx={{ textAlign: 'center' }}>
              <Box sx={{ mb: 1 }}>
                <img src={src} alt={`image-${key}`} width={52} height={59.03} />
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
        <Grid container spacing={6.5} justifyContent="center">
          {[
            '/assets/partners/google-sense.svg',
            '/assets/partners/apple-google.svg',
            '/assets/partners/android.svg',
            '/assets/partners/google-domains.svg',
            '/assets/partners/google-station.svg',
          ].map((path, key) => (
            <Grid item md={12 / 5} sm={12} key={key}>
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  gap: 6.5,
                }}
              >
                <img height={32} src={path} alt={key + 'image'} />
                <img height={32} src={path} alt={key + 'image'} />
                <img height={32} src={path} alt={key + 'image'} />
              </Box>
            </Grid>
          ))}
        </Grid>

        <SectionTitle bookmark={Anchors.Team} mt={20}>
          our team
        </SectionTitle>
        <Container maxWidth="lg">
          <Grid container spacing={3}>
            {[
              ['CEO', 'Jerry Helfer'],
              ['Product Designer', 'Mary Freund'],
              ['Content Manager', 'Kurt Bates'],
              ['UX Designer', 'Daniel Hamilton'],
              ['Marketing Manager', 'Stephanie Nicol'],
              ['System Administrator', 'David Elson'],
              ['Front end Developer', 'Ricky Smith'],
              ['Social Media Manager', 'Ricky Smith'],
            ].map(([role, name], key) => (
              <Grid item md={3} sm={6} xs={12} key={key}>
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

        <Container
          sx={{
            mt: 20,
            border: (theme) => `1px solid ${theme.palette.primary.main}`,
            borderRadius: 4,
            backgroundColor: 'rgba(252, 0, 255, 0.03)',
            overflow: 'hidden',
          }}
        >
          <Container
            maxWidth="lg"
            sx={{
              py: 6.5,
              position: 'relative',
            }}
          >
            <SectionTitle bookmark={Anchors.Contact}>contact us</SectionTitle>

            <Box
              component="form"
              sx={{
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                maxWidth: { sm: '100%', md: 375 },
              }}
            >
              <TextField fullWidth placeholder="Your name" variant="outlined" />

              <TextField
                fullWidth
                placeholder="Your email"
                variant="outlined"
              />

              <TextField
                fullWidth
                placeholder="Tell us how we can help..."
                variant="outlined"
                multiline
                rows={6}
              />

              <Button
                variant="text"
                size="large"
                type="submit"
                sx={{
                  justifyContent: 'flex-start',
                  alignSelf: 'flex-start',
                  color: '#fff',

                  '& svg': { color: 'primary.light' },
                }}
                endIcon={<ArrowRightIcon />}
              >
                Send message
              </Button>
            </Box>

            <Box
              component="img"
              src={'/assets/bg2.svg'}
              sx={{
                pointerEvents: 'none',
                top: -59.58,
                right: -193.12,
                transform: 'rotate(-25.37deg)',
                display: { sm: 'none', xs: 'none', md: 'block' },
                position: 'absolute',
              }}
            />
          </Container>
        </Container>
      </Container>
    </BasicLayout>
  );
};

export default HomePage;
