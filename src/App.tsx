import { BasicButtons } from "./Components/Button";
import { Input } from "./Components/Input";
declare module '@mui/material/styles' {
interface Theme {
  onlineRemessaPalet: {
    ronaldo: string;
  };
 }
}

function App() {

  return ( 
  <>
    <BasicButtons />
      <br />
    <Input />
   </>
  );
}

export default App;
