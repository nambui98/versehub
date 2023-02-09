import { Typography, TypographyProps, Box } from '@mui/material';
import React from 'react';
import { TEXT_STYLE } from 'src/styles/common/textStyles';

export interface SectionTitleProps extends TypographyProps {
  bookmark?: string;
  subTitle: string
  title: string,
  typeSmall?: boolean
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  children,
  sx,
  bookmark,
  subTitle,
  title,
  typeSmall,
  ...props  
}) => {
  return (
    <Box {...props} id={bookmark}>
      <Typography variant='h3' sx={{
        ...TEXT_STYLE(32, typeSmall ? 500 : 600, '#1B0044'),
        fontSize: '24px !important',
        textTransform: 'uppercase',
        '@media (min-width: 768px)': {
          fontSize: '32px !important',
        }
      }}>{subTitle}</Typography>
      <Typography variant='h2' sx={{
        ...TEXT_STYLE(80, 600, '#5727A3'),
        fontSize: typeSmall ? '40px !important' : '40px !important',
        textTransform: 'uppercase',
        '@media (min-width: 768px)': {
          fontSize: typeSmall ? '64px !important' : '80px !important',
        }
      }}>{title}</Typography>
    </Box>
  );
};
