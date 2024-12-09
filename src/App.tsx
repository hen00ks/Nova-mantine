import { Button, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider>
      <div>
        <Button>Mantine button</Button>
      </div>
    </MantineProvider>
  );
}
