import React from 'react'
import {Card, Row, Col, Image, Button, Container} from 'react-bootstrap';
import './../../App.css';


const CardForServices = (props) => {
          
  return (
        <Card className='bg-secondary' style={{height:'100%', marginLeft: '38px', border: '1px solid white', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.8)', borderRadius: '30px'}}>
            <Container fluid className='' style={{height:'100%', backgroundColor: '#444856',  borderTopLeftRadius: '30px', borderTopRightRadius: '30px'}} >
                <Row className='align-items-center py-2'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className='' >
                        <Image src={props.path} fluid />
                    </Col>
                    <Col className='text-light font_h' style={{ textAlign: 'left', paddingLeft: '22px' }}>{props.name}</Col>
                </Row>
                <Row>
                    <Col className=''>
                        <ul  className='ul font_p' >
                           {(props.description.map((obj)=><li key={props.uniqKey+obj.id} style={{ marginTop: '20px', marginBottom: '20px', marginLeft: '5px', marginRight: '5px' }}>{obj.value}</li>))} 
                        </ul>
                    </Col>
                </Row>
            </Container>
            <Col className='text-center pb-3' style={{ backgroundColor: '#444856', borderBottomLeftRadius: '30px', borderBottomRightRadius: '30px'}} >
                <Button className='w-50' style={{background:'#55A0E2', border:'0px', borderRadius: '30px', paddingTop: '8px', paddingBottom: '8px'}}><span className='font_h' style={{fontSize: '18px'}}>Заказать</span></Button>
            </Col>
         </Card>
  )
}

export default CardForServices