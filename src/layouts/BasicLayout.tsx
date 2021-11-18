import { Box } from '@mui/material';
import { Header, Footer } from '../components';

export interface BasicLayoutProps {}

export const BasicLayout: React.FC<BasicLayoutProps> = ({ children }) => {
  return (
    <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}>
      <Header />
      <Box component="main" flexGrow={1}>
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
