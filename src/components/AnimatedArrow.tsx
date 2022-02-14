import { Box, BoxProps } from '@mui/material';
export interface ArrowProps extends BoxProps { }

export const AnimatedArrow: React.FC<ArrowProps> = (props) => {
  return (
    <Box {...props} sx={{
			display: 'flex',
			justifyContent: 'center',
			alignItems: 'center',
			cursor: 'pointer',
			...props.sx 
		}}>
			<div className="arrowSliding">
				<div className="arrow"></div>
			</div>
			<div className="arrowSliding delay1">
				<div className="arrow"></div>
			</div>
			<div className="arrowSliding delay2">
				<div className="arrow"></div>
			</div>
			<div className="arrowSliding delay3">
				<div className="arrow"></div>
			</div>
    </Box>
  );
};