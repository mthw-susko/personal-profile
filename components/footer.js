import {
  Container,
  Box,
  Stack,
  Text,
  ButtonGroup,
  IconButton,
  useColorModeValue,
  Link
} from '@chakra-ui/react'
import { AiFillGithub } from 'react-icons/ai'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'

const Footer = () => {
  return (
    <Box
      as="footer"
      role="contentinfo"
      py={{ base: '6', md: '8' }}
      bg={useColorModeValue('orange.100', '#20202380')}
      color={useColorModeValue('gray.600', 'gray.400')}
    >
      <Container maxW='container.md'>
        <Stack spacing={{ base: '4', md: '5' }}>
          <Stack justify="center" direction="row" align="center">
            <ButtonGroup variant="ghost">
              <Link href='https://github.com/mthw-susko' isExternal>
                <IconButton
                  aria-label='Github'
                  icon={<AiFillGithub fontSize="1.25rem" />}
                />
              </Link>
              <Link href='https://www.linkedin.com/in/matthew-mb-susko/' isExternal>
                <IconButton
                  aria-label='LinkedIn'
                  icon={<BsLinkedin fontSize="1.25rem" />}
                />
              </Link>
              <Link href='https://www.instagram.com/matthew_susko/' isExternal>
                <IconButton
                  aria-label='Instagram'
                  icon={<BsInstagram fontSize="1.25rem" />}
                />
              </Link>
            </ButtonGroup>
          </Stack>
          <Text fontSize="sm" color="subtle" align="center">
            &copy; {new Date().getFullYear()} Matthew Susko. All Rights Reserved.
          </Text>
        </Stack>
      </Container>
    </Box>
  )
}

export default Footer