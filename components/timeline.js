import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import {
  UnorderedList,
  ListItem,
  Heading,
  useColorModeValue,
} from '@chakra-ui/react';
import { MdWork } from 'react-icons/md'

const Timeline = () => {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        contentStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white') }}
        contentArrowStyle={{ borderRight: '7px solid', color: useColorModeValue('black', 'white') }}
        date="Sept 2021 - Present"
        iconStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white'), scale: "75%" }}
        icon={<MdWork />}
      >
        <Heading as='h3' variant='section-title' lineHeight={7}>
          Bachelor of Computer Science (BCS)
        </Heading>
        <Heading as='h4' variant='section-sub-title'>Queen's University</Heading>
        <UnorderedList>
          <ListItem>Specializing in Software Design</ListItem>
          <ListItem>Dean's Honours List 2021-2022</ListItem>
          <ListItem>Made UI improvements and changes</ListItem>
          <ListItem>Performed QA for new PRs and releases</ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white') }}
        contentArrowStyle={{ borderRight: '7px solid', color: useColorModeValue('black', 'white') }}
        date="May 2022 - Sept 2022"
        iconStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white'), scale: "75%" }}
        icon={<MdWork />}
      >
        <Heading as='h3' variant='section-title'>
          QA Engineer
        </Heading>
        <Heading as='h4' variant='section-sub-title'>Metronome Growth Systems (MGS)</Heading>
        <UnorderedList>
          <ListItem>Developed full coverage unit tests in Scala using the Micro Test framework</ListItem>
          <ListItem>Made bug fixes and other back-end improvements</ListItem>
          <ListItem>Made UI improvements and changes</ListItem>
          <ListItem>Performed QA for new PRs and releases</ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        contentStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white') }}
        contentArrowStyle={{ borderRight: '7px solid', color: useColorModeValue('black', 'white') }}
        date="June 2019 - September 2019"
        iconStyle={{ background: useColorModeValue('white', '#2d3748'), color: useColorModeValue('black', 'white'), scale: "75%" }}
        icon={<MdWork />}
      >
        <Heading as='h3' variant='section-title'>
          Junior QA Engineer
        </Heading>
        <Heading as='h4' variant='section-sub-title'>Metronome Growth Systems (MGS)</Heading>
        <UnorderedList>
          <ListItem>Developed full coverage unit tests in Scala using the Micro Test framework</ListItem>
          <ListItem>Made bug fixes and other back-end improvements</ListItem>
          <ListItem>Made UI improvements and changes</ListItem>
          <ListItem>Performed QA for new PRs and releases</ListItem>
        </UnorderedList>
      </VerticalTimelineElement>
    </VerticalTimeline>
  )
}

export default Timeline
