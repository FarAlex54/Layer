import React from 'react'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

const InfoCommand = () => {
  return (
    <Container fluid className='py-3' style={{ marginTop: '24px', marginBottom: '24px', marginLeft: '144px', marginRight: '144px'}}>
        <Row>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className=''style={{ maxWidth: '394px' }}>
                <Row className='align-items-center text-center pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/GroupPhones.png' fluid />
                    </Col>
                    <Col className='font_h text-start' style={{ marginLeft: '20px'}}>Одна команда</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'>мы решаем проблему комплексно – бухгалтер, юрист, аудитор, финансист - помогут принять оптимальное по рискам, стоимости и срокам решение.</p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className=''style={{ maxWidth: '394px' }}>
                <Row className='align-items-center text-center pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/Brains.png' fluid />
                    </Col>
                    <Col className='font_h text-start' style={{ marginLeft: '64px'}} >Опыт</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'>мы работаем на протяжении 20-ти лет, это позволяет решить не только существующие проблемы, но и предотвратить их возникновение </p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
            <Col className='' style={{ maxWidth: '394px' }}>
                <Row className='align-items-center text-center  pb-3'>
                    <Col xxl={3} xl={3} lg={3} md={3} sm={3} xs={4} className=''>
                        <Image src='/img/GroupTask.png' fluid />
                    </Col>
                    <Col className='font_h text-start' style={{ marginLeft: '20px'}}>Живое общение</Col>
                </Row>
                <Row>
                    <Col>
                        <p className='font_p text-center'>мы не только решим ваши проблемы, но и научим решать их самостоятельно</p>
                    </Col>
                </Row>
            </Col>
            <div className='' style={{width:'1px'}}><div className='deviser_info'></div></div>
        </Row>
    </Container>
  )
}
export default InfoCommand
