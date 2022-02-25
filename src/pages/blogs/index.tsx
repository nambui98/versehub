import type { NextPage } from "next";
import { Container, Typography } from "@mui/material";
import { SecondLayout } from "@/layouts/SecondLayout";

const ContactPage: NextPage = () => {
	return (
		<SecondLayout>
			<Container>{/* <Typography variant="h1">Blogs</Typography> */}</Container>
		</SecondLayout>
	);
};

export default ContactPage;
