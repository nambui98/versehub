import React, { useState } from "react";
import {
	Box,
	Button,
	Container,
	Stack,
	TextField,
	Snackbar,
	Alert,
	Grid,
	InputBase,
	InputLabel,
	InputAdornment,
	OutlinedInput,
	IconButton,
	Backdrop,
	CircularProgress,
	styled,
} from "@mui/material";
import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import RemoveCircleOutlinedIcon from "@mui/icons-material/RemoveCircleOutlined";
import { ApplyDialog } from "./ApplyDialog";

const LIMIT_UPLOAD_SIZE = 25; // MB

const CustomLabel = ({ children }: any) => (
	<InputLabel
		shrink
		sx={{
			color: "#3D3763",
			fontSize: { xs: 18, sm: 24 },
			textTransform: "uppercase",
		}}
	>
		{children}
		<span style={{ color: "#f00", marginLeft: "8px" }}>*</span>
	</InputLabel>
);

const CustomInput = styled(InputBase)({
	"& .MuiInputBase-input": {
		fontSize: 24,
		fontWeight: 700,
		color: "#FFF",
		padding: "25px 50px",
		borderRadius: "5px",
		border: "2px solid rgba(138, 171, 255, 0.2)",
		"&:focus": {
			borderColor: "#28223F",
			background: "#28223F",
		},
		"@media (max-width: 600px)": {
			fontSize: 18,
			padding: "25px 30px",
		},
	},
});

const CustomInputFile = styled(OutlinedInput)({
	border: "2px solid rgba(138, 171, 255, 0.2)",
	borderRadius: "5px",
	"& .MuiInputBase-input": {
		fontSize: 24,
		fontWeight: 700,
		color: "#FFF",
		padding: "25px 50px",
		"@media (max-width: 600px)": {
			fontSize: 18,
			padding: "25px 30px",
		},
	},
	"& fieldset": {
		border: "none",
	},
});

const CustomHelperText = ({ children }: any) => (
	<InputLabel
		shrink
		sx={{
			mt: 1,
			color: "#F00",
			fontSize: 24,
			fontWeight: "bold",
		}}
	>
		{children}
	</InputLabel>
);

const CustomTextField = ({
	label,
	value,
	onChange,
	error,
	InputProps,
}: any) => {
	return (
		<Stack spacing={0}>
			<CustomLabel>{label}</CustomLabel>
			<CustomInput
				fullWidth
				required
				value={value}
				onChange={onChange}
				inputProps={{ ...InputProps }}
			/>
			<CustomHelperText>{error}&nbsp;</CustomHelperText>
		</Stack>
	);
};

const CustomFileField = ({
	label,
	value,
	onChange,
	onFileChange,
	error,
}: any) => {
	return (
		<Stack spacing={0}>
			<CustomLabel>{label}</CustomLabel>
			<CustomInputFile
				value={value || ""}
				onChange={onChange}
				endAdornment={
					<InputAdornment position="end">
						<Button
							variant="text"
							component="label"
							sx={{ height: "100%", color: "#28223F" }}
						>
							<AttachFileOutlinedIcon sx={{ fontSize: { xs: 32, sm: 42 } }} />
							<input
								type="file"
								hidden
								multiple
								accept="image/*,.pdf,.doc,.docx,video/mp4,video/x-m4v,video/*"
								onChange={onFileChange}
							/>
						</Button>
					</InputAdornment>
				}
			/>
			<CustomHelperText>{error}&nbsp;</CustomHelperText>
		</Stack>
	);
};

function isSupportedFile(file: any) {
	return (
		file.size &&
		file.type &&
		(file.type.includes("pdf") ||
			file.type.includes("doc") ||
			file.type.includes("image/") ||
			file.type.includes("video/"))
	);
}

export const ApplyForm = ({ jobName }: any) => {
	const [showSnack, setShowSnack] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(false);

	const [textFirst, setTextFirst] = useState("");
	const [textLast, setTextLast] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textPhone, setTextPhone] = useState("");
	const [textLocation, setTextLocation] = useState("");
	const [textAttachment, setTextAttachment] = useState("");

	// const [fileResume, setFileResume] = useState<any>(null);
	const [attachFiles, setAttachFiles] = useState<any>([]);
	// const [fileNames, setFileNames] = useState("");

	const [errorFirst, setErrorFirst] = useState(false);
	const [errorLast, setErrorLast] = useState(false);
	const [errorEmail, setErrorEmail] = useState(false);
	const [errorPhone, setErrorPhone] = useState(false);
	const [errorLocation, setErrorLocation] = useState(false);
	const [errorResume, setErrorResume] = useState("");

	const handleFileChange = (event: any) => {
		// const file = event.target.files[0];
		const files = event.target.files;
		// const existedNames = attachFiles.map((el: any) => el.name);

		let totalSize = attachFiles
			.map((el: any) => el.size)
			.reduce((pre: any, cur: any) => pre + cur, 0);
		for (let i = 0; i < files.length; i++) {
			const file = files[i];
			if (!isSupportedFile(file)) {
				setErrorResume("Unsupported media type");
				setTimeout(() => setErrorResume(""), 2000);
				return;
			}
			totalSize += file.size;
			if (totalSize > LIMIT_UPLOAD_SIZE * 1024 * 1024) {
				setErrorResume("Payload too large");
				setTimeout(() => setErrorResume(""), 2000);
				return;
			}
		}
		setAttachFiles([
			...attachFiles,
			...files,
			// ...files.filter((el: any) => !existedNames.includes(el.name)),
		]);
	};

	const handleRemoveFile = (fileIndex: number) => {
		// setAttachFiles(attachFiles.filter((el: any) => el.name !== fileName));
		setAttachFiles(
			attachFiles.filter((el: any, idx: number) => idx !== fileIndex)
		);
	};

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
		if (
			!textPhone ||
			!/^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/.test(textPhone)
		) {
			setErrorPhone(true);
			setTimeout(() => setErrorPhone(false), 2000);
			return;
		}
		if (!textLocation) {
			setErrorLocation(true);
			setTimeout(() => setErrorLocation(false), 2000);
			return;
		}
		if (!attachFiles || !attachFiles.length || attachFiles.length <= 0) {
			setErrorResume("Empty");
			setTimeout(() => setErrorResume(""), 2000);
			return;
		}
		setShowBackdrop(true);
		const formData = new FormData();
		formData.append("jobName", jobName);
		formData.append("firstName", textFirst);
		formData.append("lastName", textLast);
		formData.append("email", textEmail);
		formData.append("phone", textPhone);
		formData.append("location", textLocation);
		formData.append("attachUrl", textAttachment);
		// formData.append("resume", fileResume, fileResume.name);
		for (let i = 0; i < attachFiles.length; i++) {
			formData.append(`attachment[${i}]`, attachFiles[i]);
		}
		const response = await fetch("/api/apply", {
			method: "POST",
			body: formData,
		});
		setShowBackdrop(false);
		setShowSnack(true);
		setTextFirst("");
		setTextLast("");
		setTextEmail("");
		setTextPhone("");
		setTextLocation("");
		setTextAttachment("");
		// setFileResume(null);
		setAttachFiles([]);
	};

	return (
		<Stack py={5}>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			<ApplyDialog open={showSnack} onClose={() => setShowSnack(false)} />
			<Box
				component="form"
				autoComplete="off"
				onSubmit={handleSubmit}
				sx={{
					display: "flex",
					flexDirection: "column",
					gap: 1,
					width: "100%",
				}}
			>
				<CustomTextField
					label="First name"
					value={textFirst}
					onChange={(e: any) => setTextFirst(e.target.value)}
					error={errorFirst && "Incorrect first name"}
				/>
				<CustomTextField
					label="Last name"
					value={textLast}
					onChange={(e: any) => setTextLast(e.target.value)}
					error={errorLast && "Incorrect last name"}
				/>
				<CustomTextField
					label="Email"
					value={textEmail}
					onChange={(e: any) => setTextEmail(e.target.value)}
					error={errorEmail && "Incorrect email"}
				/>
				<CustomTextField
					label="Phone"
					value={textPhone}
					onChange={(e: any) => setTextPhone(e.target.value)}
					error={errorPhone && "Incorrect phone"}
				/>
				<CustomTextField
					label="Location"
					value={textLocation}
					onChange={(e: any) => setTextLocation(e.target.value)}
					error={errorLocation && "Incorrect location"}
				/>
				<CustomFileField
					label="Attachment"
					value={textAttachment}
					onChange={(e: any) => setTextAttachment(e.target.value)}
					onFileChange={handleFileChange}
					error={errorResume}
				/>
				<Stack spacing={1}>
					{attachFiles.map((el: any, idx: number) => (
						<CustomInputFile
							key={idx}
							value={el.name}
							startAdornment={
								<InputAdornment position="start">
									<DownloadDoneOutlinedIcon
										sx={{ fontSize: { xs: 32, sm: 42 } }}
									/>
								</InputAdornment>
							}
							endAdornment={
								<InputAdornment position="end">
									<Button
										variant="text"
										component="label"
										sx={{ height: "100%", color: "#28223F" }}
										onClick={() => handleRemoveFile(idx)}
									>
										<CancelOutlinedIcon sx={{ fontSize: { xs: 32, sm: 42 } }} />
									</Button>
								</InputAdornment>
							}
						/>
					))}
				</Stack>
				<Grid container justifyContent="center" mt={5}>
					<Button
						type="submit"
						sx={{
							background: "#7000FF",
							py: 3,
							fontSize: "24px",
							fontWeight: "bold",
							width: "320px",
							"&:focus": {
								background: "#7000FF",
							},
						}}
					>
						Apply
					</Button>
				</Grid>
			</Box>
		</Stack>
	);
};
