import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

const InfoCommand = () => {
  return (
    <Container fluid className='py-3'>
        <Row>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className=''>
                <Row className='align-items-center text-center pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/GroupPhones.png' fluid />
                    </Col>
                    <Col className='font_h text-start'>Одна команда</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'>мы решаем проблему комплексно – бухгалтер, юрист, аудитор, специалист по регистрации - помогут принять оптимальное по рискам, стоимости и срокам решение.</p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className=''>
                <Row className='align-items-center text-center pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/Brains.png' fluid />
                    </Col>
                    <Col className='font_h '>Опыт</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'><p className='font_p'>мы работаем на протяжении 20-ти лет, что позволяет быть в курсе не только современных требований, но и истории и логики их возникновения</p></p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className=''>
                <Row className='align-items-center text-center  pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/GroupTask.png' fluid />
                    </Col>
                    <Col className='font_h text-start'>Живое общение</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'>мы открыты – Вы общаетесь не только с профильными специалистами, но и с управляющими партнерами. Мы доступны - у нас нет пропускной системы, не нужны паспорта, у нас свободная парковка.</p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
        </Row>



{/*         <div className="row justify-content-center py-4">
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-3'><img className='img-fluid' src="/img/GroupPhones.png" alt="" /></div>
                    <div className='col-auto'><span className='font_h'>Одна команда</span></div>
                </div>
                <p className='font_p'>мы решаем проблему комплексно – бухгалтер, юрист, аудитор, специалист по регистрации - помогут принять оптимальное по рискам, стоимости и срокам решение.</p>
            </div>
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-3'><img className='img-fluid' src="/img/Brains.png" alt="" /></div>
                    <div className='col-auto'><span className='font_h'>Опыт</span></div>
                </div>
                <p className='font_p'>мы работаем на протяжении 20-ти лет, что позволяет быть в курсе не только современных требований, но и истории и логики их возникновения</p>
            </div>
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-3'><img  className='img-fluid' src="/img/GroupTask.png" alt="" /></div>
                    <div className='col-auto'><span className='font_h'>Живое общение</span></div>
                </div>
                <p className='font_p'>мы открыты – Вы общаетесь не только с профильными специалистами, но и с управляющими партнерами. Мы доступны - у нас нет пропускной системы, не нужны паспорта, у нас свободная парковка.</p>
            </div>
        </div> */}
    </Container>
  )
}
export default InfoCommand
