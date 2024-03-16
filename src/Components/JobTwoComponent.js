import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JobTwoComponent = () => {
    return (
        <Container fluid className='px-4'>
            <Row className='py-5 gx-0'>
                <Col lg={6} className='display-1'>
                    <p>
                        #2 IBM
                    </p>
                </Col>
                <Col lg={6} className='text-end ft pt-5'>
                    <a href='https://www.ibm.com/us-en' target='_blank' rel="noreferrer">
                        https://www.ibm.com/us-en
                    </a>
                </Col>
            </Row>
            <hr>
            </hr>
            <Row className='pt-3 gx-0'>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Why IBM?
                    </p>
                    <p className='pe-3'>
                        I decided on IBM as looking at the benifits and there are quite a few that interest me
                        <ul>
                            <li>Paid Internships</li>
                            <li>Matching 401k contribution</li>
                            <li>Financial education programs</li>
                            <li>Non Primary Caregiver Leave</li>
                            <li>Medical Insurance</li>
                            <li>Dental Insurance</li>
                            <li>Vision Insurance</li>
                        </ul>
                        there are more but these few are just the ones that are the most interesting and appeal to me.
                    </p>
                    <a href='https://money.usnews.com/careers/companies/ibm-941800' target='_blank' rel='noreferrer'>
                        https://money.usnews.com/careers/companies/ <br></br>ibm-941800
                    </a>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Skills Needed?
                    </p>
                    <p className='pe-3'>
                        Based on job offerings ive seen from frontend jobs at IBM show that you need some knowledge of HTML, Angular, React, and RestApis.
                        <br></br> 
                        <br></br>
                        I already know a solid amount of HTML and React so I have half the knowledge required for this job, although I would need to learn angular and what restApis are but other than that there is not much else as this is just an internship position.
                    </p>
                    <a href='https://careers.ibm.com/job/19814515/internship-front-end-developer-remote/?codes=WEB_SEARCH_NA' target='_blank' rel='noreferrer'>
                    https://careers.ibm.com/job/19814515/ <br></br> internship-front-end-developer-remote/?codes=WEB_SEARCH_NA
                    </a>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Goals?
                    </p>
                    <p className='pe-3'>
                        Some goals I want to do / achieve are to gain basic work expierence and work with a team because I know that I will need that expierence for later jobs and this will apply to every job that I apply for in the future.
                        <br></br>
                        <br></br>
                        Another goal that I'd like to see myself doing is meeting more people and networking so I can get my name out there if I ever want to start freelancing too.
                    </p>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Do I have the skills?
                    </p>
                    <p className='pe-3'>
                        Personally I do not think that I currently have the skills to be able to work this job if I was given it right now, but I know that if I was motivated enough to, I'd be able to gain those skills to become a IBM employee.
                    </p>
                </Col>
            </Row>
        </Container>
    )
}

export default JobTwoComponent
