import {
  Container,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Icon,
  Link,
  Button,
  ButtonGroup
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Box pb={4} pt={2} bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container maxW='container.md'>
        <Grid templateColumns='repeat(1, 1fr)' gap={3}>
          <GridItem bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' >
            <h1> Contacts and Socials </h1>
          </GridItem >
          <GridItem col display={"flex"} justifyContent={"center"} alignIems={"center"} rounded="sm" w='100%' h='10' >
            <ButtonGroup spacing='3' display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10'>
              <Link href='https://github.com/mthw-susko' isExternal display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10'>
                <Button leftIcon={<AiFillGithub />} bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10'>
                  Github
                </Button>
              </Link>
              <Link href='https://www.instagram.com/matthew_susko/' display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' isExternal>
                <Button leftIcon={<BsInstagram />} bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10'>
                  Instagram
                </Button>
              </Link>
              <Link href='https://www.linkedin.com/in/matthew-mb-susko/' display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' isExternal>
                <Button leftIcon={<BsLinkedin />} bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10'>
                  Linkedin
                </Button>
              </Link>
            </ButtonGroup>
          </GridItem>
        </Grid>
      </Container>
    </Box >
  )
}

export default Footer
