import React from 'react'
import Container from 'react-bootstrap/esm/Container'

const InfoCommand = () => {
  return (
    <Container>
        <div className="row justify-content-center py-4">
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
        </div>
    </Container>
  )
}
export default InfoCommand
