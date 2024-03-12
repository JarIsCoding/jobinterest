import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'

const JobFiveComponent = () => {
  return (
    <Container fluid className='px-4'>
            <Row className='py-5 gx-0'>
                <Col lg={12} className='display-1'>
                    <p>
                        #5 FreeLancing
                    </p>
                </Col>
            </Row>
            <hr className='m-0'>
            </hr>
            <Row className='pt-3 gx-0'>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Why Freelancing?
                    </p>
                    <p className='pe-3'>
                        Why I'd like to work as a freelancer is because of how much more flexible it can be.
                        Being able to have the option to work as someone who can create websites for clients with my own personal designs, while also having the option to work full time also is sucb an appealing idea to me.
                        <br></br>
                        <br></br>
                        I am a fan of being able to work alone, and figuring things out so I feel that the freelancer lifestyle would fit me just fine.
                        Although I understand that there are no benifits such as pateronal leave or PTO, I feel that the freedom and solidarity is worth it, but if I did want benifits its only one extra job away.
                    </p>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Skills Needed?
                    </p>
                    <p className='pe-3'>
                        I think another great feature of becoming a freelancer is the fact that there is no real requirement to become someone who can get clients.
                        Freelancing is selling what current skills you have gained to clients and so yes currently right now I would be able to be a freelancer as long as my current skills can appeal to someone who is looking for website designs / code that I create.
                        <br></br>
                        <br></br>
                        As for skills I would need to learn, it is optional if I would want to learn more about how to create better deigns, cleaner code, or a more enticing way to get clients to buy what I would sell.
                    </p>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Goals?
                    </p>
                    <p className='pe-3'>
                        Goals I'd love to achieve/complete, is to learn about how to work professionally yet independantly, because if I start to work as a professional freelancer, I will need to change how I think and work for the best efficency.
                        <br></br>
                        <br></br>
                        Another thing I would like to do is have a better understanding of code and create frontend projects with much better proficiency and skill, and a personal goal is to get a better grasp on how CSS animations work to make cool frontend graphics.
                        Of course I can still just learn these on my own time but that is the beauty of working as a freelancer, having the ability to be free to learn anything anytime.
                    </p>
                </Col>
                <Col lg={3}>
                    <p className='fw-bold'>
                        Do I have the skills?
                    </p>
                    <p className='pe-3'>
                        Thinking about all the projects that we have created in class and considering that I feel skilled enough to create some nice websites I think that I might be good enough for a small job or a volunteer job.
                        I know that there is still a lot to learn especially in the design department, but with time and commitment I can learn more than what I might imagine.
                    </p>
                </Col>
            </Row>
        </Container>
  )
}

export default JobFiveComponent
