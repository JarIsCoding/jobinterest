import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JobFourComponent = () => {
  return (
    <Container fluid className='px-4'>
      <Row className='py-5 gx-0'>
        <Col lg={6} className='display-1'>
          <p>
            #4 Riot Games
          </p>
        </Col>
        <Col lg={6} className='text-end ft pt-5'>
          <a href='https://www.riotgames.com/en' target='_blank' rel="noreferrer">
            https://www.riotgames.com/en
          </a>
        </Col>
      </Row>
      <hr>
      </hr>
      <Row className='pt-3 gx-0'>
        <Col lg={3}>
          <p className='fw-bold'>
            Why Riot?
          </p>
          <p className='pe-3'>
            I chose Riot games as it provides many benefits and created many of my favorite games such as Valorant. It would be a dream to work and be a part of the team that created many AAA games and so many memorable titles. Some of the many benifits include health insurance, parental leave and other things to support their staff. After revieiwing how they provide to their employeers it seems like somewhere I would love to work at.
          </p>
          <a href='https://www.riotgames.com/en/work-with-us/jobs'>
            https://www.riotgames.com/en/work-with-us/jobs
          </a>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Skills Needed?
          </p>
          <p className='pe-3'>
            After reviewing some jobs that Riot has posted, and what they hire, it seems that frontend jobs aren't very popular although there are many jobs that seem possible for me to get as long as I have more expierence. Considering that many of Riot's works are based on games and not websites it may be hard to find a job without game development but I can eveuntally work up to it.
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Goals?
          </p>
          <p className='pe-3'>
            Some goals that I want to achieve if I were to work at Riot is to make an impact on the company and show what I did to change the company. Also another thing is to just gain more expierence, it's something I need as someone just getting into the work force.
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Do I have the skills?
          </p>
          <p className='pe-3'>
            Looking at how prestigous companies such as Riot games or other companies are, I am probably not fully prepared for something of this calibur, but I know my current skills will still apply when it comes to coding anything.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default JobFourComponent
