import { useNavigate } from "react-router-dom"

import { Box, Center, Heading, IconButton } from "@chakra-ui/react"
import { BsArrowLeft } from "react-icons/bs"

type HeaderProps = {
  title: string
}

function Header({ title }:HeaderProps) {
  const navigate = useNavigate()

  return (
    <Box 
      position="relative" 
      w="100%" 
      maxW="600px" 
      paddingBlock="36px" 
      marginX="auto"
    >
      <IconButton
        variant="ghost"
        aria-label="Voltar"
        position="absolute"
        left="0"
        top="50%"
        transform="translateY(-50%)"
        cursor="pointer"
        onClick={() => navigate(-1)}
      >
        <BsArrowLeft size={30} />
      </IconButton>
      <Center>
        <Heading fontSize="3xl" fontWeight="normal">
          {title}
        </Heading>
      </Center>
    </Box>
  )
}

export { Header }
