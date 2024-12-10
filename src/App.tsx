import { Button, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";
import RolePage from "./Routes/RolePage";

export default function App() {
  return (
    <MantineProvider>
      <RolePage />
    </MantineProvider>
  );
}
