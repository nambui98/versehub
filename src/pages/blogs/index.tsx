import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import { SecondLayout } from "@/layouts/SecondLayout";

export function getStaticProps() {
	return {
		// returns the default 404 page with a status code of 404
		notFound: true,
	};
}

const ContactPage: NextPage = () => {
	return (
		<SecondLayout>
			<Container>
				<Typography variant="h1">Blogs</Typography>
			</Container>
		</SecondLayout>
	);
};

export default ContactPage;
