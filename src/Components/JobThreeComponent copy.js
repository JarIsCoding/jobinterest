import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JobThreeComponent = () => {
  return (
    <Container fluid className='px-4'>
      <Row className='py-5 gx-0'>
        <Col lg={6} className='display-1'>
          <p>
            #3 Trinchero Family
          </p>
        </Col>
        <Col lg={6} className='text-end ft pt-5'>
          <a href='https://jobs.tfewines.com/' target='_blank' rel="noreferrer">
            https://jobs.tfewines.com/
          </a>
        </Col>
      </Row>
      <hr>
      </hr>
      <Row className='pt-3 gx-0'>
        <Col lg={3}>
          <p className='fw-bold'>
            Why Trinchero Family?
          </p>
          <p className='pe-3'>
            I have picked Trinchero Family as one of my choices because of the real possibility of becoming a part of a actual workforce, also if I happen to be able to get the Trinchero internship it would be a great way to introduce myself into the workforce seeing that I have no current work expierence.
            <br></br>
            <br></br>
            Also After checking on the Trinchero internship, the benifits are pretty great as it has medical, dental, vision, life insurance coverage, disability benefits, PTO, wellness programs and fertility and family building benefits!
          </p>
          <a href='https://jobs.tfewines.com/job/Lodi-Web-Development-Intern-CA-95242/1121301500/'>
            https://jobs.tfewines.com/job/Lodi-Web-Development-Intern-CA-95242/1121301500/
          </a>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Skills Needed?
          </p>
          <p className='pe-3'>
            All the skills I need are listed by the internship here
            <ul>
              <li>Experience with WordPress CMS, MySQL, SFTP Client, GitHub.</li>
              <li>General Knowledge of web markup including HTML, CSS, PHP, JavaScript.</li>
              <li>General Knowledge of WCAG 2.1 AA Compliance, Developer Tools, Google Lighthouse or similar.</li>
              <li>General Knowledge of Office 365.</li>
              <li>General Knowledge of Debugging Tools, Cross Browser testing.</li>
              <li>Excellent verbal communication skills as well as interpersonal skills to effectively interact with various departments and outside vendors.</li>
              <li>Excellent organizational skills and ability to effectively prioritize work.</li>
            </ul>
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Goals?
          </p>
          <p className='pe-3'>
            Goals that I want to achieve are to dip my feet into starting a job for the first time and set my name in stone as a web developer,as after looking at many posts and seeing people struggle to even begin getting a job as a web developer is a real struggle, so being able to have that first step will be very good for my future.
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Do I have the skills?
          </p>
          <p className='pe-3'>
            Yes. Right now I will be able to work the internship with my current expierence. Which is super exicting and entices me to work really hard to learn SQL and CMS for the internship or just to learn it on a personal level. I would need to learn the skills on my own but with my decent understanding of code I would be able to have the skills to work the job.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default JobThreeComponent
