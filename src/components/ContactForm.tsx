import React, { useState } from "react";
import { Box, Button, Container, TextField, Snackbar, Alert } from "@mui/material";
import { SectionTitle } from "../components";
import { ArrowRightIcon } from "../assets/index";
import { Anchors } from "../constants";

export const ContactForm = () => {
	const [textName, setTextName] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textMessage, setTextMessage] = useState("");
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [showSnack, setShowSnack] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!textName) {
			setErrorName(true);
			setTimeout(() => setErrorName(false), 2000);
			return;
		}
		if (!textEmail || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(textEmail)) {
			setErrorEmail(true);
			setTimeout(() => setErrorEmail(false), 2000);
			return;
		}
		if (!textMessage) {
			setErrorMessage(true);
			setTimeout(() => setErrorMessage(false), 2000);
			return;
		}
		const response = await fetch("/api/contact", {
			method: "POST",
			body: JSON.stringify({
				name: textName,
				email: textEmail,
				message: textMessage,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setShowSnack(true);
		setTextName('');
		setTextEmail('');
		setTextMessage('');
	};

	return (
		<Container
			id={Anchors.Contact}
			sx={{
				mt: 20,
				border: (theme) => `1px solid ${theme.palette.primary.main}`,
				borderRadius: 4,
				backgroundColor: "rgba(252, 0, 255, 0.03)",
				overflow: "hidden",
			}}
		>
			<Snackbar open={showSnack} onClose={() => setShowSnack(false)} autoHideDuration={2000}>
				<Alert severity="success" onClose={() => setShowSnack(false)} sx={{ width: '100%' }}>
					Sent
				</Alert>
			</Snackbar>
			<Container
				maxWidth="lg"
				sx={{
					py: 6.5,
					position: "relative",
				}}
			>
				<SectionTitle>contact us</SectionTitle>
				<Box
					component="form"
					onSubmit={handleSubmit}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 2,
						maxWidth: { sm: "100%", md: 375 },
					}}
				>
					<TextField
						fullWidth
						placeholder="Your name"
						variant="outlined"
						value={textName}
						onChange={(e) => setTextName(e.target.value)}
						error={errorName}
						helperText={errorName && 'Empty name'}
					/>
					<TextField
						fullWidth
						placeholder="Your email"
						variant="outlined"
						value={textEmail}
						onChange={(e) => setTextEmail(e.target.value)}
						error={errorEmail}
						helperText={errorEmail && 'Incorrect email'}
					/>
					<TextField
						fullWidth
						placeholder="Tell us how we can help..."
						variant="outlined"
						multiline
						rows={6}
						value={textMessage}
						onChange={(e) => setTextMessage(e.target.value)}
						error={errorMessage}
						helperText={errorMessage && 'Empty message'}
					/>
					<Button
						variant="text"
						size="large"
						type="submit"
						sx={{
							justifyContent: "flex-start",
							alignSelf: "flex-start",
							color: "#fff",

							"& svg": { color: "primary.light" },
						}}
						endIcon={<ArrowRightIcon />}
					>
						Send message
					</Button>
				</Box>
				<Box
					component="img"
					src={"/assets/bg2.svg"}
					sx={{
						pointerEvents: "none",
						top: -59.58,
						right: -193.12,
						transform: "rotate(-25.37deg)",
						display: { sm: "none", xs: "none", md: "block" },
						position: "absolute",
					}}
				/>
			</Container>
		</Container>
	);
}
