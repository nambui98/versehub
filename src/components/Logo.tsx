import Link from "next/link";
import { Box, BoxProps, Typography } from '@mui/material';
export interface LogoProps extends BoxProps { }

export const Logo: React.FC<LogoProps> = (props) => {
  return (
    <Box
      {...props}
      sx={{ display: 'flex', alignItems: 'center', gap: 1.5, ...props.sx }}
    >
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src="/assets/logo.png" alt="logo" height={42} width={36.64} />
      <Link href="/" passHref>
        <Typography color="white" component="h1" variant="h6" fontFamily="'Blackpast DEMO'">
          versehub
        </Typography>
      </Link>
    </Box>
  );
};
