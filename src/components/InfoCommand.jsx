import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const InfoCommand = () => {
  return (
    <Container>
        <div className="row justify-content-center py-4">
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-auto'><img className='img-fluid' src="/img/GroupPhones.png" alt="" /></div>
                    <div className='col-auto'><h3>Одна команда</h3></div>
                </div>
                <p>мы решаем проблему комплексно – бухгалтер, юрист, аудитор, специалист по регистрации - помогут принять оптимальное по рискам, стоимости и срокам решение.</p>
            </div>
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-auto'><img className='img-fluid' src="/img/Brains.png" alt="" /></div>
                    <div className='col-auto'><h3>Опыт</h3></div>
                </div>
                <p>мы работаем на протяжении 20-ти лет, что позволяет быть в курсе не только современных требований, но и истории и логики их возникновения</p>
            </div>
            <div className="col-4 text-center">
                <div className='row justify-content-center align-items-center py-4'>
                    <div className='col-auto'><img src="/img/GroupTask.png" alt="" /></div>
                    <div className='col-auto'><h3>Живое общение</h3></div>
                </div>
                <p>мы открыты – Вы общаетесь не только с профильными специалистами, но и с управляющими партнерами. Мы доступны - у нас нет пропускной системы, не нужны паспорта, у нас свободная парковка.</p>
            </div>
        </div>
    </Container>
  )
}
export default InfoCommand
