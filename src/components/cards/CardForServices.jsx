import React from 'react'
import {Card, Row, Col, Image, Button, Container} from 'react-bootstrap';
import './../../App.css';


const CardForServices = (props) => {
          
  return (
        <Card className='bg-secondary' style={{height:'100%'}}>
            <Container fluid className='' style={{height:'100%'}}>
                <Row className='align-items-center py-2'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src={props.path} fluid />
                    </Col>
                    <Col className='text-light text-center font_h'>{props.name}</Col>
                </Row>
                <Row>
                    <Col className=''>
                        <ul className='ul font_p'>
                           {([...props.description].map((obj,i)=><li>{obj}</li>))} 
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Col className='text-center pb-3'>
                <Button className='w-50' style={{background:'#55A0E2', border:'0px'}}><span className='font_h'>Заказать</span></Button>
            </Col>
         </Card>
  )
}

export default CardForServices