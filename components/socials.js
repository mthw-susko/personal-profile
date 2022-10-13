import { ButtonGroup, IconButton, Link, useColorModeValue, } from '@chakra-ui/react'
import { BsInstagram, BsLinkedin } from 'react-icons/bs'
const Socials = () => {

  return (
    <ButtonGroup pr="3" display={{ base: 'none', md: 'inline' }} spacing={3}>
      <Link align='center' href='https://www.instagram.com/matthew_susko/' isExternal>
        <IconButton colorScheme={'button'} icon={<BsInstagram />} color={useColorModeValue('black', 'white')} />
      </Link>
      <Link align='center' href='https://www.linkedin.com/in/matthew-susko-132719234/' isExternal>
        <IconButton colorScheme={'button'} icon={<BsLinkedin />} color={useColorModeValue('black', 'white')} />
      </Link>
    </ButtonGroup>
  )
}

export default Socials
