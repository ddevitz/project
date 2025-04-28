import { Header } from "@/components/Header"
import { ReportTable } from "@/components/ReportTable"
import { Box, Container, Input, InputGroup } from "@chakra-ui/react"
import { PiMagnifyingGlassLight } from "react-icons/pi"


function SugeryScreen(){
  return(
    <Box>
      <Container>
        <Header title="Cirurgias Realizadas"/>
      </Container>

      <Container mb="50px" maxW="700px" marginX="auto">

        <InputGroup mb="36px" endElement={<PiMagnifyingGlassLight size="24px" />}>
          <Input rounded="md" placeholder="Pesquisar"/>
        </InputGroup>
        
        <ReportTable />
        
      </Container>
    </Box>
  )
}

export { SugeryScreen }