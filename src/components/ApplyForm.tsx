import AttachFileOutlinedIcon from "@mui/icons-material/AttachFileOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import DownloadDoneOutlinedIcon from "@mui/icons-material/DownloadDoneOutlined";
import {
	Backdrop, Box,
	Button, CircularProgress, InputAdornment, InputBase,
	InputLabel, OutlinedInput, Stack, styled
} from "@mui/material";
import Typography from "@mui/material/Typography";
import { useEffect, useState } from "react";
import { TEXT_STYLE } from "src/styles/common/textStyles";
import { ApplyDialog } from "./ApplyDialog";
import { ButtonBase } from "./Button";

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
		...TEXT_STYLE(16, 600, '#31373E'),
		padding: "20px 24px",
		borderRadius: "5px",
		border: "1px solid #E9EAEF",
		maxWidth: '368px',
		marginBottom: '10px'
	},
});

const CustomInputFile = styled(OutlinedInput)({
	"& .MuiInputBase-input": {
		...TEXT_STYLE(14, 600, '#55C8FC'),
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
	placeholder,
	value,
	onChange,
	error,
	InputProps,
}: any) => {
	return (
		<Stack spacing={0}>
			<CustomInput
				fullWidth
				required
				value={value}
				onChange={onChange}
				inputProps={{ ...InputProps }}
				placeholder={placeholder}
			/>
			{error && <CustomHelperText>{error}&nbsp;</CustomHelperText>}
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

export const ApplyForm = ({ jobName, back, setStatusSubmitForm }: any) => {
	const [showSnack, setShowSnack] = useState(false);
	const [showBackdrop, setShowBackdrop] = useState(false);

	const [textFirst, setTextFirst] = useState("");
	const [textLast, setTextLast] = useState("");
	const [textEmail, setTextEmail] = useState("");
	const [textPhone, setTextPhone] = useState("");
	const [textLocation, setTextLocation] = useState("");
	const [textAttachment, setTextAttachment] = useState("");
	const [attachFiles, setAttachFiles] = useState<any>([]);

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
		formData.append("location", 'VietNam');
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
		setStatusSubmitForm(true)
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
		<Stack>
			<Backdrop
				sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 1 }}
				open={showBackdrop}
			>
				<CircularProgress color="inherit" />
			</Backdrop>
			{/* <ApplyDialog open={showSnack} onClose={() => setShowSnack(false)} /> */}
			<Box sx={{
				marginBottom: '24px',
				cursor: 'pointer'
			}} onClick={back}><img src="/assets/icons/arrow-left-gray.svg" /></Box>
			<Typography sx={{
				...TEXT_STYLE(16, 600, '#5A6178'),
				marginBottom: '16px'
			}}>Let us know about you.</Typography>
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
					placeholder="First name"
					value={textFirst}
					onChange={(e: any) => setTextFirst(e.target.value)}
					error={errorFirst && "Incorrect first name"}
				/>
				<CustomTextField
					placeholder="Last name"
					value={textLast}
					onChange={(e: any) => setTextLast(e.target.value)}
					error={errorLast && "Incorrect last name"}
				/>
				<CustomTextField
					placeholder="Email"
					value={textEmail}
					onChange={(e: any) => setTextEmail(e.target.value)}
					error={errorEmail && "Incorrect email"}
				/>
				<CustomTextField
					placeholder="Phone"
					value={textPhone}
					onChange={(e: any) => setTextPhone(e.target.value)}
					error={errorPhone && "Incorrect phone"}
				/>
				{/* <CustomFileField
					placeholder="Attachment"
					value={textAttachment}
					onChange={(e: any) => setTextAttachment(e.target.value)}
					onFileChange={handleFileChange}
					error={errorResume}
				/> */}
				<Button
					variant="text"
					component="label"
					sx={{
						...TEXT_STYLE(14, 600, '#55C8FC'),
						padding: 0,
						display: 'flex',
						justifyContent: 'flex-start',
						backgroundColor: '#ffffff !important',
						'& img': {
							marginRight: '8px'
						}
					}}
				>
					<img src="/assets/icons/document-upload.svg" />
					Upload your CV
					<input
						type="file"
						hidden
						multiple
						accept="image/*,.pdf,.doc,.docx,video/mp4,video/x-m4v,video/*"
						onChange={handleFileChange}
					/>
				</Button>
				{errorResume && <CustomHelperText>Empty</CustomHelperText>}
				<Stack spacing={1}>
					{attachFiles.map((el: any, idx: number) => (
						<Box sx={{
							display: 'flex',
							alignItems: 'center'
						}}>
							<Typography sx={{
								...TEXT_STYLE(14, 600, '#55C8FC')
							}}>{el.name}</Typography>
							<Box sx={{
								lineHeight: 0,
								marginLeft: '8px',
								cursor: 'pointer'
							}} onClick={() => handleRemoveFile(idx)}>
								<img src="/assets/icons/close-2.svg" />
							</Box>
						</Box>
					))}
				</Stack>
				<ButtonBase title="Apply" style={{
					marginTop: '20px'
				}} />
			</Box>
		</Stack>
	);
};
