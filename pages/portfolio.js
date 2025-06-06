import {
  Container,
  Box,
  Heading,
  Grid,
  GridItem,
  Image,
  Text,
  VStack,
  useColorModeValue,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
  ModalFooter
} from '@chakra-ui/react'
import { motion } from 'framer-motion'
import { useState, useEffect } from 'react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const MotionBox = motion(Box)

// Data array for projects
const projectsData = [
  {
    src: "/images/MGS.png",
    alt: "Metronomics Redesign",
    title: "Metronomics Redesign"
  },
  {
    src: "/images/memento.png",
    alt: "Memento App",
    title: "Memento"
  },
  {
    src: "/images/coursefind.png",
    alt: "CourseFind",
    title: "CourseFind"
  },
  {
    src: "/images/apetite.png",
    alt: "Apetite App",
    title: "Apetite"
  }
];

const ProjectCard = ({ project, onClick }) => (
    <MotionBox
      onClick={onClick}
      cursor="pointer"
      w="100%"
      p={4}
      borderRadius="lg"
      borderWidth="1px"
      borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
      bg={useColorModeValue('white', 'whiteAlpha.200')}
      whileHover={{
        scale: 1.03,
        boxShadow: '0px 10px 30px -5px rgba(0, 0, 0, 0.1)',
      }}
      transition={{ duration: 0.3 }}
    >
      <VStack align="start" spacing={3}>
        <Image src={project.src} alt={project.alt} borderRadius="md" />
        <Heading as="h4" size="md" pt={2}>{project.title}</Heading>
      </VStack>
    </MotionBox>
  );

  const ExperienceItem = ({ year, title, company, children }) => (
    <MotionBox
      mb={8}
      p={4}
      borderRadius="lg"
      bg={useColorModeValue('whiteAlpha.700', 'whiteAlpha.100')}
      borderLeftWidth={4}
      borderColor={useColorModeValue('orange.400', 'purple.400')}
      whileHover={{ y: -5, boxShadow: 'lg' }}
      transition={{ duration: 0.2 }}
    >
      <Text fontWeight="bold" fontSize="lg" color={useColorModeValue('orange.500', 'purple.300')}>{year}</Text>
      <Heading as="h4" size="md" mt={1}>{title}</Heading>
      <Text fontStyle="italic" mb={2}>{company}</Text>
      <Paragraph>{children}</Paragraph>
    </MotionBox>
  );


const Works = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [selectedProject, setSelectedProject] = useState(null)

  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])


  const handleProjectClick = (project) => {
    setSelectedProject(project)
    onOpen()
  }

  const handleClose = () => {
    onClose()
    setSelectedProject(null)
  }

  if (!isMounted) {
    return null
  }

  return (
    <Layout title={'Portfolio'}>
      <Container maxW='container.lg'>
        <Section delay={0.1}>
          <Heading as='h2' variant={"page-title"} mb={8}>
            Portfolio
          </Heading>

          <Heading as='h3' variant={"section-title"} mb={4}>
            Projects
          </Heading>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
            {projectsData.map((project, index) => (
              <GridItem key={index}>
                <ProjectCard project={project} onClick={() => handleProjectClick(project)} />
              </GridItem>
            ))}
          </Grid>
        </Section>

        <Section delay={0.2}>
          <Heading as='h3' variant='section-title' mt={12} mb={8}>
            Work Experience & Education
          </Heading>

          <ExperienceItem year="2023 – 2024" title="Full Stack Developer" company="Empire Life">
            <List spacing={2} mt={2}>
              <ListItem>
                Developed and maintained critical web applications for 14 months using React, Node.js, and various database technologies.
              </ListItem>
              <ListItem>
                Collaborated with cross-functional teams including designers, project managers, and other engineers to define, design, and ship new features.
              </ListItem>
              <ListItem>
                Actively participated in code reviews to maintain high standards of code quality, share knowledge, and improve team practices.
              </ListItem>
            </List>
          </ExperienceItem>

          <ExperienceItem year="2023" title="UX/UI Front-End Developer" company="Metronomics">
            Worked as a UX/UI Front-End Developer at Metronomics.
          </ExperienceItem>

          <ExperienceItem year="2022" title="QA Engineer" company="Metronomics">
            Worked as QA Engineer at Metronomics.
          </ExperienceItem>

          <ExperienceItem year="2021 – Present" title="Bachelor's in Computer Science" company="Queen's University">
            Enrolled in Queen's University for a Bachelor's Degree in Computer Science and a specialization in Software Design.
          </ExperienceItem>

          <ExperienceItem year="2018" title="Junior QA Engineer" company="Metronomics">
            Worked as a Junior QA Engineer at Metronomics.
          </ExperienceItem>

        </Section>
      </Container>

      {/* Project Modal */}
      {selectedProject && (
        <Modal isOpen={isOpen} onClose={handleClose} size="2xl" isCentered>
          <ModalOverlay />
          <ModalContent bg={useColorModeValue('white', 'gray.800')}>
            <ModalHeader>{selectedProject.title}</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Image src={selectedProject.src} alt={selectedProject.alt} borderRadius="md" mb={4} />
            </ModalBody>
            <ModalFooter>
              <Button colorScheme={useColorModeValue('orange', 'purple')} onClick={handleClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      )}
    </Layout >
  )
}

export default Works;