import { BefitterImg, CowitupImg, NextverseImg, PenPalImg } from '@/assets/index'
import Title from '@/components/SectionTitle/Title'
import { Box, Container, Grid, Typography } from '@mui/material'
import Image from 'next/image'

type Props = {}
const data = [
	{
		icon: BefitterImg,
		text: 'beFITTER',
		desciption: 'Fitnessfi and Socialfi app - M2E'
	},
	{
		icon: NextverseImg,
		text: 'NextVerse',
		desciption: 'Metaverse'
	},
	{
		icon: PenPalImg,
		text: 'Penpal',
		desciption: 'NFT Collection'
	},
	{
		icon: CowitupImg,
		text: 'Cow It Up',
		desciption: 'Casual Game'
	}
]
function OurCaseStudies({ }: Props) {
	return (
		<Box>
			<Container >
				<Box sx={{
					'@media (min-width: 768px)': {
						padding: '0 123px',
					}
				}}>
					<Title>our case studies</Title>
					<Grid container columnSpacing={{ xs: 4, sm: 0 }} marginTop={{ xs: 0, sm: 5 }}>
						{
							data.map((item, index) =>
								<Grid key={item.text} item marginTop={{ sm: index > 1 ? 10 : 0, xs: 3 }} display={'flex'} flexDirection={'column'} justifyContent={'start'} alignItems={'center'} xs={6} sm={6} md={6}  >
									<Box height={{ xs: 68, sm: 167 }} display={"flex"}>
										<Image objectFit='contain' src={item.icon} />
									</Box>
									<Typography variant='h2' color={"#151515"} fontWeight={700} marginTop={8} display={{ xs: 'none', sm: 'block' }}>{item.text}</Typography>
									<Typography variant='h3' color="#151515" fontWeight={500} marginTop={{ xs: 1, sm: 2 }} textAlign={'center'} fontSize={{ xs: 14, sm: 24 }}>{item.desciption}</Typography>
								</Grid>
							)
						}
					</Grid>
				</Box>
			</Container>
		</Box>
	)
}

export default OurCaseStudies