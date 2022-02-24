import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material';

const CustomButton = styled(Button)(({ theme }) => ({
  color: theme.onlineRemessaPalet.ronaldo,
}));

export function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <CustomButton variant="text">Text</CustomButton>
      <CustomButton variant="contained">Contained</CustomButton>
      <CustomButton variant="outlined">Outlined</CustomButton>
    </Stack>
  );
}