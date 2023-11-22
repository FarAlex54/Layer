import React, {useEffect, useState} from 'react'
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import './../../App.css';
import Form from 'react-bootstrap/Form';
import { useForm } from 'react-hook-form';

const SignLogin = () => {
    const {register, formState:{errors}, handleSubmitForm} = useForm();
    const [show,setShow] = useState(false);
    const [user, setUser] = useState({});
    const handleClose = () => setShow(false);
    const [selectedTab, setSelectedTab] = useState('sign');
    const [validated, setValidated] = useState(false);

/*     useEffect(() => {

    },[]); */

    function handleSelect(Key){
      setSelectedTab(Key);
    }
    function onFokuse(e){
      e.target.value='+7 ';
    }
    const changePhone = (e)=> {
        if (e.target.value.length === 6) {e.target.value+=' '}
        if (e.target.value.length === 10) {e.target.value+=' '}
        if (e.target.value.length === 13) {e.target.value+=' '}
        console.log('буква =  length[asd]=  значение поля = ',e.target.value);
    }

/*     const handleSubmit = (event) => {
      const form = event.currentTarget;
      if (form.checkValidity() === false) {
        event.preventDefault();
        event.stopPropagation();
      }
      setValidated(true);
    }; */
  return ( 
    <div className='text-white'>
      <Tabs className='d-flex flex-row'
        defaultActiveKey='sign'
        id="fill-tab-example"
        fill
        onSelect={handleSelect}>
        <Tab tabClassName='text-black fw-bolder' eventKey='login' title="Вход">
          <Form className='d-flex flex-column' /* onSubmit={handleSubmitForm} */>
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
          <Form className='d-flex flex-column' /* onSubmit={handleSubmitForm} */>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Логин</Form.Label>
              <Form.Control type="text" placeholder="Ваш Login" /* isInvalid */ required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" isValid required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Телефон</Form.Label>
              <Form.Control id='phone' type="text" placeholder="+7 999 999 99 99" maxlength="16" onClick={onFokuse} onChange={(e)=>changePhone(e)} /* isInvalid */ required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" /* isInvalid */ required/>
            </Form.Group>
            <Button type='submit' className='align-self-end' variant="primary">Регистрация</Button>
          </Form>
        </Tab>
      </Tabs>
    </div> 
  )
}

export default SignLogin