import { DocumentSVG, Edit2SVG, SearchNormalSVG, StarSVG, TaskSVG } from '@/assets/index'
import Title from '@/components/SectionTitle/Title'
import { Colors } from '@/constants/index'
import { Box, Container, Typography } from '@mui/material'

type Props = {}
const data = [
	{
		icon: <DocumentSVG />,
		text: 'Requirement'
	},
	{
		icon: <SearchNormalSVG />,
		text: 'Analysis & Consultant'
	},
	{
		icon: <TaskSVG />,
		text: 'Proposal'
	},
	{
		icon: <Edit2SVG />,
		text: 'Contract Sign-off'
	},
	{
		icon: <StarSVG />,
		text: 'Project<br/>Kick-off'
	},
]
function HowToCallaborateWithUs({ }: Props) {
	return (
		<Box>
			<Container >
				<Box sx={{
					'@media (min-width: 768px)': {
						padding: '0 123px',
					}
				}}>
					<Title>HOW TO COLLABORATE WITH US</Title>
					<Box display={'flex'} flexWrap={{ xs: 'wrap', sm: 'nowrap' }} marginTop={{ xs: 3, sm: 5 }}>
						{
							data.map((item, index) => {
								return <Box
									key={item.text + index}
									marginLeft={{ xs: 0, sm: index === 0 ? 0 : `calc(-15% / 4)` }}
									position={'relative'}
									height={{ xs: '50px', sm: 174 }}
									width={"100%"}
									display={{ xs: 'flex', sm: 'block' }}
									alignItems={'center'}
								>
									<Box
										key={item.text + index}
										width={{ xs: 47, sm: "100%" }}
										height={{ xs: 32, sm: "100%" }}
										marginRight={{ xs: 2, sm: 0 }}
										sx={{
											backgroundColor: '#EBDEFF',
											clipPath: 'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
											display: 'flex',
											justifyContent: 'center',
											alignItems: 'center',
											'@media (min-width: 768px)': {
												clipPath: index === 0 ? 'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 0% 0%)' : 'polygon(85% 0%, 100% 50%, 85% 100%, 0% 100%, 15% 50%, 0% 0%)',
												backgroundColor: index % 2 === 1 ? '#fff' : '#EBDEFF',
											}
										}}>
										<Typography display={{ xs: 'block', sm: 'none' }} fontWeight={700} fontSize={18} >{index + 1}</Typography>
									</Box>
									<Box sx={{
										alignItems: 'center',
										position: 'relative',
										display: 'flex',
										width: '100%',
										'@media (min-width: 768px)': {
											top: "50%", left: "50%", transform: 'translate(-50%, -50%)',
											position: 'absolute',
											display: 'block',
											width: 'auto'
										}
									}}>
										{item.icon}
										<Typography
											marginLeft={{ xs: 1, sm: 0 }}
											fontSize={{ xs: 14, sm: 18 }} fontWeight={500} color={Colors.dark100}
											dangerouslySetInnerHTML={{ __html: item.text }}
										/>
									</Box>
								</Box>;
							}
							)
						}
					</Box>
				</Box>
			</Container>
		</Box>
	)
}

export default HowToCallaborateWithUs