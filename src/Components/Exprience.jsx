import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component'
import "react-vertical-timeline-component/style.min.css"
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import "../styles/exprience.css"
 
const Experience = () => {
  return (
    <div className='experience'>
      <VerticalTimeline lineColor='var(--f2)'>
        <VerticalTimelineElement icon={<SchoolIcon/>} iconStyle={{background:"var(--f2)" ,color:"#fff"}} date='2010 - 2018' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>My Random High School , Random State</h3>

        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<SchoolIcon/>} iconStyle={{background:"var(--f2)" ,color:"#fff"}} date='2010 - 2018' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>My Random High School , Random State</h3>

        </VerticalTimelineElement>
        <VerticalTimelineElement icon={<WorkIcon />} iconStyle={{background:"var(--f2)" ,color:"#fff"}} date='2010 - 2018' className='vertical-timeline-element--education'>
          <h3 className='vertical-timeline-element-title'>My Random High School , Random State</h3>
          <p>high School Diploma</p>

        </VerticalTimelineElement>
      </VerticalTimeline>

    </div>
  )
}

export default Experience