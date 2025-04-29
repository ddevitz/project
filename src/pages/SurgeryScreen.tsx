import { useState } from "react"

import { Header } from "@/components/Header"
import { ReportTable } from "@/components/ReportTable"
import { Box, Container, Input, InputGroup, Center, Text } from "@chakra-ui/react"
import { PiMagnifyingGlassLight } from "react-icons/pi"
import { reportItems } from "@/utils/report-example"


function SurgeryScreen(){
  const [search, setSearch] = useState("")
  const [filteredItems, setFilteredItems] = useState(reportItems)

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>){
    const searchTerm = e.target.value
    setSearch(searchTerm)
    
    if (searchTerm) {
      const filtered = reportItems.filter(item => 
        item.type?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.specialty?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.local?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.duration?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.items?.toString().includes(searchTerm) 
      )
      setFilteredItems(filtered)
    } else {
      setFilteredItems(reportItems)
    }
  }


  return(
    <Box>
      <Container>
        <Header title="Cirurgias Realizadas"/>
      </Container>

      <Container mb="50px" maxW="700px" marginX="auto">

        <InputGroup mb="36px" endElement={<PiMagnifyingGlassLight size="24px" />}>
          <Input rounded="md" placeholder="Pesquisar" onChange={handleSearch}/>
        </InputGroup>
        
        {filteredItems.length > 0 ? (
          <ReportTable items={filteredItems} />
        ) : (
          <Center p={10}>
            <Text fontSize="lg" color="gray.500">
              Nenhum registro encontrado para "{search}"
            </Text>
          </Center>
        )}
        
      </Container>
    </Box>
  )
}

export { SurgeryScreen }
