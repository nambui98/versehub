import { Typography, TypographyProps } from '@mui/material'
import React from 'react'
import { TEXT_STYLE } from 'src/styles/common/textStyles'

type Props = TypographyProps

function Title(props: Props) {
	return (
		<Typography
			variant="h2" sx={{
				...TEXT_STYLE(24, 600),
				textTransform: 'uppercase',
				color: '#5727A3',
				'@media (min-width: 768px)': {
					...TEXT_STYLE(40, 600),
					lineHeight: '59px',
				}
			}}
			{...props}
		>{props.children}</Typography>

	)
}

export default Title