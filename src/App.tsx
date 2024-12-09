import { Button, MantineProvider } from "@mantine/core";
import "@mantine/core/styles.css";

export default function App() {
  return (
    <MantineProvider>
      <div>
        <Button>Mantine button</Button>
        <h1 className="text-red-500">tailwind text</h1>
      </div>
    </MantineProvider>
  );
}
