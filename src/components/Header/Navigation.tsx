import { Link, Box } from '@mui/material';
import React from 'react';
import { navigations as items } from '@/constants/index';
import { ArrowRightIcon } from '@/assets/index';

export interface NavigationProps {
  activeState?: string | null;
  type: 'h' | 'v';

  handleClick: (hash: string) => (event: any) => any;
}

export const Navigation: React.FC<NavigationProps> = ({
  type,
  activeState,
  handleClick,
}) => {
  if (type === 'h') {
    return (
      <Box
        sx={{
          display: { xs: 'none', sm: 'none', md: 'flex' },
          alignItems: 'center',
        }}
      >
        {items.map(({ label, value }) => (
          <Link
            href={`#${value}`}
            onClick={handleClick(value)}
            sx={{
              px: 3.25,
              color:
                value === activeState
                  // ? 'primary.main'
									? '#A89AFF'
                  : 'rgba(255, 255, 255, 0.8)',
              fontSize: 18,
              lineHeight: '21.09px',
							textDecoration: value === activeState ? 'underline #8470FF 3px' : 'none',
							textUnderlinePosition: 'under',
            }}
            key={value}
          >
            {label}
          </Link>
        ))}
      </Box>
    );
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        justifyContent: 'stretch',
        // gap: 4,
      }}
    >
      {items.map(({ label, value }) => (
				// <Button
				// 	key={value}
				// 	variant="text"
				// 	href={`#${value}`}
				// 	onClick={handleClick(value)}
				// 	sx={{
        //     // display: 'flex',
        //     // alignItems: 'center',
				// 		color: '#fff',
        //     fontSize: 24,
        //     lineHeight: '28px',
        //     pl: 4,
        //     gap: 3,
				// 		background: activeState ? '#7000FF' : 'transparent',
        //   }}
				// >
				// 	{value === activeState ? <ArrowRightIcon /> : <Box minWidth={24} />}
        // 	<span>{label}</span>
				// </Button>
        <Link
          href={`#${value}`}
          color="#fff"
          onClick={handleClick(value)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 24,
            lineHeight: '28px',
            py: 2,
						px: 6,
            gap: 3,
						backgroundColor: value === activeState ? '#7000FF' : 'unset',
						width: '100%',
          }}
          key={value}
        >
          {value === activeState ? <ArrowRightIcon /> : <Box minWidth={24} />}
          <span>{label}</span>
        </Link>
      ))}
    </Box>
  );
};
