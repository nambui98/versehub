import Button from '@mui/material/Button';

interface IProps {
  title: string
  style?: any
}

export const ButtonBase: React.FC<IProps> = ({title, style}) => {
  return <Button type='submit' variant="contained" sx={[{
    background: 'radial-gradient(39.08% 73.92% at 50% 90.72%, #3C12A0 48.44%, #3C126D 100%)',
    borderRadius: '12px',
    fontSize: '24px',
    textTransform: 'uppercase',
    color: '#ffffff',
    fontWeight: '600',
    boxShadow: 0,
    padding: '17px 40px'
  }, style]}>{title}</Button>
}
