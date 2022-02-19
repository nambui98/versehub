import Link from "next/link";
import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	Grid,
	Stack,
	IconButton,
	Typography,
} from "@mui/material";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";

export const ApplyDialog = ({ open, onClose, data }: any) => {
	return (
		<Dialog
			open={open}
			onClose={onClose}
			PaperProps={{
				style: {
					borderRadius: "16px",
					background: "#555175",
					overflowY: "unset",
				},
			}}
		>
			<Box sx={{ p: 3, position: "relative" }}>
				<Grid container spacing={5}>
					<Grid item xs={12} sm={5}>
						<Box
							sx={{
								display: { xs: "block", sm: "none" },
								width: "60%",
								position: "absolute",
								left: "20%",
								top: "-25%",
							}}
						>
							<Stack alignItems={"center"}>
								<img src="/assets/application/confirm.png" alt="apply" />
							</Stack>
						</Box>
						<Box
							sx={{
								width: { xs: 0, sm: "100%" },
								pt: { xs: 2, sm: 0 },
							}}
						>
							<img
								src="/assets/application/confirm.png"
								alt="apply"
								width={"100%"}
							/>
						</Box>
					</Grid>
					<Grid item xs={12} sm={7}>
						<Stack
							spacing={3}
							justifyContent="center"
							alignItems={{ xs: "center", sm: "start" }}
							pt={3}
							pr={1}
							sx={{
								textAlign: { xs: "center", sm: "left" },
							}}
						>
							<Box>
								<Typography fontSize={34} fontWeight={300} lineHeight={1}>
									Thank you
								</Typography>
								<Typography fontSize={14} color="rgba(255,255,255,0.5)">
									for your application!
								</Typography>
							</Box>
							<Typography fontSize={16}>
								We will contact you in 3-5 working days if there&apos;s a match
								:)
							</Typography>
						</Stack>
					</Grid>
				</Grid>
				<Grid
					container
					justifyContent={{ xs: "center", sm: "end" }}
					mt={{ xs: 7.5, sm: 0 }}
					mb={{ xs: 2, sm: 0 }}
				>
					<Link href="/" passHref>
						<Button
							variant="text"
							startIcon={<KeyboardBackspaceOutlinedIcon />}
							sx={{
								fontSize: 16,
								fontWeight: "bold",
								color: "#A5A4FF",
								py: 0,
							}}
						>
							Back to homepage
						</Button>
					</Link>
				</Grid>
			</Box>
		</Dialog>
	);
};
