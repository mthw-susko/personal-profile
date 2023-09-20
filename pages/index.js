import { Container, Box, Heading, Image, useColorModeValue, Link } from '@chakra-ui/react'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { OrbitControls } from "@react-three/drei";
import { Canvas } from '@react-three/fiber'
import Laptop from '../components/laptop'
import { Suspense } from 'react'

const Page = () => {


  return (
    <Layout>
      <Canvas style={{ height: '20em', paddingBottom: '-5em' }} orthographic='true' camera={{ position: [1, 1, 1], fov: 0.4, zoom: 90 }} >
        <OrbitControls enableZoom={false} />
        <ambientLight position={[10, 15, -10]} intensity={0.5} />
        <directionalLight position={[5, 5, -5]} intensity={1} />
        <Suspense fallback={null}>
          <Laptop />
        </Suspense>
      </Canvas>

      <Container maxW='container.xl'>
        <Box borderRadius="lg" bg={useColorModeValue('orange.300', 'blackAlpha.600')} p={3} mb={6} align="center">
          Hello, my name is Matthew and I am an aspiring full-stack developer based in Canada
        </Box>

        <Box display={{ md: 'flex' }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Matthew Susko
            </Heading>
            <p> Student - Athlete - Developer </p>
          </Box>
          <Box flexShrink={0} mt={{ base: 4, md: 0 }} ml={{ md: 6 }} align="center">
            <Image
              borderColor={useColorModeValue('orange.300', 'blackAlpha.600')}
              borderWidth={2}
              borderStyle="solid"
              maxWidth="100px"
              display="inline-bock"
              borderRadius="full"
              src="/images/MatthewSusko.jpeg" />
          </Box>
        </Box>

        <Section delay={0.1}>
          <Heading as='h3' variant='section-title'>
            Work
          </Heading>
          <Paragraph>
          When Matthew isn't in the gym or at school he enjoys planning and designing
            software that solve real-world problems. Matthew has experience using many different web technologies
            such as HTML, CSS, Javascript, React, React Native, Angualar JS, Angualar 2, NgRx, Rxjs, Nextjs, and Elm. He
            also has additional experience working with other languages such as Python, C, Java, Haskell, and Swift. Matthew also 
            enjoys designing using tools such as the Adobe Suite and Figma.
          </Paragraph>
        </Section>
        <Section delay={0.2}>
          <Heading as='h3' variant="section-title">
            Bio
          </Heading>
          <BioSection>
            <BioYear>
              2003
            </BioYear>
            Born in Vancouver BC, Canada.
          </BioSection>
          <BioSection>
            <BioYear>
              2018
            </BioYear>
            Worked as a Junior QA Engineer at Metronomics
          </BioSection>
          <BioSection>
            <BioYear>
              2021
            </BioYear>
            Graduated highschool from Whistler Secondary School and
          </BioSection>
          <BioSection>
            <BioYear>
              2022
            </BioYear>
            Worked as QA Engineer at Metronomics
          </BioSection>
          <BioSection>
            <BioYear>
              2023
            </BioYear>
            UX/UI Front-End Developer at Metronomics
          </BioSection>
          <BioSection>
            <BioYear >
              Present
            </BioYear>
            Enrolled in Queen's University for a Bachelor's Degree in Computer Science and a specialization in Software Design
          </BioSection>
        </Section>
        <Section delay={0.3} >
          <Heading as='h3' variant="section-title">
            School
          </Heading>
          <Paragraph>
          Matthew is currently studying at Queen's Univeristy for a Bachelor's Degree in Computer Science
            and a specialization in Software Design. At the moment, he is in his third year of studies
            and living in Kingston, ON. When he graduates he hopes to persue a career in front-end development and UX/UI design. 
          </Paragraph>
        </Section>
      </Container>
    </Layout>
  )
}

export default Page
