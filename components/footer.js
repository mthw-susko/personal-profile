import {
  Container,
  Box,
  Grid,
  GridItem,
  useColorModeValue,
  Icon,
  Link,
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Box pb={4} pt={2} bg={useColorModeValue('#ffffff40', '#20202380')}>
      <Container >
        <Grid templateColumns='repeat(3, 1fr)' gap={3}>
          <GridItem colSpan={3} bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' >
            <h1> Contacts and Socials </h1>
          </GridItem>
          <GridItem bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' >
            <Link href='https://github.com/mthw-susko' isExternal>
              <h1 align="center">Github
                <Icon ml={1} as={AiFillGithub} />
              </h1>
            </Link>
          </GridItem>
          <GridItem bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' >
            <Link href='https://www.instagram.com/matthew_susko/' isExternal>
              <h1 >Instagram
                <Icon ml={1} as={BsInstagram} />
              </h1>
            </Link>
          </GridItem>
          <GridItem bg={useColorModeValue('orange.300', 'blackAlpha.600')} display={"flex"} justifyContent={"center"} alignItems={"center"} rounded="sm" w='100%' h='10' >
            <Link href='https://www.instagram.com/matthew_susko/' isExternal>
              <h1 align="center">LinkedIn
                <Icon ml={1} as={BsLinkedin} />
              </h1>
            </Link>
          </GridItem>
        </Grid>
      </Container>
    </Box >
  )
}

export default Footer
