import React from 'react'
import './../../App.css';
import Geolocation from '../GeoLocation';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

const AboutPage = () => {
  const a =[];
  a[0] = {title:'Специализация компании',text: 'Оказание комплексных юридических, финансовых, бухгалтерских и аудиторских услуг бизнесу.'};
  a[1] = {title:'Компетенции компании',text: 'Cоздание бизнеса Клиента, построение его оптимальной структуры ; аккуратное и легальное сопровождение прекращения бизнеса Клиента или выхода из него.'};
  a[2] = {title:'Цели компании',text: 'Комплексное и эффективное правовое, бухгалтерское и налоговое сопровождение бизнеса клиентов в целях его развития.'};
  a[3] = {title:'Клиенты',text: 'Управляющими партнерами выстроены долгосрочные отношения с клиентами. Нас рекомендуют, мы не проводим активных рекламных кампаний и рассылок и чаще всего работаем по рекомендации.'};
  a[4] = {title:'Конфиденциальность',text: 'Неразглашение данных о клиенте — четкое правило нашей работы, так как нам доверяют информацию.'};
         
  return (
    <div>
      <div className='d-flex flex-column' style={{background:'#444856'}}>
          <Container className='py-5'>
            <div className='col-7'>
                <h1 className='h1pages pPages' style={{color:'white'}}>Формула успешного бизнеса</h1>
            </div>
            <div className='hr_line'></div>
            <div className='row justify-content-center py-3 text-center'>
              <div className='card_about_fub m-2' style={{width:'181px'}}><p className='h1_about'>20 +</p><p className='p_about '>лет</p></div>
              <div className='card_about_fub m-2' style={{width:'181px'}}><p className='h1_about'>100 +</p><p className='p_about'>клиентов</p></div>
              <div className='card_about_fub m-2' style={{width:'181px'}}><p className='h1_about'>500 +</p><p className='p_about'>проектов</p></div>
            </div>
            <div className='hr_line'></div>
          </Container>
      </div>

      <div className='d-flex flex-column' style={{background:'#FFF'}}>
          <Container className='pt-5'>
            <div className='d-flex justify-content-center p_test_2'>
              <div className='pe-5'><div className='line mx-auto'></div></div>
              <div>В профессии с 2001 года</div>
              <div className='px-5'><div className='line mx-auto'></div></div>
              <div>Управляющие партнеры в бизнесе с 2004 года</div>
              <div className='px-5'><div className='line mx-auto'></div></div>
              <div>Компания создана в 2017 году</div>
              <div className='ps-5'><div className='line mx-auto'></div></div>
            </div>
          </Container>
          <Container className='d-flex flex-wrap justify-content-start align-items-stretch pt-5 pb-3'>
             {a.map((obj)=>{
              return (
                <div className='p-1' style={{width:'33%'}}>
                  <div className='card_about_next'style={{height:'100%'}}>
                    <div className='d-flex flex-row align-items-center'>
                      <div className='ms-2 me-3' style={{width:'20%'}}><img className='img-fluid' src="img/GroupPhones.png" alt="" /></div>
                      <div className=' flex-fill text-center'><span className='card_about_p text-center'>{obj.title}</span></div>
                    </div>
                    <p className='text-center'>{obj.text}</p>
                  </div>
                </div>)
             })}
          </Container>
      </div>


      <div className='d-flex flex-column' style={{background:'#444856'}}>
          <Container className='py-5'>
            <div className='row justify-content-between'>
              <div className='col-7'>
                  <h1 className='h1pages pPages' style={{color:'white'}}>Воспользуйтесь нашими услугами прямо сейчас</h1>
              </div>
              <div className='col-auto align-self-center'><p className='p_test'>Наши специалисты свяжутся с Вами в ближайшее время.</p></div>
            </div>
            <div className='row justify-content-end'>
              <Button className='col-2'>Перезвонить</Button>
            </div>
          </Container>
      </div>
      <Geolocation/>
    </div>
  )
}

export default AboutPage