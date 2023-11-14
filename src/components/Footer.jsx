import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';
import {Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';

const Footer = () => {
  return (
    <Container>
      <div className='d-flex flex-xl-row flex-lg-row flex-md-column flex-sm-column flex-column justify-contend-center py-5'>
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
                    <ListGroup.Item action /* onClick={} */>Финансовый аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action /* onClick={} */>Бухгалтерский аутсорсинг</ListGroup.Item>
                    <ListGroup.Item action /* onClick={} */>Налоговые проверки</ListGroup.Item>
                    <ListGroup.Item action /* onClick={} */>Экономическая безопасность</ListGroup.Item>
                    <ListGroup.Item action /* onClick={} */>Налоговая оптимизация</ListGroup.Item>
                    <ListGroup.Item action /* onClick={} */>Обучение</ListGroup.Item>
                </ListGroup>
            </div>
            <div className='col-xl-6 col-lg-6 col-md-6 col-sm-6 col-12'>
                <h3>Контакты</h3>
                <p>Москва, проспект Ленина, д18, корп.38 (800) 359 58 63</p>
            </div>
          </div>

    </div>
    </Container>
  )
}

export default Footer