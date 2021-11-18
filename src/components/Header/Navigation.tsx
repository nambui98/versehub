import { Link, Box, Tabs, Tab } from '@mui/material';
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
                  ? 'primary.main'
                  : 'rgba(255, 255, 255, 0.8)',
              fontSize: 18,
              lineHeight: '21.09px',
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
        gap: 4,
      }}
    >
      {items.map(({ label, value }) => (
        <Link
          href={`#${value}`}
          color="#fff"
          onClick={handleClick(value)}
          sx={{
            display: 'flex',
            alignItems: 'center',
            fontSize: 24,
            lineHeight: '28px',
            pl: 4,
            gap: 3,
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
