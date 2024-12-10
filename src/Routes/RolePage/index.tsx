import Header from "../../components/Header";
import AddorEditModal from "../../components/AddorEditModal";
import RoleTable from "../../components/RoleTable";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";

export default function RolePage() {
  const [opened, { open, close }] = useDisclosure(false);
  const [formData, setFormData] = useState();

  // console.log(formData);
  const openModal = (data) => {
    setFormData(data);
    open();
  };

  return (
    <div>
      <Header openModal={openModal} />
      <AddorEditModal opened={opened} close={close} formData={formData} />
      <RoleTable openModal={openModal} />
    </div>
  );
}
