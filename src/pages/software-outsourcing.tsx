import Banner from "@/components/templates/software-outsourcing/Banner";
import HowToCallaborateWithUs from "@/components/templates/software-outsourcing/HowToCallaborateWithUs";
import OurTeam from "@/components/templates/software-outsourcing/OurTeam";
import WhatWeDo from "@/components/templates/software-outsourcing/WhatWeDo";
import WhyVersehub from "@/components/templates/software-outsourcing/WhyVersehub";
import { BasicLayout } from "@/layouts/BasicLayout";
import { Box, Container, Stack } from "@mui/material";
import { NextPage } from "next";
import BgImg from '../assets/background.png'
import Head from "next/head";
import OurCaseStudies from "@/components/templates/software-outsourcing/OurCaseStudies";
import { ContactForm } from "@/components/ContactForm";

const SoftwareOutsourcingPage: NextPage = () => <>
	<Head>
	</Head>
	<BasicLayout>
		<Banner />
		<Stack spacing={{ xs: 5, sm: 10 }}>
			<WhatWeDo />
			<WhyVersehub />
			<OurTeam />
			<HowToCallaborateWithUs />
			<OurCaseStudies />
			<Box position={'relative'}>
				<Box sx={{
					position: 'absolute',
					inset: 0,
					top: '-50%',
					backgroundImage: 'none',
					'@media (min-width: 768px)': {
						backgroundImage: 'url(../assets/bgLeft.png)', backgroundRepeat: 'no-repeat', backgroundSize: 'contain', backgroundPosition: 'left'
					}
				}} />
				<Container>
					<Box >
						<ContactForm />
					</Box>
				</Container>
			</Box>
		</Stack>

	</BasicLayout>
</>
export default SoftwareOutsourcingPage;