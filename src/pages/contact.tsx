import type { NextPage } from "next";
import { Container } from "@mui/material";
import { SecondLayout } from "@/layouts/SecondLayout";
import { ContactForm } from "../components";

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
				<ContactForm />
			</Container>
		</SecondLayout>
	);
};

export default ContactPage;
