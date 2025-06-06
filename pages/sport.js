import { Container, Box, Heading, Grid, GridItem, VStack, useColorModeValue } from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { useState, useEffect } from 'react'


const VideoPlayer = ({ src }) => (
  <Box
    borderRadius="lg"
    overflow="hidden"
    boxShadow="lg"
    bg={useColorModeValue('whiteAlpha.500', 'whiteAlpha.200')}
    borderColor={useColorModeValue('gray.200', 'whiteAlpha.300')}
    borderWidth="1px"
  >
    <video width="100%" height="auto" controls>
      <source src={src} type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  </Box>
);


const Sport = () => {
    // Hydration fix for Next.js
    const [isMounted, setIsMounted] = useState(false)
    useEffect(() => {
      setIsMounted(true)
    }, [])
  
    if (!isMounted) {
      return null
    }

  return (
    <Layout title={'Sport'}>
      <Container maxW='container.xl'>
        <Section delay={0.1}>
          <Heading as="h2" variant={"page-title"} mb={8}>
            Competitive Trampoline
          </Heading>
        </Section>
        
        {/* Trampoline Section */}
        <Section delay={0.2}>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center">
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as='h3' variant='section-title'>
                  Trampoline
                </Heading>
                <Paragraph>
                  Competitive Trampoline is a sub-discipline of the main Gymnastics stream. Though it's less well known as its other counterparts, competitive trampoline is a widely practiced sport around the world and is also an event in the summer Olympics. I have been doing competitive trampoline for over 8 years now and have competed on both provincial and national levels (currently L7).
                </Paragraph>
                <Paragraph>
                  I really enjoy the sport because the feeling you have while in the air is unmatched by anything else I've done in my life. It's a hard feeling to describe but if you've ever had the chance to bounce on a trampoline you might have experienced a little bit of what I'm talking about.
                </Paragraph>
                <Paragraph>
                  Over the years I've been a part of the British Columbia provincial team (2018-2022) and the Ontario Provincial team (2022-present) and have won a couple provincial titles in both trampoline and double-mini trampoline.
                </Paragraph>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack spacing={4}>
                <VideoPlayer src="/videos/routine2.mp4" />
                <VideoPlayer src="/videos/routine3.mp4" />
              </VStack>
            </GridItem>
          </Grid>
        </Section>
        
        {/* Double-Mini Trampoline Section */}
        <Section delay={0.3}>
          <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={10} alignItems="center" mt={{ base: 10, md: 20}}>
            <GridItem order={{ base: 2, md: 1 }}>
              <VStack spacing={4}>
                <VideoPlayer src="/videos/dmt_pass1.mp4" />
                <VideoPlayer src="/videos/dmt_pass2.mp4" />
                <VideoPlayer src="/videos/dmt_pass3.mp4" />
              </VStack>
            </GridItem>
            <GridItem order={{ base: 1, md: 2 }}>
              <VStack align="start" spacing={4}>
                <Heading as='h3' variant='section-title'>
                  Double-Mini Trampoline (DMT)
                </Heading>
                <Paragraph>
                  Double Mini Trampoline, sometimes referred to as Double Mini or DMT, is a less well known Gymnastics discipline within Trampolining. Participants perform acrobatic skills on an apparatus smaller than a regular competition trampoline. DMT is similar to a vault in the sense that you run up to the apparatus, do a mount skill on to it then another skill as a dismount off of the trampoline. I have also been doing DMT for the past 8 years and have competed at provincial and national competitions (currently L7).
                </Paragraph>
              </VStack>
            </GridItem>
          </Grid>
        </Section>
      </Container>
    </Layout >
  )
}

export default Sport