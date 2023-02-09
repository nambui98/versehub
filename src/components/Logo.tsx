import Link from "next/link";
import { Box, BoxProps, Typography } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
export interface LogoProps extends BoxProps {
	colored?: boolean;
	logoFooter?: boolean
}

export const Logo: React.FC<LogoProps> = (props) => {
	const width767 = useMediaQuery('(max-width: 767px)')
	const logoSrc = props.colored
		? "/assets/logo_header.png"
		: "/assets/logo_header.png";

	return (
		<Box
			{...props}
			sx={{ display: "flex", alignItems: "center", justifyContent: 'center', gap: 1.5, ...props.sx }}
		>
			{/* eslint-disable-next-line @next/next/no-img-element */}
			{/* <img src="/assets/logo.png" alt="logo" height={42} width={36.64} /> */}
			<Link href="/#" passHref>
				<img src={logoSrc} alt="logo" style={{ cursor: "pointer", maxWidth: width767 ? (props.logoFooter ? '178px' : '149px') : '212px' }}  />
				{/* <Typography color="white" component="h1" variant="h6" fontFamily="'Blackpast DEMO'">
          versehub
        </Typography> */}
			</Link>
		</Box>
	);
};
