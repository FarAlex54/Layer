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
  const [isLoading, setLoading] = useState(true); //состояние получения ответа axios при открытии приложения
  const [services, setServices] = useState([]);//хук хранит инфу об Услугах
  const [packages, setPackages] = useState([]);//хук хранит инфу об Пакетах
  const [stocks, setStocks] = useState([]);//хук хранит инфу об акциях
  const [users, setUsers] = useState([]);//хук хранит инфу о пользователях
  useEffect(() => {
    async function axiosServices(){
      await axios.get('http://localhost:3001/services/')
        .then(infoServices=>{setServices(infoServices.data);})
    }
    async function axiosPackages(){
      await axios.get('http://localhost:3001/packages/')
        .then(infoPackages=>{setPackages(infoPackages.data);})
    }
    axiosServices();
    axiosPackages();
  }, []);
/*   console.log("services: ",services.length);
  console.log("packages: ",packages.length); */
/*   if (isLoading) {return <div className="App">Loading...</div>;} */
  if (services.length===0 && packages.length===0) {return <div className="App">Loading...</div>;}
  else{
  return (
    <AppContext.Provider
      value={{services, packages}}>
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
        </Router>
        <Footer />
        <SelfFooter />
      </div>
    </AppContext.Provider>
  );
  }
}

export default App;