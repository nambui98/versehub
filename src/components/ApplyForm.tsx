import React, { useState } from "react";
import { Box, Button, Container, TextField, Snackbar, Alert, Grid } from "@mui/material";

export const ApplyForm = ({ jobName }: any) => {
	const [textFirst, setTextFirst] = useState("");
	const [textLast, setTextLast] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textPhone, setTextPhone] = useState("");
	const [textLocation, setTextLocation] = useState("");
	const [fileResume, setFileResume] = useState<any>(null);
	const [errorFirst, setErrorFirst] = useState(false);
	const [errorLast, setErrorLast] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPhone, setErrorPhone] = useState(false);
	const [errorLocation, setErrorLocation] = useState(false);
	const [errorResume, setErrorResume] = useState('');
	const [showSnack, setShowSnack] = useState(false);

	const onFileChange = (event: any) => {
		setFileResume(null);
		const file = event.target.files[0];
		if (!file.type || !file.type.includes('pdf')) {
			setErrorResume('Unsupported media type');
			setTimeout(() => setErrorResume(''), 2000);
			return;
		}
		if (!file.size || file.size > 1024 * 1024) { // 1MB
			setErrorResume('Payload too large');
			setTimeout(() => setErrorResume(''), 2000);
			return;
		}
		setFileResume(file);
	}

	const handleSubmit = async (event: any) => {
		event.preventDefault();
		if (!textFirst) {
			setErrorFirst(true);
			setTimeout(() => setErrorFirst(false), 2000);
			return;
		}
		if (!textLast) {
			setErrorLast(true);
			setTimeout(() => setErrorLast(false), 2000);
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
		if (!fileResume) {
			setErrorResume('Empty');
			setTimeout(() => setErrorResume(''), 2000);
			return;
		}
		const formData = new FormData();
		formData.append('jobName', jobName);
		formData.append('firstName', textFirst);
		formData.append('lastName', textLast);
		formData.append('email', textEmail);
		formData.append('phone', textPhone);
		formData.append('location', textLocation);
		formData.append('resume', fileResume, fileResume.name);
		const response = await fetch("/api/apply", {
			method: "POST",
			body: formData,
			// headers: {
			// 	"Content-Type": "multipart/form-data",
			// },
		});
		setShowSnack(true);
		setTextFirst('');
		setTextLast('');
		setTextEmail('');
		setTextPhone('');
		setTextLocation('');
		setFileResume(null);
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
					<Grid container spacing={4} alignItems="stretch">
						<Grid item xs>
							<TextField
								fullWidth
								required
								InputProps={{
									readOnly: true,
								}}
								label="Resume/CV"
								value={fileResume && fileResume.name || ''}
								error={errorResume !== ''}
								helperText={errorResume}
							/>
						</Grid>
						<Grid item xs="auto">
							<Button variant="contained" component="label" sx={{height: '100%'}}>
								Upload File
								<input type="file" hidden accept=".pdf" onChange={onFileChange} />
							</Button>
						</Grid>
					</Grid>
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
