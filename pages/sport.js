import { Container, Box, Heading, Image, Grid, GridItem } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'

const Sport = () => {
  return (
    <Layout title={'Sport'}>
      <Box>
        <Container>
          <Section delay={0.1}>
            <Heading>
              Compeitive Trampoline and Double-Mini Trampoline
            </Heading>
          </Section>
          <Section delay={0.2}>
            <Heading as='h3' variant='section-title'>
              Trampoline
            </Heading>
            <Paragraph pb={"1em"}>
              Competitive Trampoline is a sub-discipline of the main Gymnastics stream. Though it's less well known as its other
              counter parts, compeitive trampoline is a widely practiced sport around the world and is also an event in the summer Olympics.
              I have been doing competitive trampoline for over 8 years now and have competed on both provincial and national levels (currently L7).
            </Paragraph>
          </Section>
          <Section delay={0.3}>
            <Paragraph pb={"1em"}>
              I really enjoy the sport because the feeling you have while in the air is unmatched by anything else I've done in my life. It's
              a hard feeling to describe but if you've ever had the chance to bounce on a trampoline you might have experienced a little bit
              of what I'm talking about.
            </Paragraph>
          </Section>
          <Section delay={0.4}>
            <Paragraph pb={"1em"}>
              Over the years I've been apart of the British Columbia provincial team (2018-2022) and the Ontario
              Provincial team (2022-present) and have won a couple provincial titles in both trampoline and double-mini trampoline.
            </Paragraph>
          </Section>
          <Section delay={0.5}>
            <Grid templateColumns='repeat(2, 1fr)' gap={3}>
              <GridItem>
                <video width="" height="" controls>
                  <source src="/videos/routine2.mp4" type="video/mp4" />
                </video>
              </GridItem>
              <GridItem>
                <video width="" height="" controls>
                  <source src="/videos/routine3.mp4" type="video/mp4" />
                </video>
              </GridItem>
            </Grid>
          </Section>
          <Section delay={0.6}>
            <Heading as='h3' variant='section-title'>
              Double-Mini Trampoline (DMT)
            </Heading>
            <Paragraph pb={"1em"}>
              Double Mini Trampoline, sometimes referred to as Double Mini or DMT, is a less well known Gymnastics discipline within
              Trampolining. Participants perform acrobatic skills on an apparatus smaller than a regular competition trampoline. DMT is
              similar to a vault in the sense that you run up to the apparatus, do a mount skill on to it then another skill as a dismount
              off of the trampoline. I have also been doing DMT for the past 8 years and have competed at provincial and
              national competitions (currently L7).
            </Paragraph>
          </Section>
          <Section delay={0.7}>
            <Grid templateColumns='repeat(3, 1fr)' gap={3}>
              <GridItem>
                <video width="" height="" controls>
                  <source src="/videos/dmt_pass1.mp4" type="video/mp4" />
                </video>
              </GridItem>
              <GridItem>
                <video width="" height="" controls>
                  <source src="/videos/dmt_pass2.mp4" type="video/mp4" />
                </video>
              </GridItem>
              <GridItem>
                <video width="" height="" controls>
                  <source src="/videos/dmt_pass3.mp4" type="video/mp4" />
                </video>
              </GridItem>
            </Grid>
          </Section>
        </Container>
      </Box>
    </Layout >
  )
}

export default Sport
