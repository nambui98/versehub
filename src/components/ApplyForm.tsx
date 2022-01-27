import React, { useState } from "react";
import { Box, Button, Container, TextField, Snackbar, Alert, Grid } from "@mui/material";

export const ApplyForm = ({ jobName }: any) => {
	const [textFirst, setTextFirst] = useState("");
	const [textLast, setTextLast] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textPhone, setTextPhone] = useState("");
	const [textLocation, setTextLocation] = useState("");
	const [errorFirst, setErrorFirst] = useState(false);
	const [errorLast, setErrorLast] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPhone, setErrorPhone] = useState(false);
	const [errorLocation, setErrorLocation] = useState(false);
	const [showSnack, setShowSnack] = useState(false);

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!textFirst) {
			setErrorFirst(true);
			setTimeout(() => setErrorFirst(false), 2000);
			return;
		}
		if (!textLast) {
			setErrorFirst(true);
			setTimeout(() => setErrorFirst(false), 2000);
			return;
		}
		if (!textEmail || !/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(textEmail)) {
			setErrorEmail(true);
			setTimeout(() => setErrorEmail(false), 2000);
			return;
		}
		if (!textPhone || !/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(textPhone)) {
			setErrorPhone(true);
			setTimeout(() => setErrorPhone(false), 2000);
			return;
		}
		if (!textLocation) {
			setErrorLocation(true);
			setTimeout(() => setErrorLocation(false), 2000);
			return;
		}
		const response = await fetch("/api/apply", {
			method: "POST",
			body: JSON.stringify({
				jobName,
				firstName: textFirst,
				lastName: textLast,
				email: textEmail,
				phone: textPhone,
				location: textLocation,
			}),
			headers: {
				"Content-Type": "application/json",
			},
		});
		setShowSnack(true);
		setTextFirst('');
		setTextLast('');
		setTextEmail('');
		setTextPhone('');
		setTextLocation('');
	};

	return (
		<Container>
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
				<Box
					component="form"
					autoComplete="off"
					onSubmit={handleSubmit}
					sx={{
						display: "flex",
						flexDirection: "column",
						gap: 4,
						width: '100%'
					}}
				>
					<TextField
						fullWidth
						required
						label="First name"
						value={textFirst}
						onChange={(e) => setTextFirst(e.target.value)}
						error={errorFirst}
						helperText={errorFirst && 'Incorrect first name'}
					/>
					<TextField
						fullWidth
						required
						label="Last name"
						value={textLast}
						onChange={(e) => setTextLast(e.target.value)}
						error={errorLast}
						helperText={errorLast && 'Incorrect last name'}
					/>
					<TextField
						fullWidth
						required
						label="Email"
						value={textEmail}
						onChange={(e) => setTextEmail(e.target.value)}
						error={errorEmail}
						helperText={errorEmail && 'Incorrect email'}
					/>
					<TextField
						fullWidth
						required
						label="Phone"
						value={textPhone}
						onChange={(e) => setTextPhone(e.target.value)}
						error={errorPhone}
						helperText={errorPhone && 'Incorrect phone'}
					/>
					<TextField
						fullWidth
						required
						label="Location"
						value={textLocation}
						onChange={(e) => setTextLocation(e.target.value)}
						error={errorLocation}
						helperText={errorLocation && 'Incorrect location'}
					/>
					<Grid container justifyContent="center">
						<Button type="submit" sx={{
							background: "rgba(196, 196, 196, 0.3)", 
							px: 8, 
							py: 2,
							fontSize: "24px",
							fontWeight: "bold"
						}}>
							All set!
						</Button>
					</Grid>
				</Box>
			</Container>
		</Container>
	);
}
