import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  useColorModeValue,
} from '@chakra-ui/react'
import { HamburgerIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'
import Socials from './socials'
import { ExternalLinkIcon } from '@chakra-ui/icons'

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('gray200', 'whiteAlpha.900')

  return (
    <NextLink href={href}>
      <Link p={2} bg={active ? 'orange.300' : undefined} borderRadius='sm' color={active ? '#202023' : inactiveColor}>
        {children}
      </Link>
    </NextLink>
  )
}

const Navbar = props => {
  const { path } = props

  return (
    < Box position="fixed" as="nav" w="100%" bg={useColorModeValue('#ffffff40', '#20202380')} style={{ backdropFiler: 'blur(10px)' }
    } zIndex={3} {...props}>
      <Container display='flex' p={2} maxW='container.md' wrap="wrap" align="center" justify='space-between'>
        {/* name in top left of navbar */}
        <Flex align="center" mr={5}>
          <Heading as="h1" size="lg" letterSpacing={'tight'}>
            <Logo />
          </Heading>
        </Flex>

        {/* Links to other pages on navbar*/}
        <Stack direction={{ base: 'column', md: 'row' }} display={{ base: 'none', md: 'flex' }} width={{ base: 'full', md: 'auto' }} alignItems="center" flexGrow={1} mt={{ base: 4, nmd: 0 }}>
          <LinkItem href='/portfolio' path={path}>Portfolio</LinkItem>
          <LinkItem href='/sport' path={path}>Sport</LinkItem>
        </Stack>


        {/* navbar dropdown menu with other pages listed*/}
        <Box flex={1} align="right">
          <Socials />
          <ThemeToggleButton />
          <Box ml={2} display={{ base: 'inline-block', md: 'none' }} >
            <Menu>
              <MenuButton as={IconButton} icon={<HamburgerIcon />} variant="outline" aria-label="Options" />
              <MenuList bg={useColorModeValue('white', '#202023')}>
                <NextLink href="/" passHref >
                  <MenuItem bg={useColorModeValue('white', '#202023')} as={Link} >About</MenuItem>
                </NextLink>
                <NextLink href="/portfolio" passHref>
                  <MenuItem bg={useColorModeValue('white', '#202023')} as={Link}>Portfolio</MenuItem>
                </NextLink>
                <NextLink href="/sport" passHref>
                  <MenuItem bg={useColorModeValue('white', '#202023')} as={Link}>Sport</MenuItem>
                </NextLink>
                <MenuItem mb='1px' m='-1px' bgColor={useColorModeValue('white', '#202023')}>
                  <Link href="https://www.instagram.com/matthew_susko/" isExternal color={useColorModeValue('black', 'white')} >
                    Instagram <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </MenuItem>
                <MenuItem m='-1px' bgColor={useColorModeValue('white', '#202023')}>
                  <Link href="https://www.linkedin.com/in/matthew-susko-132719234/" isExternal color={useColorModeValue('black', 'white')}>
                    Linkedin <ExternalLinkIcon mx={'2px'} />
                  </Link>
                </MenuItem>
              </MenuList>
            </Menu>
          </Box>
        </Box>
      </Container >
    </Box >

  )
}

export default Navbar
