import { Stack, TextField, Select } from "@mui/material";
import { styled } from '@mui/material';

const CustonTextField = styled(TextField)(({ theme }) => ({
  borderColor: theme.onlineRemessaPalet.ronaldo,
  width: '8rem'
}));

const CustonSelect = styled(Select)(({ theme }) => ({
  borderColor: theme.onlineRemessaPalet.ronaldo,
  width: '8rem'
}));


export function Input() {
  return (
    <Stack>
      <CustonTextField label='ronaldo' variant="standard"/>
      <CustonTextField label='carneiro-mineiro' variant="standard"/>
      <CustonTextField label='fala a true' variant="standard"/>
      <CustonTextField label='online-remessa' variant="standard"/>
      <CustonSelect label='uaaaaa'variant="standard">
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
        <option>uaaaaa</option>
      </CustonSelect>
    </Stack>
  )
}

