import type { NextPage } from "next";
import { Container } from "@mui/material";
import { SecondLayout } from "@/layouts/SecondLayout";
import { ContactForm } from "../components";

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
