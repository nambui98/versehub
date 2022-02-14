import React, { useState } from "react";
import { Box, Button, Grid, Container, TextField, Snackbar, Alert } from "@mui/material";
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
				border: (theme) => `1px solid ${theme.palette.primary.main}`,
				borderRadius: 4,
				backgroundColor: "rgba(66, 0, 255, 0.03)",
				backgroundImage: "url(/assets/bg_form.svg)",
				backgroundRepeat: 'no-repeat',
				backgroundSize: 'contain',
				overflow: "hidden",
			}}
		>
			<Snackbar open={showSnack} onClose={() => setShowSnack(false)} autoHideDuration={2000}>
				<Alert severity="success" onClose={() => setShowSnack(false)} sx={{ width: '100%' }}>
					Sent
				</Alert>
			</Snackbar>
			<Grid container px={{ xs: 5, sm: 10, md: 20 }} py={12.5}>
				<Grid item xs={12} md={6}>
					<SectionTitle>contact us</SectionTitle>
				</Grid>
				<Grid item xs={12} md={6}>
					<Box
						component="form"
						onSubmit={handleSubmit}
						sx={{
							display: "flex",
							flexDirection: "column",
							gap: 2,
							// maxWidth: { sm: "100%", md: 375 },
						}}
					>
						<Box sx={{
							width: '100%',
							p: '1px',
							borderRadius: '8px',
							background: 'linear-gradient(180deg, #7000FF 0%, #FC00FF 100%)',
						}}>
							<TextField
								fullWidth
								placeholder="Your name"
								variant="outlined"
								value={textName}
								onChange={(e) => setTextName(e.target.value)}
								error={errorName}
								helperText={errorName && 'Empty name'}
								sx={{
									background: '#1B062A',
									borderRadius: '8px',
									'& .MuiInputBase-input': {
										fontSize: 18,
										color: '#7B648D',
										padding: '18px 24px',
									},
								}}
							/>
						</Box>
						<Box sx={{
							width: '100%',
							p: '1px',
							borderRadius: '8px',
							background: 'linear-gradient(180deg, #7000FF 0%, #FC00FF 100%)',
						}}>
							<TextField
								fullWidth
								placeholder="Your email"
								variant="outlined"
								value={textEmail}
								onChange={(e) => setTextEmail(e.target.value)}
								error={errorEmail}
								helperText={errorEmail && 'Incorrect email'}
								sx={{
									background: '#1B062A',
									borderRadius: '8px',
									'& .MuiInputBase-input': {
										fontSize: 18,
										color: '#7B648D',
										padding: '18px 24px',
									},
								}}
							/>
						</Box>
						<Box sx={{
							width: '100%',
							p: '1px',
							borderRadius: '8px',
							background: 'linear-gradient(180deg, #7000FF 0%, #FC00FF 100%)',
						}}>
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
								sx={{
									background: '#1B062A',
									borderRadius: '8px',
									'& .MuiInputBase-input': {
										fontSize: 18,
										color: '#7B648D',
										padding: '18px 24px',
									},
									'& .MuiInputBase-root': {
										padding: 0
									}
								}}
							/>
						</Box>
						<Button
							variant="contained"
							size="large"
							type="submit"
							sx={{
								// justifyContent: "flex-start",
								// alignSelf: "flex-start",
								color: "#fff",
								fontSize: { xs: 18, sm: 24 },
								py: 1,
								background: 'linear-gradient(94.2deg, #6603E4 26.45%, #C624FF 84.03%)',
								borderRadius: '80px',
								// "& svg": { color: "primary.light" },
							}}
							endIcon={<ArrowRightIcon />}
						>
							Send message
						</Button>
					</Box>
				</Grid>
				{/* <Box
					component="img"
					src={"/assets/bg_form.svg"}
					sx={{
						pointerEvents: "none",
						top: -59.58,
						right: -193.12,
						// transform: "rotate(-25.37deg)",
						display: { sm: "none", xs: "none", md: "block" },
						position: "absolute",
					}}
				/> */}
			</Grid>
		</Container>
	);
}
