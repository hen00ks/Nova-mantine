import { Button, Checkbox, Input, Table } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function Form({ formData }) {
  const modules = [{ moduleName: "inventory" }, { moduleName: "warehouse" }];
  create: false, console.log(formData);
  // formData.modules.permissions
  const permissions = { view: false, update: false, delete: false };

  const checkBoxData = formData
    ? formData.modules.reduce((acc, module) => {
        acc[module.moduleName] = module.permissions;
        return acc;
      }, {})
    : modules.reduce((acc, module) => {
        acc[module.moduleName] = {
          view: false,
          create: false,
          update: false,
          delete: false,
        };
        return acc;
      }, {});

  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      roleName: formData ? formData.roleName : "",
      description: formData ? formData.description : "",
      ...checkBoxData,
    },
  });

  // console.log(checkBoxData);

  const rows = modules.map((module) => {
    return (
      <Table.Tr>
        <Table.Td>{module.moduleName}</Table.Td>
        <Table.Td>
          <Checkbox />
        </Table.Td>
        <Table.Td>
          <Checkbox
            {...form.getInputProps(`${module}.view`, { type: "checkbox" })}
          />
        </Table.Td>
        <Table.Td>
          <Checkbox
            {...form.getInputProps(`${module}.update`, {
              type: "checkbox",
            })}
          />
        </Table.Td>
        <Table.Td>
          <Checkbox
            {...form.getInputProps(`${module}.create`, {
              type: "checkbox",
            })}
          />
        </Table.Td>
        <Table.Td>
          <Checkbox
            {...form.getInputProps(`${module}.delete`, {
              type: "checkbox",
            })}
          />
        </Table.Td>
      </Table.Tr>
    );
  });

  return (
    <form>
      <Input.Wrapper label="role name">
        <Input {...form.getInputProps("roleName")} />
      </Input.Wrapper>
      <Input.Wrapper label="description">
        <Input {...form.getInputProps("description")} />
      </Input.Wrapper>
      <Table>
        <Table.Thead>
          <Table.Tr>
            <Table.Th>Module</Table.Th>
            <Table.Th>All</Table.Th>
            <Table.Th>View</Table.Th>
            <Table.Th>Update</Table.Th>
            <Table.Th>Create</Table.Th>
            <Table.Th>Delete</Table.Th>
          </Table.Tr>
        </Table.Thead>
        <Table.Tbody>{rows}</Table.Tbody>
      </Table>
      <Button type="submit">submit</Button>
    </form>
  );
}
