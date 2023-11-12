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

//ОЧЕНЬ ВАЖНО ЗАПУСТИТЬ json-server -p 3001 -w db.json
export const AppContext = React.createContext({});
function App() {
    /* Определение размеров экрана для вычисления ориентации окна браузера
  и определения размеров начальной области поиска отделений */
        const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
        const [pageHeight, setPageHeight] = useState(document.documentElement.scrollHeight);
  const [isLoading, setLoading] = useState(true); //состояние получения ответа axios при открытии приложения
  const [services, setServices] = useState([]);//хук хранит инфу об Услугах
  const [packages, setPackages] = useState([]);//хук хранит инфу об Пакетах
  const [contacts, setContacts] = useState([]);//хук хранит инфу об контактах
  const [stocks, setStocks] = useState([]);//хук хранит инфу об акциях
  const [users, setUsers] = useState([]);//хук хранит инфу о пользователях

  window.onload = function() { 
    setPageWidth(window.innerWidth);
  }; 
  window.onresize = function() { 
    setPageWidth(window.innerWidth);
  };


  useEffect(() => {
    async function axiosServices(){
      await axios.get('http://localhost:3001/services/')
        .then(infoServices=>{setServices(infoServices.data);})
    }
    async function axiosPackages(){
      await axios.get('http://localhost:3001/packages/')
        .then(infoPackages=>{setPackages(infoPackages.data);})
    }
    async function axiosContacts(){
      await axios.get('http://localhost:3001/contacts/')
        .then(infoContacts=>{setContacts(infoContacts.data);})
    }
    axiosServices();
    axiosPackages();
    axiosContacts();
  }, []);
  console.log('Размер экрана:',pageWidth);
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