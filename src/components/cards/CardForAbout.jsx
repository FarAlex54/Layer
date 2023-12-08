import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';

const CardForAbout = (props) => {
  return (

        <Container className='card_about_next h-100' fluid>
            <Row className='align-items-center py-3'>
                <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={3} className='ps-3 pe-3'>
                    <Image src={props.pathIcon} fluid/>   
                </Col>
                <Col xxl={9} xl={8} lg={8} md={8} sm={8} xs={8} className='text-center'>
                    <span className='font_h'>{props.title}</span>
                </Col>
            </Row>
            <Row className='text-center'>
                <span className='font_p'>{props.description}</span>
            </Row>
        </Container>

  )
}

export default CardForAbout