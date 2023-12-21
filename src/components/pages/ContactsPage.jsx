import React, { useEffect, useLayoutEffect } from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import { AppContext } from '../../App';
import CardForContactsPage from '../cards/CardForContactsPage';
import { useLocation } from "react-router";

const ContactsPage = () => {
  const ContactsPageContext = React.useContext(AppContext);
  const location = useLocation();
  useLayoutEffect(() => {
    if(location.pathname==='/contacts'){ContactsPageContext.setThemeHeader('dark')}
  }, []);

  return (
    <div>
      <Container className='' style={{background:'#444856'}}fluid>
        <Container className='p-5'>
          <Row className=''>
            <Col xxl={6} xl={6} className=''>
              <h1 style={{color: '#FFF',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto'}}>Свяжитесь с нами любым удобным способом</h1>
            </Col>
          </Row>
          <Row className='pt-5 text-center'>
            {ContactsPageContext.contacts.map((obj)=>{
              return (
                <Col key={obj.id}>
                  <CardForContactsPage name={obj.name} path={obj.path} value={obj.value}/>
                </Col>)

             })}
          </Row>
        </Container>
      </Container>
      <Container className='pt-5' fluid>
        <Container>
          <div className='pb-5'><h1 style={{color: '#5C5E6C',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto', marginLeft: '30px'}}>Мы работаем по всей России</h1></div>
          <Image src='/img/map_contacts.png' fluid/>
        </Container>
      </Container>
    </div>
  )
}

export default ContactsPage
