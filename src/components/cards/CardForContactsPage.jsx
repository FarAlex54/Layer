import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';

const CardForContactsPage = (props) => {
  return (
    <Container className='h-100' style={{borderRadius:'10px', border:'1px solid #F4F4F4', borderColor:'#F4F4F4', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.30)',color:'#FFF'}}>
        <Row className='align-items-center'>
            <Col xxl={2} xl={3} lg={3} md={4} sm={4} xs={5} className='p-2 p-sm-3 p-md-4'>
                <Image src={props.path} fluid/>
            </Col>
            <Col xxl={10} xl={9} lg={9} md={8} sm={8} xs={7} className='font_h'>
                <span>{props.name}</span>
            </Col>            
        </Row>
        <Row className='font_p pb-sm-1 pb-md-3'>
            <Col></Col>
            <Col xxl={10} xl={10} lg={10} md={9} sm={9} xs={9} className='text-start'>
                <span>{props.value}</span>
            </Col>
        </Row>
    </Container>
  )
}

export default CardForContactsPage