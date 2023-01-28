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
            <Heading as='h4' variant='section-sub-title'>CourseFind - 2023</Heading>
            <Paragraph pb={"1em"}>
              CourseFind is an application I developed to make it easier for Queen's students to find information on the classes they are going
              to take for the semester. CourseFind shows information like average gpa, average enrolment, description of the class, professor, and
              rate my prof score for the professor for all 2200 classes avaiable at Queen's University. The application was developed in React and Nextjs
              and the API created to fetch information for courses was developed using Flask, SQLite, and Selenium. All code can be found on my Github with
              more documentation.
            </Paragraph>
            <Image src={"/images/course_find_photo.png"} alt="course-find-pic" />
            <Heading as='h4' variant='section-sub-title'>QSS (Queen's Startup Summit) - 2022</Heading>
            <Paragraph pb={"1em"}>
              I participated in the 2022 Queen's Startup Summit where me and a team of 3 created a buisness idea to help reduce food waste in 24 hours. We came up with the idea to create an
              application that keeps track of food items in your home and notifies you when they are about to expire. It also suggests food recipes that prioritize food that is
              about to expire so you don't end up wasting any food. I designed mockups for the application in Figma which we used in our pitch of the idea.
            </Paragraph>
            <Grid templateColumns='repeat(3, 2fr)' gap={3}>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - Socials.png"} alt="social-pic" />
              </GridItem>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - Main.png"} alt="social-pic" />
              </GridItem>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - List Page.png"} alt="social-pic" />
              </GridItem>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - Insights.png"} alt="social-pic" />
              </GridItem>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - Socials.png"} alt="social-pic" />
              </GridItem>
              <GridItem>
                <Image src={"/images/iPhone 14 Pro - Profile.png"} alt="social-pic" />
              </GridItem>
            </Grid>
          </Section>
        </Container>
      </Box>
    </Layout >
  )
}

export default Works
