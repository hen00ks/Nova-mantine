import { Button, Modal } from "@mantine/core";
import Form from "./Form";

export default function AddorEditModal(props) {
  if (props.formData === undefined) {
    return (
      <Modal opened={props.opened} onClose={props.close} title="Delete">
        <strong className="block">Are you sure you want to delete?</strong>
        <div className="flex justify-end gap-2">
          <Button variant="default" onClick={props.close}>
            Cancel
          </Button>
          <Button>Delete</Button>
        </div>
      </Modal>
    );
  }

  return (
    <Modal
      opened={props.opened}
      onClose={props.close}
      title={props.formData ? "Edit" : "Add"}
    >
      <Form formData={props.formData} />
    </Modal>
  );
}
