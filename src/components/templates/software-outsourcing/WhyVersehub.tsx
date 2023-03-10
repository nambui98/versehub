import Title from '@/components/SectionTitle/Title';
import { Box, Container, Typography } from '@mui/material';

type Props = {}
const data = [
	{
		experienced: '10 + years',
		title: 'Game 2D & 3D'
	},
	{
		experienced: '5+ years',
		title: 'Web & Mobile Application'
	},
	{
		experienced: '5+ years',
		title: 'E-Commerce'
	},
	{
		experienced: '3+ years',
		title: 'VR, AR, Web3 & Blockchain'
	},

]
const WhyVersehub = (props: Props) => {
	return (
		<Box sx={{ backgroundColor: '#F1ECFB', }}>
			<Container >
				<Box
					sx={{
						marginBottom: "40px",
						'@media (min-width: 768px)': {
							padding: '0 123px',
							marginBottom: "80px",
						}
					}}>
					<Title marginTop={{ xs: 3, sm: 10 }}>why versehub</Title>
					<Box
						marginTop={{ xs: 3, md: 5 }}
					>
						<Typography variant="h3" color={"#31373E"} fontWeight={600} fontSize={{ xs: 16, md: 24 }}>EXPERIENCED AND PROFESSIONAL TEAM</Typography>
						{
							data.map((item, index) =>
								<Box key={item.title + index} display={'flex'}>
									<Box width={85} marginRight={2}>
										<Typography marginTop={2} variant="body1" fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>{item.experienced}</Typography>
									</Box>
									<Typography marginTop={2} variant="body1" color={"#31373E"} fontSize={{ xs: 14, sm: 16 }} fontWeight={600}>{item.title}</Typography>
								</Box>

							)
						}
						<Typography variant="body1" marginTop={3} color={"#31373E"} fontWeight={600} fontSize={{ xs: 14, sm: 16 }}>Team profile: Amazon, Yelp, FPT Software, Tiki, Vingroup,...</Typography>
						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600} fontSize={{ xs: 16, sm: 24 }}>DEMAND-DRIVEN CUSTOMIZATION</Typography>
						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600} fontSize={{ xs: 14, sm: 16 }} lineHeight={{ xs: '22px', sm: '20px' }}>The delivery timeframe can be tailored to meet the specific requirements and requests based on  individual needs and preferences.</Typography>
						<Typography variant="h3" marginTop={5} color={"#31373E"} fontWeight={600} fontSize={{ xs: 16, sm: 24 }}>REASONABLE COST</Typography>
						<Typography marginTop={2} variant="body1" color={"#31373E"} fontWeight={600} fontSize={{ xs: 14, sm: 16 }} lineHeight={{ xs: '22px', sm: '20px' }}>At an affordable cost, our services offer significant cost savings to our customers by reducing their personnel and operational expenses by up to 70%</Typography>
					</Box>
				</Box>
			</Container>

		</Box>
	);
}

export default WhyVersehub