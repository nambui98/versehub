import React from 'react';
import Link from "next/link";
import { Grid, Box, Container, Typography, Stack } from '@mui/material';
import { FOOTER } from '@/constants/index';
import { Logo } from '@/components/index';

export interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box component="footer" mt={15}>
			<Container>
				<Grid container spacing={2}>
					<Grid item xs={12} sm={7}>
						<Stack alignItems={{xs: 'center', sm: 'unset'}}>
							<Logo colored/>
							<Grid container justifyContent={{xs: 'center', sm: 'unset'}} alignItems="center" mt={4}>
								<img src={FOOTER.location.icon} alt="location" />
								<Typography fontSize={14} ml={0.5}>{FOOTER.location.desc}</Typography>
							</Grid>
							<Grid container justifyContent={{xs: 'center', sm: 'unset'}} alignItems="center" mt={1}>
								<img src={FOOTER.mail.icon} alt="mail" />
								<Typography fontSize={14} ml={0.5}>{FOOTER.mail.desc}</Typography>
							</Grid>
						</Stack>
					</Grid>
					<Grid item xs={12} sm={5}>
						<Box sx={{
							height: '100%',
							display: 'flex',
							flexDirection: 'column',
							justifyContent: { xs: 'center', sm: 'end' },
							alignItems: { xs: 'center', sm: 'end' }
						}}>
							<Stack direction="row" spacing={1}>
								{FOOTER.social.map(({icon, href}, idx) => (
									<Link key={idx} href={href} passHref>
										<img src={icon} alt={href} />
									</Link>
								))}
							</Stack>
						</Box>
					</Grid>
				</Grid>
			</Container>
			<Box sx={{width: '100%', height: '1px', background: '#431269', mt: 4, mb: 2}}/>
			<Container>
				<Grid container mb={2}>
					<Grid item xs={12} sm={4}>
						<Typography fontSize={14} color="#58487B" textAlign={{ xs: 'center', sm: 'left' }}>© Versehub, 2021</Typography>
					</Grid>
					<Grid item xs={12} sm={8}>
						<Grid container justifyContent={{ xs: 'center', sm: 'end' }}>
							<Typography fontSize={14} color="#8D6FCF">
								{FOOTER.links.map(el => el.desc).join(' | ')}
							</Typography>
						</Grid>
					</Grid>
				</Grid>
			</Container>
      {/* <Container sx={{ py: 5 }}>
        <Grid container justifyContent="space-between" spacing={6.5}>
          <Grid item>
            <Logo sx={{ mb: 6.5 }} />

            <Box
              display="flex"
              sx={{
                wordBreak: 'break-word',
                flexDirection: { md: 'row', xs: 'column' },
                gap: { md: 6.5, xs: 2 },
              }}
            >
              {[
                [
                  LocationIcon,
                  '71 Knighthead point, London, England, E14, BSS',
                ],
                [MailOutlineIcon, 'info@versehub.io'],
              ].map(([icon, txt], key) => (
                <Typography
                  key={key}
                  component="div"
                  sx={{
                    fontSize: 18,
                    lineHeight: '21px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 1.5,
                  }}
                >
                  <div>{React.createElement(icon)}</div>
                  {txt}
                </Typography>
              ))}
            </Box>
          </Grid>

          <Grid item>
            <Box sx={{ display: 'flex', gap: 2 }}>
              {[Linkedln, Twitter, FacebookIcon, Medium].map((Icon, key) => (
                <a key={key} href="#">
                  <Icon />
                </a>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>

      <Box bgcolor="primary.main">
        <Container
          sx={{
            py: 3,
            color: '#fff',
            display: 'flex',
            gap: 6.5,
            justifyContent: 'space-between',
            flexDirection: { md: 'row', xs: 'column-reverse' },
          }}
        >
          <Typography>© Versehub, 2021</Typography>

          <Box
            sx={{
              display: 'flex',
              flexDirection: { md: 'row', xs: 'column' },
              gap: { md: 6.5, xs: 3 },
            }}
          >
            {['Privacy Policy', 'Terms & Conditions', 'Cookie Policy'].map(
              (txt, key) => (
                <Link color="inherit" href="#" key={key}>
                  {txt}
                </Link>
              )
            )}
          </Box>
        </Container>
      </Box> */}
    </Box>
  );
};
