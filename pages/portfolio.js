import { Container, Box, Heading, Grid, GridItem, Image } from '@chakra-ui/react'

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
            <Heading as='h3' variant={"section-title"}>
              Projects
            </Heading>
            <Image src={"/images/MGS.png"} alt="course-find-pic"  paddingBottom={'1em'} />
            <Image src={"/images/memento.png"} alt="course-find-pic" paddingTop={'1em'}paddingBottom={'1em'}/>
            <Image src={"/images/coursefind.png"} alt="course-find-pic" paddingTop={'1em'}paddingBottom={'1em'}/>
            <Image src={"/images/apetite.png"} alt="course-find-pic" paddingTop={'1em'}paddingBottom={'1em'}/>
          </Section>
        </Container>
        <Container maxW='container.xl'>
          <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
              Work Experience and Education
            </Heading>
          </Section>
        </Container>
        <Timeline />
      </Box>
    </Layout >
  )
}

export default Works
