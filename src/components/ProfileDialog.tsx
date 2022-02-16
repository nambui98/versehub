import {
	Box,
	Button,
	Dialog,
	DialogActions,
	DialogContent,
	DialogContentText,
	DialogTitle,
	IconButton,
	Typography,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

export const ProfileDialog = ({ open, onClose, data }: any) => {
	const name = data && data.name || '';
	const title = data && data.title || '';
	const desc = data && data.desc || [];

  // const [open, setOpen] = useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  // const handleClose = () => {
  //   setOpen(false);
  // };

  return (
		<Dialog open={open} onClose={onClose} PaperProps={{
			style: { 
				borderRadius: "16px",
				backgroundColor: '#555175'
			}
		}}>
			<Box sx={{
				position: 'relative',
				p: { xs: 3.75, md: 7.5 },
			}}>
				<IconButton
					aria-label="delete"
					size="small"
					sx={{
						color: '#fff',
						padding: '0',
						position: 'absolute',
						top: { xs: "20px", md: "30px" },
						right: { xs: "20px", md: "30px" },
					}}
					onClick={onClose}
				>
					<CloseIcon />
				</IconButton>
				<Typography color="#fff" fontSize={{xs: 22, md: 28}} fontWeight={700} lineHeight={1}>
					{name}
				</Typography>
				<Box sx={{
					width: 'fit-content',
					background: '#fff',
					px: 1, 
					pt: 0.25,
					mt: 0.5, 
					mb: { xs: 2, md: 3.75 },
					color: '#555175', 
					fontSize: {xs: 12, md: 14},
				}}>
					{title}
				</Box>
				{desc.map(((el: string) => (
					<Typography color="#fff" fontSize={{xs: 14, md: 16}} lineHeight={{xs: "20px", md: "24px"}}>
						{'- ' + el}
					</Typography>
				)))}
			</Box>
		</Dialog>
  );
}