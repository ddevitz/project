import { useState, memo, useCallback } from "react"

import { ReportItemProps } from "@/utils/report-example"
import { IconButton, Table, Tag } from "@chakra-ui/react"
import { PiEyeThin, PiEyeSlashThin } from "react-icons/pi"

type ReportTableProps = {
  items: ReportItemProps[]
}

type ReportTableRowProps = {
  item: ReportItemProps;
  isHidden: boolean;
  onToggleHidden: (id: number) => void;
}

const ReportTableRow = memo(({ item, isHidden, onToggleHidden }: ReportTableRowProps) => {
  return (
    <Table.Row key={item.id} borderBottom="none">
      <Table.Cell textStyle="md">{item.type}</Table.Cell>
      <Table.Cell>
        <Tag.Root
          variant="solid"
          color="white"
          bg={item.specialty === "Angiologia" ? "#9333ea" : "#dc2626"}
          borderRadius="md"
        >
          <Tag.Label opacity="0.9">{item.specialty}</Tag.Label>
        </Tag.Root>
      </Table.Cell>
      <Table.Cell textStyle="xs">
        {isHidden ? "*****" : item.local}
      </Table.Cell>
      <Table.Cell textStyle="xs">
        {isHidden ? "*****" : item.duration}
      </Table.Cell>
      <Table.Cell textStyle="md">{item.items}</Table.Cell>
      <Table.Cell>
        <IconButton
          variant="outline"
          borderRadius="50%"
          cursor="pointer"
          opacity="0.7"
          size="sm"
          onClick={() => onToggleHidden(item.id)}
          aria-label="Esconder/Mostrar dados"
        >
          {isHidden ? <PiEyeThin size={20} /> : <PiEyeSlashThin size={20} />}
        </IconButton>
      </Table.Cell>
    </Table.Row>
  )
})

function ReportTable({ items }: ReportTableProps) {
  const [hiddenItems, setHiddenItems] = useState<{ [key: number]: boolean }>({})

  const toggleHidden = useCallback((id: number) => {
    setHiddenItems(prev => ({
      ...prev,
      [id]: !prev[id]
    }))
  }, [])

  return (
    <Table.Root borderRadius="xl" overflow="hidden" variant="outline">
      <Table.Header>
        <Table.Row bg="#e6ebf0">
          <Table.ColumnHeader textStyle="md">Tipo</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Especialidade</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Centro Cir.</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Duração</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Itens</Table.ColumnHeader>
          <Table.ColumnHeader textStyle="md">Ações</Table.ColumnHeader>
        </Table.Row>
      </Table.Header>

      <Table.Body>
        {items.map((item) => (
          <ReportTableRow
            key={item.id}
            item={item}
            isHidden={!!hiddenItems[item.id]}
            onToggleHidden={toggleHidden}
          />
        ))}
      </Table.Body>
    </Table.Root>
  )
}

export { ReportTable }