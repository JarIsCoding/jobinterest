import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JobFiveComponent = () => {
  return (
    <Container fluid className='px-4'>
      <Row className='py-5 gx-0'>
        <Col lg={6} className='display-1'>
          <p>
            #5 Google
          </p>
        </Col>
        <Col lg={6} className='text-end ft pt-5'>
          <a href='https://www.google.com/about/careers/applications/' target='_blank' rel="noreferrer">
          https://www.google.com/about/careers
          </a>
        </Col>
      </Row>
      <hr className='m-0'>
      </hr>
      <Row className='pt-3 gx-0'>
        <Col lg={3}>
          <p className='fw-bold'>
            Why Google?
          </p>
          <p className='pe-3'>
            I landed on Google for one of my choices for a job because it is one of if not the biggest company out there. It virtually rules the internet and the prestigue would be pretty great. Also looking at the internship benifits, they are really great for anyone who is looking to start at google. Some of the benifits includes paied internship, less travel as google is so big its mostly on the internet, and simple sign ups for a job. Although I know getting into a job for google will be a struggle.
          </p>
          <a href='https://careers.google.com/stories/google-internship-faqs/'>
          https://careers.google.com/stories/google-internship-faqs/
          </a>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Skills Needed?
          </p>
          <p className='pe-3'>
            The skills that are needed are really dependant on the specific job that you apply for but what I would strive to get is a job in the front end department or something that would help me gain more expierence so I feel that I would need to keep the current skills that I have and learn more extensively on the specific languages im currently working on and the required languages that google may need me to learn during the job.
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Goals?
          </p>
          <p className='pe-3'>
            Goals that I would love to complete during google are very similar to the goals I wanted to complete for Riot Games, which are to make an impact on the company/leave my mark showing that I did something to contribute to the technology world. Included in my goals are just to work there in general as I hear it is one of the harder jobs to get in and its workplace is kind to all employers.
          </p>
        </Col>
        <Col lg={3}>
          <p className='fw-bold'>
            Do I have the skills?
          </p>
          <p className='pe-3'>
            Looking at where I am and how much expierence I have with overall coding I would say no, but when I do get my foot in the workforce I will hopefully get all of my dream jobs that are really interesting to me. 
            <br></br>
            <br></br>
            Google is most likely a high demanding job that needs expierenced workers that know the ins and outs of databases, algorthims, and other high level stuff that I just dont have. And even though I dont have these skills now I may acheieve this in the future.
          </p>
        </Col>
      </Row>
    </Container>
  )
}

export default JobFiveComponent
