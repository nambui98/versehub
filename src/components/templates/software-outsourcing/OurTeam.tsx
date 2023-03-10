import { ArImg, AwsImg, BlockchainImg, CocosImg, Code, DigitalOceanImg, ElasticImg, FlutterImg, GolangImg, GoogleCloundImg, GrafandImg, JavaImg, KotlinImg, MysqlImg, NextjsImg, NodejsImg, ObjCImg, PostgreSQLImg, ReactjsImg, UnityImg, UnrealImg, VRImg, VultrImg } from '@/assets/index';
import Title from '@/components/SectionTitle/Title';
import { Box, Container, Grid, Stack, TableCell, Typography, styled } from '@mui/material';
import Image from 'next/image';

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
					<Box overflow={"auto"}>
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
												<Image objectFit='contain' src={image} />
											</Stack>)}
										</Box>
									</Grid>
								)
							}
						</Grid>

					</Box>
				</Box>
			</Container >
		</Box >
	)
}

export default OurTeam