import { Box2, Game, Mobile, Monitor } from '@/assets/index';
import Title from '@/components/SectionTitle/Title';
import { Box, Container, Grid, Typography } from '@mui/material';
import { TEXT_STYLE } from 'src/styles/common/textStyles';

type Props = {}
const data = [
	{
		icon: <Mobile />,
		text: 'Mobile App Development'
	},
	{
		icon: <Game />,
		text: 'Game Development'
	},
	{
		icon: <Monitor />,
		text: 'Website Development'
	},
	{
		icon: <Box2 />,
		text: 'Web3/Blockchain Products'
	},

];
const WhatWeDo = (props: Props) => {
	return (
		<Container >
			<Box
				sx={{
					'@media (min-width: 768px)': {
						padding: '0 123px',
					}
				}}>
				<Grid container>

					<Grid
						marginTop={{ xs: 3, sm: 10 }}
						item xs={12} sm={6} md={6}  >
						<Title>
							What we do
						</Title>
						<Typography variant="h2" sx={{
							marginTop: "16px",
							lineHeight: "28px",
							...TEXT_STYLE(14, 500, '#31373E'),
							'@media (min-width: 768px)': {
								...TEXT_STYLE(18, 500, '#31373E'),
								marginTop: "40px",
							}
						}}>
							Our core team comprises a group of highly skilled professionals with extensive experience in researching and developing the latest cutting-edge technologies.
						</Typography>
					</Grid>

				</Grid>
				<Grid
					container
					columnSpacing={"20px"}
				>
					{data.map((item: any, index: number) => (
						<Grid
							marginTop={{ xs: 3, sm: 5 }}
							item xs={6} sm={3} md={3} key={index} >
							<Box style={{
								display: 'flex',
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center", textAlign: "center"
							}}>
								{item.icon}
								<Typography marginTop={2} fontWeight={600} fontSize={{ xs: 14, sm: 18 }} color={"#31373E"}>{item.text}</Typography>
							</Box>
						</Grid>
					))}
				</Grid>
			</Box>
		</Container>
	);
}

export default WhatWeDo