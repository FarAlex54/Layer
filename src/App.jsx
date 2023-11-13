import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react'
import Header from './components/Header';
import SelfFooter from './components/SelfFooter';
import Footer from './components/Footer';
import {Route, Routes, BrowserRouter as Router} from 'react-router-dom';
import axios from 'axios';
import { useState, useEffect } from 'react';
import Home from './components/Home';
import ServicesPage from './components/pages/ServicesPage';
import KnowsPage from './components/pages/KnowsPage';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';

export const AppContext = React.createContext({});
function App() {
    /* Определение размеров экрана для вычисления ориентации окна браузера
  и определения размеров начальной области поиска отделений */
        const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
        const [pageHeight, setPageHeight] = useState(document.documentElement.scrollHeight);
  const [services, setServices] = useState([
    {
      "id": 1,
      "name": "Управленческий учет",
      "description": "",
"path": "/img/icons8-6.png"
  },
  {
      "id": 2,
      "name": "Экономическая безопасность",
      "description": "",
"path": "/img/icons8-2.png"
  },
  {
      "id": 3,
      "name": "Бухгалтерский аутсорсинг",
      "description": "",
"path": "/img/icons8-1.png"
  },
  {
      "id": 4,
      "name": "Налоговая оптимизация",
      "description": "",
"path": "/img/icons8-3.png"
  },
  {
      "id": 5,
      "name": "Налоговые проверки",
      "description": "",
"path": "/img/icons8-4.png"
  },
  {
      "id": 6,
      "name": "Обучение",
      "description": "",
"path": "/img/icons8-5.png"
  }
  ]);//хук хранит инфу об Услугах
  const [packages, setPackages] = useState([
    {
      "id": 1,
      "name": "Старт",
"price": "7000 руб / мес",
      "description": "Профессиональный тарифный план",
"include": [
  "Сдача отчетности",
  "ФНС"],
"uninclude": [
   "ПФР",
  "Безлимитные консультации",
  "Регламентные задания"]
  },
  {
      "id": 2,
      "name": "Старт+",
"price": "12000 руб / мес",
      "description": "Профессиональный тарифный план",
"include": [
  "Сдача отчетности",
  "ФНС",
  "ПФР"
  ],
"uninclude": [
  "Безлимитные консультации",
  "Регламентные задания"]
  },
  {
      "id": 3,
      "name": "Все включено",
"price": "15000 руб / мес",
      "description": "Профессиональный тарифный план",
"include": [
  "Сдача отчетности",
  "ФНС",
  "ПФР",
  "Безлимитные консультации",
  "Регламентные задания"
  ],
"uninclude": []
  }
  ]);//хук хранит инфу об Пакетах
  const [contacts, setContacts] = useState([
    {
      "telephone": "+79833113111",
      "email": "sibacadem@mail.ru",
      "addr": "Новосибирск, ул. Ленина д.11"
    }
  ]);//хук хранит инфу об контактах
  const [stocks, setStocks] = useState([]);//хук хранит инфу об акциях
  const [users, setUsers] = useState([]);//хук хранит инфу о пользователях

  window.onload = function() { 
    setPageWidth(window.innerWidth);
  }; 
  window.onresize = function() { 
    setPageWidth(window.innerWidth);
  };


/*   useEffect(() => {
    async function axiosServices(){
      await axios.get('http://192.168.2.200:3001/services/')
        .then(infoServices=>{setServices(infoServices.data);})
    }
    async function axiosPackages(){
      await axios.get('http://192.168.2.200:3001/packages/')
        .then(infoPackages=>{setPackages(infoPackages.data);})
    }
    async function axiosContacts(){
      await axios.get('http://192.168.2.200:3001/contacts/')
        .then(infoContacts=>{setContacts(infoContacts.data);})
    }
    axiosServices();
    axiosPackages();
    axiosContacts();
  }, []); */
  console.log('Services:',services);
  console.log('Packages:',packages);
  console.log('Contacts:',contacts);
/*   console.log('Контакты: ',contacts.length) */
/*   console.log("services: ",services.length);
  console.log("packages: ",packages.length); */
/*   if (isLoading) {return <div className="App">Loading...</div>;} */
  if (services.length===0 && packages.length===0 && contacts.length===0) {return <div className="App">Loading...</div>;}
  else{
  return (
    <AppContext.Provider
      value={{services, packages, contacts, pageWidth, setPageWidth}}>
      <div>
        <Router>
          <Header/>
            <Routes>
              <Route path='/' element={<Home/>}/>
              <Route path='/services' element={<ServicesPage/>}/>
              <Route path='/knows' element={<KnowsPage/>}/>
              <Route path='/about' element={<AboutPage/>}/>
              <Route path='/contacts' element={<ContactsPage/>}/>
            </Routes>
          <Footer />
          <SelfFooter />
        </Router>
      </div>
    </AppContext.Provider>
  );
  }
}

export default App;