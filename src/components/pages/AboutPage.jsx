import React from 'react'
import './../../App.css';
import Geolocation from '../GeoLocation';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/esm/Button';

const AboutPage = () => {
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
          <Container className='py-5'>
            <div className='d-flex justify-content-center p_test_2 pb-5'>
              <div className='pe-5'><div className='line mx-auto'></div></div>
              <div>В профессии с 2001 года</div>
              <div className='px-5'><div className='line mx-auto'></div></div>
              <div>Управляющие партнеры в бизнесе с 2004 года</div>
              <div className='px-5'><div className='line mx-auto'></div></div>
              <div>Компания создана в 2017 году</div>
              <div className='ps-5'><div className='line mx-auto'></div></div>
            </div>
            <div className='d-flex justify-content-between bg-info'>
              <div>1</div>
              <div>2</div>
              <div>3</div>
            </div>
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