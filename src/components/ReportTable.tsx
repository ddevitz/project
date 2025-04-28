import { IconButton, Table, Tag } from "@chakra-ui/react"
import { PiEyeThin } from "react-icons/pi"

function ReportTable(){
  const items = [
    { id: 1, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 5 },
    { id: 2, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 3, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 4, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 5, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 6, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 7, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 8, type: "Endócrina", specialty: "Angiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
    { id: 9, type: "Cardíaca", specialty: "Cardiologia", local: "Centro Cirúrgico 1", duration:"2h 10min", items: 3 },
  ]

  return(
    <Table.Root 
      borderRadius="xl" 
      overflow="hidden" 
      variant="outline"
    >
      <Table.ColumnGroup>
        <Table.Column />
        <Table.Column />
        <Table.Column />
        <Table.Column />
        <Table.Column />
        <Table.Column />
      </Table.ColumnGroup>
      <Table.Header>
        <Table.Row bg="#e6ebf0">
          <Table.ColumnHeader textStyle="md">Tipo</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Especialidade</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Centro Cir.</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Duração</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Itens</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md"></Table.ColumnHeader>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {items.map((item) => (
          <Table.Row key={item.id} borderBottom="none">
            <Table.Cell textStyle="md">{item.type}</Table.Cell>
            <Table.Cell>
              <Tag.Root variant="solid" color="white" bg={item.specialty === "Angiologia" ? "#9333ea" : "#dc2626"} borderRadius="md">
                <Tag.Label opacity="0.9">
                  {item.specialty}
                </Tag.Label>
              </Tag.Root>
            </Table.Cell>
            <Table.Cell textStyle="xs">{item.local}</Table.Cell>
            <Table.Cell textStyle="xs">{item.duration}</Table.Cell>
            <Table.Cell textStyle="md">{item.items}</Table.Cell>
            <Table.Cell>
              <IconButton 
                variant="outline"
                borderRadius={50}
                cursor="pointer"
                opacity="0.5"
              >
                <PiEyeThin />
              </IconButton>
            </Table.Cell>
          </Table.Row>
        ))}
      </Table.Body>
    </Table.Root>

  )
}

export { ReportTable }