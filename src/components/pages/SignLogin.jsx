import React, {useEffect, useState} from 'react'
import {Button, Container, Row, Col, Tab, Tabs, Form, Modal, Nav} from 'react-bootstrap';
import './../../App.css';
import { useForm } from 'react-hook-form';
import { AppContext } from './../../App';
import TabContainer from 'react-bootstrap/TabContainer'

const SignLogin = () => {
    const SignLoginContext = React.useContext(AppContext);
    const [validated, setValidated] = useState(false);

    const [errMessage, setErrMessage] = useState('*');
    function handleSelect(Key){
      Key==='sign'? console.log('Выбрана форма регистрации'):console.log('Выбрана форма входа')
    }
    const [mess, setMess] = useState('invalid');
    function findLogin(e){
/*       SignLoginContext.users.find((obj)=>(obj.login===e.target.value)? setMess('valid'):'')
      (mess==='valid')? console.log('Логин нашелся'):console.log('Логина такого нет') */
      /* const found = SignLoginContext.users.find(obj =>{ return obj.login === e.target.value}) */
      const found = SignLoginContext.users.find(obj =>{return obj.login === e.target.value})
      /* found.login ? console.log('есть логин'):console.log('нет такого логина') */
      console.log(found);
      found? setMess('invalid'):setMess('valid');
      console.log('mess = ',mess);
    }
    

  return ( 
    <Container className=''>
      <Tabs className='d-flex flex-row text-black fw-bolder'
        defaultActiveKey='login'
        id="fill-tab-example"
        fill
        onSelect={handleSelect}
        >
          <Tab tabClassName='tabOfTabs'  className='formTab' eventKey='login' title="Вход">
            <Form className='text-light ps-3 pe-3 pb-3' noValidate validated={validated}>
              <Form.Group className="mb-3 mt-3" controlId="formBasicLogin">
                {/* <Form.Control type="login" placeholder="Ваш login" required isInvalid={true}/> */}
                <Form.Control type="login" placeholder="Ваш login" 
                  onBlur={findLogin} required/>
                {/* <Form.Text className="text-muted">{errMessage}</Form.Text> */}
                <Form.Control.Feedback type={mess}>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Control type="password" placeholder="Пароль" required/>
                <Form.Text className="text-muted">{errMessage}</Form.Text>
              </Form.Group>
              <Row className='align-items-center'>
                <Col className=''><a className='text-dark text-decoration-none text-opacity-75'href="">не помню пароль</a></Col>
                <Col className='text-end'>
                  <Button disabled={false} variant="primary" type="submit" onClick={()=>console.log('нажали войти')}>
                    Войти
                  </Button>
                </Col>
              </Row>
            </Form>
          </Tab>
          <Tab tabClassName='tabOfTabs'  className='formTab' eventKey='sign' title="Регистрация">
            <Form className='text-light ps-3 pe-3 pb-3'>
              <Form.Group className="mb-3 mt-3" controlId="formName">
                <Form.Control type="text" placeholder="Ваше имя" required/>
                <Form.Text className="text-muted">{errMessage}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formPhone">
                <Form.Control type="number" placeholder="+7 900 000 00 00" required/>
                <Form.Text className="text-muted">{errMessage}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formEmail">
                <Form.Control type="email" placeholder="name@example.com" required />
                <Form.Text className="text-muted">{errMessage}</Form.Text>
              </Form.Group>
              <Form.Group className="mb-3 mt-3" controlId="formLogin">
                <Form.Control type="text" placeholder="Ваш Логин" required/>
                <Form.Text className="text-muted">{errMessage}</Form.Text>
              </Form.Group>              
              <Form.Group className="mb-3" controlId="formPassword">
                <Form.Control type="password" placeholder="Пароль" required/>
                <Form.Text className="text-muted">{errMessage}</Form.Text>
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
/*     <div className='text-white'>

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
              <Form.Control type="text" placeholder="Ваш Login" required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Пароль</Form.Label>
              <Form.Control type="password" placeholder="Password" isValid required/>
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Телефон</Form.Label>
              <Form.Control id='phone' type="text" placeholder="+7 999 999 99 99" maxlength="16" onClick={onFokuse} onChange={(e)=>changePhone(e)} required />
            </Form.Group>
            <Form.Group className="mb-3" controlId="registerForm">
              <Form.Label>Почтовый адрес</Form.Label>
              <Form.Control type="email" placeholder="name@example.com" required/>
            </Form.Group>
            <Button type='submit' className='align-self-end' variant="primary">Регистрация</Button>
          </Form>
        </Tab>
      </Tabs>
    </div>  */
  )
}

export default SignLogin