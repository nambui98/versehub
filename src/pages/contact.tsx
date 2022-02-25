import type { NextPage } from "next";
import { Container, Box } from "@mui/material";
import { SecondLayout } from "@/layouts/SecondLayout";
import { ContactForm } from "../components";

const ContactPage: NextPage = () => {
	return (
		<SecondLayout>
			<Container>
				<Box mt={20}>
					<ContactForm />
				</Box>
			</Container>
		</SecondLayout>
	);
};

export default ContactPage;
