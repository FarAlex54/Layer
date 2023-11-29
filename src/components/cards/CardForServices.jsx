import React from 'react'
import Card from 'react-bootstrap/Card';
import './../../App.css';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container'


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
                <Button className='w-50'>Заказать</Button>
            </Col>
         </Card>
  )
}

export default CardForServices