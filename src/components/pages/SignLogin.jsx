import React, {useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './../../App.css';
import Form from 'react-bootstrap/Form';

const SignLogin = () => {
    const [show,setShow] = useState(false);
    const [user, setUser] = useState({});
    const handleClose = () => setShow(false);
    const [selectedTab, setSelectedTab] = useState('sign');
    function handleSelect(Key){
      setSelectedTab(Key);
    }
  return ( 
    <div className='text-white'>
      <Tabs className='d-flex flex-row'
        defaultActiveKey='sign'
        id="fill-tab-example"
        fill
        onSelect={handleSelect}>
        <Tab tabClassName='text-black fw-bolder' eventKey='login' title="Вход">
          <Form className='d-flex flex-column'>
            <Form.Group className="mb-3" controlId="loginForm">
              <Form.Label>Логин</Form.Label>
              <Form.Control type="text" placeholder="Ваш Login" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="loginForm">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <div className='align-self-end'>
              <a href="#" className='text-white pe-4 text-decoration-none'>забыл пароль</a>
              <Button variant="primary">Вход</Button>
            </div>
          </Form>
        </Tab>
        <Tab tabClassName='text-black fw-bolder justify-content-end' eventKey='sign' title="Регистрация">
          <Form className='d-flex flex-column'>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Логин</Form.Label>
              <Form.Control type="text" placeholder="Ваш Login" isValid required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="text" placeholder="Password" isValid required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Телефон</Form.Label>
              <Form.Control type="text" placeholder="+7 999 999 99 99" isValid required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" isValid required/>
            </Form.Group>
            <Button className='align-self-end' variant="primary">Регистрация</Button>
          </Form>
        </Tab>
      </Tabs>
    </div> 
  )
}

export default SignLogin