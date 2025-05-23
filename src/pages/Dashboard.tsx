import { Box, Container, Flex } from "@chakra-ui/react"
import { DashboardCard } from "@/components/DashboardCard"
import { Header } from "@/components/Header"
import { Graphic } from "@/components/Graphic"

import { dataGraphic } from "@/utils/data-graphic"

function Dashboard(){
  return(
    <Box mb={10}>
      <Container>
        <Header 
          title="Dashboard"
        />
      </Container>

      <Container maxW="750px" margin="0 auto">
        <Flex flexWrap="wrap" gap="10px" justifyContent="center">
          <DashboardCard 
            type="surgeries"
            title="Cirurgias Realizadas"
            value="8"
            description="Número de cirurgias realizadas em 24h"
            href="/surgery-report"
          />

          <DashboardCard 
            type="arsenal"
            title="Arsenal"
            value="85/100"
            description="Total de Kits disponíveis"
            href="#"
          />

          <DashboardCard 
            type="kitsInSurgery"
            title="Kits na sala de Cirurgia"
            value="5"
            description="Kits na sala de cirurgia"
            href="#"
          />

          <DashboardCard 
            type="kitsInCleaning"
            title="Kits em Limpeza"
            value="10"
            description="Kits em processo de limpeza"
            href="#"
          />

          <DashboardCard 
            type="avgSurgeryTime"
            title="Tempo médio de Cirurgia"
            value="1h 30min"
            description="Duração média de cirurgia"
            href="#"
          />

          <DashboardCard 
            type="avgSterilizationTime"
            title="Tempo médio de Autoclavagem"
            value="90 min"
            description="Tempo médio de autoclavagem dos kits"
            href="#"
          />
        </Flex>
      </Container>

      <Container maxW="650px" mt="12" pb="10px">
        <Graphic data={dataGraphic} />
      </Container>
    </Box>
  )
}

export { Dashboard }