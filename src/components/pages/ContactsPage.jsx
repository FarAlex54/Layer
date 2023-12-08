import React from 'react'
import {Container, Row, Col, Image} from 'react-bootstrap';
import { AppContext } from '../../App';
import CardForContactsPage from '../cards/CardForContactsPage';
import { useLocation } from "react-router";

const ContactsPage = () => {
  const ContactsPageContext = React.useContext(AppContext);
  const location = useLocation();
  if(location.pathname==='/contacts'){ContactsPageContext.setThemeHeader('dark')}
  return (
/*     <div className='d-flex flex-column'>
      <div className='' style={{background:'#444856'}}>
        <Container className='py-5'>
          <div className='col-7'>
              <h1 className='h1pages pPages' style={{color:'white'}}>Свяжитесь с нами любым удобным способом</h1>
          </div>
          <div className='row justify-content-between'>
            <CardForContactsPage name='Телефон' value={ContactsPageContext.contacts.telephone}/>
            <CardForContactsPage name='Почта' value={ContactsPageContext.contacts.email}/>
            <CardForContactsPage name='Адрес' value={ContactsPageContext.contacts.addr}/>
          </div>
        </Container>
      </div>
      <div className=''>
        <Container>
          <div className='name_block_light'>Мы работаем по всей России</div>
          <img className='img-fluid' src="/img/map_contacts.png" alt="" />
        </Container>
      </div>
    </div> */
    <div>
      <Container className='' style={{background:'#444856'}}fluid>
        <Container>
          <Row>
            <Col xxl={6} xl={6} className=''>
              <h1 style={{color: '#FFF',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto'}}>Свяжитес с нами любым удобным способом</h1>
            </Col>
          </Row>
          <Row className='pt-3 text-center'>
            <Col xxl={4} xl={4} className='bg-info'>1
            </Col>
            <Col xxl={4} xl={4} className='bg-danger'>2
            </Col>
            <Col xxl={4} xl={4} className='bg-info'>3
            </Col>
          </Row>
        </Container>
      </Container>
      <Container className='' fluid>
        <Container>
          <div className=''><h1 style={{color: '#5C5E6C',textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',fontFamily: 'Roboto'}}>Мы работаем по всей России</h1></div>
          <Image src='/img/map_contacts.png' fluid/>
        </Container>
      </Container>
    </div>
  )
}

export default ContactsPage
