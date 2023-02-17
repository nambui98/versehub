import React from "react";
import Link from "next/link";
import { Grid, Box, Container, Typography, Stack, styled, useMediaQuery } from "@mui/material";
import { FOOTER } from "@/constants/index";
import { Logo } from "@/components/index";
import PhoneOutlinedIcon from "@mui/icons-material/PhoneOutlined";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { useRouter } from "next/router";

export interface FooterProps { }

export const Footer: React.FC<FooterProps> = () => {
	const router = useRouter()
	const isHomepage = router.pathname === '/'
	const width767 = useMediaQuery('(max-width: 767px)')

	return (
		<Box component="footer" mt={{lg: 15, xs: 0}}>
			<Container sx={{
				padding: `40px 0 40px`,
				position: 'relative',
				textTransform: 'uppercase',
				'@media (min-width: 768px)': {
					padding: `${isHomepage ? '80px' : 0} 0 80px`,
				}
			}}>
				{(isHomepage || width767) && <Box sx={{
					position: 'absolute',
					top: 0,
					left: '50%',
					transform: 'translateX(-50%)',
					width: '100%',
					maxWidth: '1120px',
					height: '4px',
					background: '#5727A3',
					'@media (max-width: 767px)': {
						width: 'calc(100% - 32px)'
					}
				}}></Box>}
				<Logo colored logoFooter={true} />
				<Box sx={{
					display: 'flex',
					justifyContent: 'center',
					margin: '24px 0 16px',
					flexDirection: 'column',
					alignItems: 'center',
					'@media (min-width: 768px)': {
						flexDirection: 'row',
						margin: '40px 0 48px',
					}
				}}>
					<Item>
						<img src={FOOTER.location.icon} alt="location" />
						<TextItem fontSize={14} ml={1}>
							{FOOTER.location.desc}
						</TextItem>
					</Item>
					<Item>
						<img src={FOOTER.mail.icon} alt="mail" />
						<TextItem fontSize={14} ml={1}>
							{FOOTER.mail.desc}
						</TextItem>
					</Item>
					<Item sx={{
						marginRight: '0 !important'
					}}>
						<img src={FOOTER.phone.icon} alt="phone" />
						<TextItem fontSize={14} ml={1}>
							{FOOTER.phone.desc}
						</TextItem>
					</Item>
				</Box>
				<Box
					sx={{
						height: "100%",
						display: "flex",
						flexDirection: "column",
						justifyContent: 'center',
						alignItems: 'center',
						marginBottom: '40px'
					}}	
				>
					<Stack alignItems={'center'} direction="row" spacing={1}>
						{FOOTER.social.map(({ icon, href }, idx) => (
							<a key={idx} href={href} target={'_blank'}>
								<Box sx={{
									padding: '0 20px'
								}}>
									<img src={icon} alt={href} style={{ cursor: "pointer" }} />
								</Box>
							</a>
						))}
					</Stack>
				</Box>
				<Box>
					<Typography sx={{
						textAlign: "center",
						...TEXT_STYLE(16, 600, '#5727A3')
					}}>
						VerseHub © 2023
					</Typography>
				</Box>
			</Container>
		</Box>
	);
};

const Item = styled(Box)({
	display: 'flex',
	alignItems: 'center',
	marginBottom: 24,
	
	'@media(min-width: 768px)': {
		marginRight: 80,
		marginBottom: 0
	}
})

const TextItem = styled(Typography)({
	...TEXT_STYLE(16, 600, '#31373E')
})
