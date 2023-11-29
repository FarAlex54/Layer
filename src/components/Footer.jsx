import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';

const Footer = () => {
  return (
    <Container fluid className=''>
      <Row>
        <Col xxl={2} xl={2} lg={2} md={2} sm={4} xs={4} className='text-center px-sm-4'>
          <Link to={'/'} onClick={() => window.scrollTo(0, 0)}>
            <Image className='px-3 px-md-1' src="/img/LogoNew.png" fluid/>
          </Link>      
          <p className='font_p pt-2 pt-xxl-4'>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</p>     
        </Col>
        <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={3} className='ps-md-5'>
          <p className='font_h fw-bolder'>Компания</p>
                <ListGroup className='list-group-flush font_p'>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/about'} className='text-dark text-decoration-none'>О нас</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/services'} className='text-dark text-decoration-none'>Услуги</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/knows'} className='text-dark text-decoration-none'>База знаний</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/contacts'} className='text-dark text-decoration-none'>Контакты</Link></ListGroup.Item>
                </ListGroup>
        </Col>
        <Col className='ps-md-5'>
          <p className='font_h fw-bolder'>Услуги</p>
          <ListGroup className='list-group-flush font_p'>
                    <ListGroup.Item action >Финансовый аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action >Бухгалтерский аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action >Налоговые проверки</ListGroup.Item>
                    <ListGroup.Item action >Экономическая безопасность</ListGroup.Item>
                    <ListGroup.Item action >Налоговая оптимизация</ListGroup.Item>
                    <ListGroup.Item action >Обучение</ListGroup.Item>
          </ListGroup>
        </Col>
        <Col xxl={3} xl={3} lg={3} md={3} sm={5} xs={4} className=''>
          <p className='font_h fw-bolder'>Контакты</p>
          <p className='font_p text-end'>Москва, проспект Ленина, д18, корп.38 (800) 359 58 63</p>
        </Col>
      </Row>



{/*       <div className='d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column justify-contend-center py-5'>
          <div className='d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column'>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-5 pt-xl-5 pt-lg-1 pe-sm-3 text-center'>
                <Link to={'/'} onClick={() => window.scrollTo(0, 0)}><img src="/img/LogoNew.png" className='img-fluid' alt="" /></Link>           
                <div className='pt-4'>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</div>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-7 pe-5'>
                <h3>Компания</h3>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/about'} className='text-dark text-decoration-none'>О нас</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/services'} className='text-dark text-decoration-none'>Услуги</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/knows'} className='text-dark text-decoration-none'>База знаний</Link></ListGroup.Item>
                    <ListGroup.Item action onClick={() => window.scrollTo(0, 0)}><Link to={'/contacts'} className='text-dark text-decoration-none'>Контакты</Link></ListGroup.Item>
                </ListGroup>
            </div>
          </div>
          <div className='d-flex flex-xl-row flex-lg-row flex-md-row flex-sm-row flex-column'>   
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-7 pe-5'>
                <h3>Услуги</h3>
                <ListGroup className='list-group-flush'>
                    <ListGroup.Item action >Финансовый аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action >Бухгалтерский аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action >Налоговые проверки</ListGroup.Item>
                    <ListGroup.Item action >Экономическая безопасность</ListGroup.Item>
                    <ListGroup.Item action >Налоговая оптимизация</ListGroup.Item>
                    <ListGroup.Item action >Обучение</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                <h3>Контакты</h3>
                <p>Москва, проспект Ленина, д18, корп.38 (800) 359 58 63</p>
            </div>
          </div>
    </div> */}
    </Container>
  )
}

export default Footer