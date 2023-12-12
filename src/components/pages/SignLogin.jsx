import React, {useEffect, useState} from 'react'
import {Button, Container, Row, Col, Tab, Tabs, Form, Modal, Nav} from 'react-bootstrap';
import './../../App.css';
import { useForm } from 'react-hook-form';
import { AppContext } from './../../App';
import TabContainer from 'react-bootstrap/TabContainer'

const SignLogin = () => {
    const SignLoginContext = React.useContext(AppContext);
    /* Переменные и функции для формы Login */
    const [loginField, setLoginField] = useState(false);
    const [existUser,setExistUser] = useState(false);
    const [checkPass,setCheckPass] = useState(false);   
    function findUser(e){
      e.preventDefault();
      const user = SignLoginContext.users.find(obj =>(obj.login === document.getElementById('login').value));
      (user)? (user.password===document.getElementById('pass').value ? alert('Добро пожаловать, ' + user.name):setCheckPass(true)):setExistUser(true);
    }
    function loginChange(e){
      setLoginField(e.target.value.length>0 ? true:false);
      setExistUser(false);
    }
    /* Переменные и функции для формы Sign */
    function changeFocus(e){
      /* if document.getElementById('pass').value */
      console.log('Привет');
    }
  return ( 
    <Container className=''>
      <Tabs className='d-flex flex-row text-black fw-bolder'
        defaultActiveKey='login'
        id="fill-tab-example"
        fill
        onSelect={(Key)=>{Key==='sign'? console.log('Выбрана форма регистрации'):console.log('Выбрана форма входа')}}
        >
          <Tab tabClassName='tabOfTabs'  className='formTab' eventKey='login' title="Вход">
            <Form className='text-light ps-3 pe-3 pb-3'>
              <Form.Group className="mb-3 mt-3" controlId="login">
                <Form.Control type="login" placeholder="Ваш login" onChange={(e)=>loginChange(e)} required isInvalid={existUser}/>
                <Form.Control.Feedback type='invalid' tooltip>Нет такого пользователя</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="pass">
                <Form.Control type="password" placeholder="Пароль" onChange={(e)=>setCheckPass(false)}required isInvalid={checkPass}/>
                <Form.Control.Feedback type='invalid' tooltip>Ошибка пароля</Form.Control.Feedback>
              </Form.Group>
              <Row className='align-items-center'>
                <Col className=''><a className='forgotPass font_p' href="">не помню пароль</a></Col>
                <Col></Col>
                <Col className='text-end'>
                  <Button disabled={!loginField} variant="primary" type="submit" onClick={findUser}>
                    Войти
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab>
          <Tab tabClassName='tabOfTabs'  className='formTab' eventKey='sign' title="Регистрация">
            <Form className='text-light ps-3 pe-3 pb-3'>
              <Form.Group className="mb-3 mt-3" controlId="name">
                <Form.Control type="text" placeholder="Ваше имя" blur={(e)=>changeFocus(e)} required/>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="phone">
                <Form.Control type="number" placeholder="+7 900 000 00 00" required/>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="email">
                <Form.Control type="email" placeholder="name@example.com" required />
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="loginSign">
                <Form.Control type="text" placeholder="Ваш Логин" required/>
              </Form.Group>              
              <Form.Group className="mb-3" controlId="passwordSign">
                <Form.Control type="password" placeholder="Пароль" required/>
              </Form.Group>
              <Col className='text-end'>
                <Button variant="primary" type="submit">
                  Регистрация
                </Button>
              </Col>
            </Form>            
          </Tab>
      </Tabs>
    </Container>
  )
}

export default SignLogin