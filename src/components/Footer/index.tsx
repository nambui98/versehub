import { Grid, Box, Container, Typography, Link } from '@mui/material';
import {
  LocationIcon,
  MailOutlineIcon,
  Linkedln,
  Twitter,
  FacebookIcon,
  Medium,
} from '@/assets/index';
import { Logo } from '..';
import React from 'react';
export interface FooterProps {}

export const Footer: React.FC<FooterProps> = () => {
  return (
    <Box component="footer" sx={{ bgcolor: 'primary.dark', mt: 15 }}>
      <Container sx={{ py: 5 }}>
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
      </Box>
    </Box>
  );
};
