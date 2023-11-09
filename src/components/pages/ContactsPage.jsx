import React from 'react'
import Container from 'react-bootstrap/Container';
import { AppContext } from '../../App';
import CardForContactsPage from '../cards/CardForContactsPage';

const ContactsPage = () => {
  const ContactsPageContext = React.useContext(AppContext);
  return (
    <div className='d-flex flex-column'>
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
          <h1 className='h1pages pPages'>Мы работаем по всей России</h1>
          <img className='img-fluid' src="/img/map_contacts.png" alt="" />
        </Container>
      </div>
    </div>
  )
}

export default ContactsPage
