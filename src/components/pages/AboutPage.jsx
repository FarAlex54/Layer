import React, { useState, useEffect, useRef, useLayoutEffect } from 'react'
import './../../App.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Geolocation from '../GeoLocation';
import Button from 'react-bootstrap/esm/Button';
import { AppContext } from '../../App';
import { useLocation } from "react-router";
import CardForAbout from '../cards/CardForAbout';

const AboutPage = () => {
  const AboutPageContext = React.useContext(AppContext);
  const [heighBox, setHeighBox] = useState(0);
  const [heighCard, setHeighCard] = useState(0);
  const boxRef = useRef();
  const cardRef = useRef();
  const location = useLocation();

  useLayoutEffect(() => {
    const boxWidth = boxRef.current.getBoundingClientRect();
    const cardWidth = cardRef.current.getBoundingClientRect();
    setHeighBox(boxWidth.width);
    setHeighCard(cardWidth.width);
    if(location.pathname==='/about'){AboutPageContext.setThemeHeader('dark')}
  }, []);

  return (
    <div>
        {/* Серый блок с квадратиками */}
          <Container className='py-5' fluid style={{background:'#444856',color:'#FFF'}}>
            <Container>
              <h1 className=''>Формула успешного бизнеса</h1>
              <div className='hr_line'></div>
              <Row className='text-center justify-content-center'>
                <Col ref={boxRef} xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid', borderRadius:'10px', height:heighBox}}>
                  <div>
                    <p className='h1_about'>20 +</p><p className='p_about '>лет</p>
                  </div>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid',borderRadius:'10px', height:heighBox}}>
                  <div>
                    <p className='h1_about'>100 +</p><p className='p_about'>клиентов</p>
                  </div>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid',borderRadius:'10px', height:heighBox}}>
                  <div>
                    <p className='h1_about'>500 +</p><p className='p_about'>проектов</p>
                  </div>
                </Col>
              </Row>
              <div className='hr_line'></div>
            </Container>
          </Container>
        {/* Блок с карточками и брэндом */}  
          <Container className='pt-4'>
            <Row xxl={3} className=''>
             {AboutPageContext.about.map((obj)=>
                <Col key={obj.id} ref={cardRef} xxl={4} xl={4} lg={4} md={6} sm={6} xs={6} className='pb-2' style={{height:heighCard*(2/3)}}>
                  <CardForAbout title={obj.title} pathIcon={obj.pathIcon} description={obj.description}/>
                </Col>
             )}
             <Col xxl={4} xl={4} lg={4} md={6} sm={6} xs={6} className='pb-2' style={{height:heighCard*(2/3)}}>
                <Container className='card_about_next h-100' fluid>
                  <Row className='h-100'>
                    <Col className='text-center'>
                      <Image className='h-100 p-3' src='/img/Logodark.png' fluid/>
                    </Col>
                  </Row>
                </Container>
             </Col>
            </Row> 
          </Container>
      <Geolocation/>
    </div>
  )
}

export default AboutPage