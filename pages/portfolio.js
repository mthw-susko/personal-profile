import { Container, Box, Heading } from '@chakra-ui/react'

import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import Timeline from '../components/timeline'

const Works = () => {
  return (
    <Layout title={'Works'}>
      <Box>
        <Container maxW='container.xl'>
          <Section delay={0.1}>
            <Heading>
              Projects, Work Experience, and Education
            </Heading>
            <Heading as='h3' variant='section-title'>
              Work Experience and Education
            </Heading>
          </Section>
        </Container>
        <Timeline />
        <Container maxW='container.xl'>
          <Section delay={0.2}>
            <Heading as='h3' variant={"section-title"}>
              Projects
            </Heading>
            <Paragraph>
              There's nothing much to show here so far besides this website but I have some projects in the works that I hope to put here very soon...
            </Paragraph>
          </Section>
        </Container>
      </Box>
    </Layout>
  )
}

export default Works
