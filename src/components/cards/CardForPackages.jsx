import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap';
import Button from 'react-bootstrap/esm/Button';

const CardForPackages = (props) => {
  return (
    <Container className='' fluid style={{fontFamily: 'Roboto'}}>
      <Row className='text-center py-2'>
        <Col><h4>{props.name}</h4></Col>
      </Row>
      <Row className='text-center bg-info py-3'>
        <Col><h4>{props.price}</h4></Col>
      </Row>
      <Row className='text-center'>
        <Col>{props.description}</Col><hr/>
      </Row>
      {props.include.map((obj,i)=>
        <Row key={props.keys+'inc'+i} className='text-start'>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}><Image src='./img/icons-package-on.png' fluid/></Col>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>{obj}</Col>
        </Row>
      )}
      {props.uninclude.map((obj,i)=>
        <Row key={props.keys+'uninc'+i}>
          <Col xxl={2} xl={2} lg={2} md={2} sm={2} xs={2}><Image src="./img/icons-package-off.png" fluid/></Col>
          <Col xxl={10} xl={10} lg={10} md={10} sm={10} xs={10}>{obj}</Col>
        </Row>
      )}
      <Row className='text-center py-2'><Col><Button>Заказать</Button></Col></Row>
    </Container>
  )
}

export default CardForPackages
