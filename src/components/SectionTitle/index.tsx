import { Typography, TypographyProps, Box } from '@mui/material';
import React from 'react';

export interface SectionTitleProps extends TypographyProps {
  bookmark?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  sx,
  bookmark,
  ...props
}) => {
  return (
    <Typography mb={6.5} variant="h2" sx={{ ...sx }} {...props}>
      <Box
        component="span"
        sx={{ mt: -14, position: 'absolute' }}
        id={bookmark}
      ></Box>
      {children}
    </Typography>
  );
};
