import React from 'react'
import ListGroup from 'react-bootstrap/ListGroup';

const Footer = () => {
  return (
    <div className='row justify-contend-center py-5'>
        <div className='col p-5 text-center'>
            <img src="/img/Logo.png" alt="" />
            <span>надежный опыт с 2004 года для оперативного решения нестандартных и сложных задач</span></div>
        <div className='col p-5'>
            <h3>Компания</h3>
            <ListGroup className='list-group-flush'>
                <ListGroup.Item action /* onClick={} */>О нас</ListGroup.Item>
                <ListGroup.Item action /* onClick={} */>Услуги</ListGroup.Item>
                <ListGroup.Item action /* onClick={} */>База знаний</ListGroup.Item>
                <ListGroup.Item action /* onClick={} */>Контакты</ListGroup.Item>
            </ListGroup>
        </div>
        <div className='col p-5'>
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
        <div className='col p-5'>
            <h3>Контакты</h3>
            <p>Москва, проспект Ленина, д18, корп.38 (800) 359 58 63</p>
        </div>
    </div>
  )
}

export default Footer