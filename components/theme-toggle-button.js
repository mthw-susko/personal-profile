import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { SunIcon, MoonIcon } from '@chakra-ui/icons'

const ThemeToggleButton = () => {
  const { toggleColorMode } = useColorMode()

  return (
        <IconButton
          aria-label="Toggle theme"
          bgColor={useColorModeValue('blackAlpha.900', 'orange.300')}
          color={useColorModeValue('orange.300', 'black')}
          _hover={useColorModeValue('organge.300', 'blackAlpha.700')}
          icon={useColorModeValue(<MoonIcon />, <SunIcon />)}
          onClick={toggleColorMode}
        ></IconButton>
  )
}

export default ThemeToggleButton
