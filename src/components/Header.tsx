import { Button, Input } from "@mantine/core";

export default function Header(props) {
  return (
    <div className="bg-red-100">
      <div className="flex justify-between">
        <h1>Filter by</h1> <span>- Reset filter</span>
      </div>
      <div>
        <button>All</button>
      </div>
      <div className="flex justify-between">
        <Input rightSection={<Button>S</Button>} />
        <div>
          <Button onClick={() => props.openModal(null)}>+ Add new</Button>
          <button>notification config +</button>
          <button>refresh</button>
        </div>
      </div>
    </div>
  );
}
