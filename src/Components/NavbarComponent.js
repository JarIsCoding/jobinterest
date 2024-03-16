import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const NavbarComponent = () => {
    return (
        <Container fluid className='p-0 m-0 pt-3 navclass'>
            <Row className='px-4 gx-0'>
                <Col lg={7} md={4} className='fw-bold'>
                    <p>
                        Jared's Job Interests
                    </p>
                </Col>
                <Col lg={5} md={8} className='text-end gx-0'>
                    <Row>
                        <Col>
                            <Link to={'/'} className='decor'>
                                <p>
                                    Job #1
                                </p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={'Two'} className='decor'>
                                <p>
                                    Job #2
                                </p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={'Three'} className='decor'>
                                <p>
                                    Job #3
                                </p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={'Four'} className='decor'>
                                <p>
                                    Job #4
                                </p>
                            </Link>
                        </Col>
                        <Col>
                            <Link to={'Five'} className='decor'>
                                <p>
                                    Job #5
                                </p>
                            </Link>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <hr className='black m-0'></hr>
        </Container>
    )
}

export default NavbarComponent
