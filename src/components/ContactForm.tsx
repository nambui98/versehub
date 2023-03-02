import React, { useState } from "react";
import {
	Box,
	Button,
	Grid,
	Container,
	TextField,
	Snackbar,
	Alert,
	Backdrop,
	CircularProgress,
} from "@mui/material";
import { SectionTitle } from "../components";
import { ArrowRightIcon } from "../assets/index";
import { Anchors } from "../constants";
import Typography from "@mui/material/Typography";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { styled } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import { ButtonBase } from "./Button";

export const ContactForm = () => {
	const [textName, setTextName] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textMessage, setTextMessage] = useState("");
	const [errorName, setErrorName] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	const [showSnack, setShowSnack] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(false);
	console.log(textMessage.length, 321)
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
		setShowBackdrop(true);
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
		setShowBackdrop(false);
		setShowSnack(true);
		setTextName("");
		setTextEmail("");
		setTextMessage("");
	};

	return (
		<>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<Snackbar
				open={showSnack}
				onClose={() => setShowSnack(false)}
				autoHideDuration={2000}
			>
				<Alert
					severity="success"
					onClose={() => setShowSnack(false)}
					sx={{ width: "100%" }}
				>
					Sent
				</Alert>
			</Snackbar>

			<Box sx={{
				textAlign: 'center',
				maxWidth: '544px',
				margin: '80px auto',
				'@media (min-width: 768px)': {
					margin: '0 auto'
				},
				'@media (max-width: 1199px)': {
					marginBottom: '80px'
				}
			}}>
				<Typography variant="h2" sx={{
					...TEXT_STYLE(64, 600, '#1B0044'),
					fontSize: '40px !important',
					textTransform: 'uppercase',
					marginBottom: '40px',
					'@media (min-width: 768px)': {
						fontSize: '64px !important',
						marginBottom: '80px',
					}
				}}>contact us</Typography>
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
					<Box>
						<TextField
							fullWidth
							placeholder="Your name"
							variant="outlined"
							value={textName}
							onChange={(e) => setTextName(e.target.value)}
							error={errorName}
							helperText={errorName && "Empty name"}
							sx={{
								background: "#ffffff",
								border: '1px solid #E9EAEF',
								borderRadius: "4px",
								"& .MuiInputBase-input": {
									...TEXT_STYLE(16, 600, '#31373E'),
									padding: "22px 24px",
								},
								'& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
									borderColor: '#5727A3 !important',
									borderWidth: '1px !important'
								}
							}}
						/>
					</Box>
					<Box>
						<TextField
							fullWidth
							placeholder="Your email"
							variant="outlined"
							value={textEmail}
							onChange={(e) => setTextEmail(e.target.value)}
							error={errorEmail}
							helperText={errorEmail && "Incorrect email"}
							sx={{
								background: "#ffffff",
								border: '1px solid #E9EAEF',
								borderRadius: "4px",
								"& .MuiInputBase-input": {
									...TEXT_STYLE(16, 600, '#31373E'),
									padding: "22px 24px",
								},
								'& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
									borderColor: '#5727A3 !important',
									borderWidth: '1px !important'
								}
							}}
						/>
					</Box>
					<Box>
						<TextField
							fullWidth
							placeholder="Tell us how we can help"
							variant="outlined"
							multiline
							rows={4}
							value={textMessage}
							onChange={(e) => setTextMessage(e.target.value)}
							error={errorMessage}
							helperText={errorMessage && "Empty message"}
							sx={{
								background: "#ffffff",
								border: '1px solid #E9EAEF',
								borderRadius: "4px",
								"& .MuiInputBase-input": {
									...TEXT_STYLE(16, 600, '#31373E'),
									padding: "22px 24px",
								},
								"& .MuiInputBase-root": {
									padding: 0,
								},
								'& .Mui-focused fieldset.MuiOutlinedInput-notchedOutline': {
									borderColor: '#5727A3 !important',
									borderWidth: '1px !important'
								}
							}}
						/>
					</Box>
					<ButtonBase title='send messages' style={{
						width: '100%',
						marginTop: '10px',
						'@media (min-width: 768px)': {
							marginTop: '30px',
						}
					}} />
				</Box>


			</Box>

		</>
	);
};

const InputContact = styled(OutlinedInput)({
	...TEXT_STYLE(16, 600, '#31373E'),
	border: '1px solid #E9EAEF',
	borderRadius: '4px',
	background: '#ffffff',
	marginBottom: 24,
	width: '100%',
	maxWidth: 544,
})
