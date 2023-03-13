import { ArImg, AwsImg, BlockchainImg, CocosImg, Code, DigitalOceanImg, ElasticImg, FlutterImg, GolangImg, GoogleCloundImg, GrafandImg, JavaImg, KotlinImg, MysqlImg, NextjsImg, NodejsImg, ObjCImg, PostgreSQLImg, ReactjsImg, UnityImg, UnrealImg, VRImg, VultrImg } from '@/assets/index';
import { ButtonBase } from '@/components/Button';
import Title from '@/components/SectionTitle/Title';
import { ExpandLess, ExpandMore } from '@mui/icons-material';
import { Grid, List, ListItemProps, Stack, TableCell, Typography, styled, ListItem, ListItemText, Collapse, Container, Box } from '@mui/material';
import Image from 'next/image';
import { useState } from 'react';
import { TEXT_STYLE } from 'src/styles/common/textStyles';

type Props = {}

const dataTeam = [
	'x20 Developers',
	'x5 Business Analysts',
	'x2 UI/UX Designers',
	'x1 Products Owner'
]
const dataTech = [
	{
		type: "backend",
		images: [
			JavaImg,
			NodejsImg,
			GolangImg
		]
	},
	{
		type: "Frontend",
		images: [
			ReactjsImg,
			NextjsImg,
		]
	}, {
		type: "data",
		images: [
			MysqlImg,
			ElasticImg,
			PostgreSQLImg,
			GrafandImg
		]
	}, {
		type: "cloud",
		images: [
			GoogleCloundImg,
			AwsImg,
			DigitalOceanImg,
			VultrImg
		]
	}, {
		type: "high tech",
		images: [
			ArImg,
			VRImg,
			BlockchainImg,
		]
	}, {
		type: "mobile",
		images: [
			FlutterImg,
			KotlinImg,
			ObjCImg,
		]
	}, {
		type: "game",
		images: [
			UnityImg,
			UnrealImg,
			CocosImg
		]
	},
]
const OurTeam = (props: Props) => {
	const [indexCollapseOpen, setIndexCollapseOpen] = useState<number | null>(null);

	const handleChangeCollapse = (index: number | null) => {
		setIndexCollapseOpen((prev) => {
			if (prev === index) {
				return null;
			} else {
				return index;
			}
		});

	};
	return (

		<Box position={'relative'}>
			<Box sx={{
				position: 'absolute',
				inset: 0,
				top: 'calc(-50% - 500px) ',
				backgroundImage: 'none',
				'@media (min-width: 768px)': {
					backgroundImage: 'url(/assets/bgRight.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'right'
				}
			}} />

			<Container >
				<Box sx={{
					'@media (min-width: 768px)': {
						padding: '0 123px',
					}
				}}>

					<Grid container >
						<Grid
							item xs={12} sm={8} md={8}  >
							<Title>
								Our team
							</Title>
							<Typography marginTop={{ xs: 3, sm: 5 }} variant="body1" color={"#31373E"} fontWeight={600} fontSize={{ xs: 14, sm: 18 }} lineHeight={{ xs: '22px', sm: '28px' }}>Our end-to-end IT services and innovation empower global businesses to accelerate their digital transformation journey</Typography>
						</Grid>
					</Grid>
					<Grid container>
						{
							dataTeam.map((team, index) =>
								<Grid
									marginTop={{ xs: 3, sm: 5 }}
									item xs={12} sm={3} md={3} display={'flex'} alignItems={"center"} key={index + team}>
									<Box marginRight={1}>
										<Code />
									</Box>
									<Typography variant="body1" color={"#31373E"} fontWeight={600}>{team}</Typography>
								</Grid>
							)
						}
					</Grid>
					<Box overflow={"auto"} display={{ xs: 'none', sm: 'block' }}>
						<Grid
							marginTop={{ xs: 3, sm: 5 }}
							minWidth={1000}
							flexWrap={'nowrap'}
							container >
							{
								dataTech.map((row, index) =>
									<Grid key={row.type + index} item xs={2} sm={12 / dataTech.length} md={12 / dataTech.length} >
										<Box padding={"8px "} bgcolor={"#E9EAEF"}>
											<Typography variant="body1" fontWeight={600} fontSize={18} sx={{ textTransform: "uppercase" }} textAlign={"center"} >{row.type}</Typography>
										</Box>
										<Box width={{ xs: "80px", sm: "100%" }} margin={"16px auto 0 auto"} display={'block'}>
											{row.images.map((image, index) => <Stack key={row.type + index * 2} marginTop={index > 0 ? 3 : 0} alignItems={'center'}>
												<Image alt="" objectFit='contain' src={image} />
											</Stack>)}
										</Box>
									</Grid>
								)
							}
						</Grid>

					</Box>
					<Box display={{ xs: 'block', sm: 'none' }}>
						<Box
							sx={{
								mt: 1,
							}}
							component="nav"
						>
							<List>
								{
									dataTech.map((row, index) =>
										<Box border={"1px solid #E9EAEF"} mt={1} key={row.type + index} borderRadius='8px'>
											<ListItemLink name={row.type} open={indexCollapseOpen === index} onClick={() => { handleChangeCollapse(index) }} />
											<Collapse component="li" in={indexCollapseOpen === index} timeout="auto" unmountOnExit>
												<List disablePadding>
													<Box display="flex" alignItems={"center"} columnGap={4} flexWrap={'wrap'} mx={2} mb={2} >
														{row.images.map((image, index2) =>
															<Box mt={2} key={row.type + index2 * 2}>
																<Image alt="" objectFit='contain' src={image} />
															</Box>
														)}
													</Box>
												</List>
											</Collapse>
										</Box>
									)
								}
							</List>
						</Box>
					</Box>
				</Box>
			</Container >
		</Box >
	)
}
interface ListItemLinkProps extends ListItemProps {
	name: string;
	open?: boolean;
}
function ListItemLink(props: ListItemLinkProps) {
	const { name, open, ...other } = props;

	let icon = null;
	if (open != null) {
		icon = open ? <ExpandLess /> : <ExpandMore />;
	}

	return (
		<li>
			<ListItem  {...other}  >
				<ListItemText sx={{
					color: '#000',
					textTransform: "uppercase",
					'& span': {
						...TEXT_STYLE(16, 700),
					}
				}} primary={name} />

				{icon}
			</ListItem>
		</li>
	);
}
export default OurTeam