import React from 'react'
import './../../App.css';
import { Container, Row, Col, Image } from 'react-bootstrap';
import Geolocation from '../GeoLocation';
import Button from 'react-bootstrap/esm/Button';
import { AppContext } from '../../App';
import { useLocation } from "react-router";
import CardForAbout from '../cards/CardForAbout';
import { useState, useEffect, useRef } from "react";

const AboutPage = () => {
  const AboutPageContext = React.useContext(AppContext);
  const [widthBox, setWidthBox] = useState();
  const location = useLocation();
  const boxRef = useRef();
  if(location.pathname==='/about'){AboutPageContext.setThemeHeader('dark')}
  const getBoxSize = () => {
    const newWidth = boxRef.current.clientWidth;
    setWidthBox(newWidth);
  };
  useEffect(() => {
    window.addEventListener("load", getBoxSize());
  }, []);

  return (
    <div>
          <Container className='py-5' fluid style={{background:'#444856',color:'#FFF'}}>
            <Container>
              <h1 className=''>Формула успешного бизнеса</h1>
              <div className='hr_line'></div>
              <Row className='text-center justify-content-center'>
                <Col ref={boxRef} xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid', borderRadius:'10px', height:widthBox}}>
                  <div>
                    <p className='h1_about'>20 +</p><p className='p_about '>лет</p>
                  </div>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid',borderRadius:'10px', height:widthBox}}>
                  <div>
                    <p className='h1_about'>100 +</p><p className='p_about'>клиентов</p>
                  </div>
                </Col>
                <Col xxl={2} xl={2} lg={2} md={2} sm={3} xs={4} className='d-flex justify-content-center align-items-center m-3' style={{border:'1px solid',borderRadius:'10px', height:widthBox}}>
                  <div>
                    <p className='h1_about'>500 +</p><p className='p_about'>проектов</p>
                  </div>
                </Col>
              </Row>
              <div className='hr_line'></div>
            </Container>
          </Container>
          <Container className='pt-4'>
            <Row xxl={3} className=''>
             {AboutPageContext.about.map((obj)=>{
              return (
                <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className='pb-2' style={{height:'25vh'}}>
                  <CardForAbout id={obj.id} title={obj.title} pathIcon={obj.pathIcon} description={obj.description}/>
                </Col>
                )
             })}
             <Col xxl={4} xl={4} lg={4} md={4} sm={6} xs={12} className='pb-2' style={{height:'25vh'}}>
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



{/*       <div className='d-flex flex-column' style={{background:'#444856'}}>
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
      </div> */}
      <Geolocation/>
    </div>
  )
}

export default AboutPage