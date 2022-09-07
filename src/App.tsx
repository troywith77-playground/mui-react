import { Button, Stack } from "@mui/material";
import { BasicSelect } from "./BasicSelect";

function App() {
  return (
    <Stack spacing={2} width={"200px"}>
      <Button variant="outlined">Save</Button>
      <BasicSelect />
    </Stack>
  );
}

export default App;
