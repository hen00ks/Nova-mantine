import { Button, Table } from "@mantine/core";

export default function RoleTable(props) {
  const elements = [
    {
      totalPremissions: 12,
      totalUsers: 2,
      description: "description",
      roleName: "role1",
    },
    {
      totalPremissions: 14,
      totalUsers: 3,
      description: "description",
      roleName: "role2",
    },
    {
      totalPremissions: 8,
      totalUsers: 8,
      description: "description",
      roleName: "role3",
    },
  ];

  const data = {
    roleName: "HR",
    modules: [
      {
        moduleName: "inventory",
        description: "lorem ipsum dolor.....................",
        permissions: {
          view: true,
          create: true,
          update: true,
          delete: true,
        },
      },
      {
        moduleName: "warehouse",
        description: "lorem ipsum dolor",
        permissions: {
          view: true,
          create: false,
          update: true,
          delete: true,
        },
      },
    ],
  };

  const openModalwithData = () => {
    props.openModal(data);
  };

  const rows = elements.map((element, index) => (
    <Table.Tr key={index}>
      <Table.Td>{index + 1}</Table.Td>
      <Table.Td>{element.roleName}</Table.Td>
      <Table.Td>{element.description}</Table.Td>
      <Table.Td>{element.totalPremissions}</Table.Td>
      <Table.Td>{element.totalUsers}</Table.Td>
      <Table.Td>
        <Button onClick={openModalwithData} className="mr-2">
          Edit
        </Button>
        <Button onClick={() => props.openModal()}>Delete</Button>
      </Table.Td>
    </Table.Tr>
  ));

  return (
    <Table>
      <Table.Thead>
        <Table.Tr>
          <Table.Th>No.</Table.Th>
          <Table.Th>Role name</Table.Th>
          <Table.Th>Description</Table.Th>
          <Table.Th>Total Permissions</Table.Th>
          <Table.Th>Total Users</Table.Th>
          <Table.Th>Actions</Table.Th>
        </Table.Tr>
      </Table.Thead>
      <Table.Tbody>{rows}</Table.Tbody>
    </Table>
  );
}
