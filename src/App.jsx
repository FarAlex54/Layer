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
import Banner from './components/Banner'




export const AppContext = React.createContext({});
function App() {
  const [isLoadingImg,setIsLoadingImg] = useState([]);
  const images = [
    "/img/banner1.jpg",
    "/img/banner2.jpg",
    "/img/banner3.jpg"
  ];
  images.map((url) => (
    <img
      key={url}
      src={url}
      onLoad={() => setIsLoadingImg((prev) => [...prev, url])}
      style={{ display: "none" }}
    />
  ))

    /* Определение размеров экрана для вычисления ориентации окна браузера */
        const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
        const [pageHeight, setPageHeight] = useState(document.documentElement.scrollHeight);
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [services, setServices] = useState([
    {
      id: 1,
      name: "Управленческий учет",
      description:
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок",
          "добиваемся правовыми методами максимально приемлемых формулировок Акта ВНП",
          "пунктик просто для проверки, вдруг будут дополнять"],
      "path": "/img/icons8-6.png"
  },
  {
      id: 2,
      name: "Экономическая безопасность",
      description:
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок"],
      "path": "/img/icons8-2.png"
  },
  {
      id: 3,
      name: "Бухгалтерский аутсорсинг",
      description: 
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок",
          "добиваемся правовыми методами максимально приемлемых формулировок Акта ВНП"],
      "path": "/img/icons8-1.png"
  },
  {
      id: 4,
      name: "Налоговая оптимизация",
      description:
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок",
          "добиваемся правовыми методами максимально приемлемых формулировок Акта ВНП",
          "пунктик просто для проверки, вдруг будут дополнять"],
      "path": "/img/icons8-3.png"
  },
  {
      id: 5,
      name: "Налоговые проверки",
      description:
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок",
          "добиваемся правовыми методами максимально приемлемых формулировок Акта ВНП",
          "пунктик просто для проверки, вдруг будут дополнять"],
      "path": "/img/icons8-4.png"
  },
  {
      id: 6,
      name: "Обучение",
      description:
        [ "имеем практический опыт прохождения полного цикла выездных налоговых проверок",
          "добиваемся правовыми методами максимально приемлемых формулировок Акта ВНП",
          "пунктик просто для проверки, вдруг будут дополнять",
          "пунктик просто для проверки, вдруг будут дополнять"],
      "path": "/img/icons8-5.png"
  }
  ]);//хук хранит инфу об Услугах
  const [packages, setPackages] = useState([
    {
      id: 1,
      name: "Старт",
      price: "7000 руб / мес",
      description: "Профессиональный тарифный план",
        include: [
                      "Сдача отчетности",
                      "ФНС"],
        uninclude: [
                      "ПФР",
                      "Безлимитные консультации",
                      "Регламентные задания"]
    },
    {
      id: 2,
      name: "Старт+",
      price: "12000 руб / мес",
      description: "Профессиональный тарифный план",
          include: [
                      "Сдача отчетности",
                      "ФНС",
                      "ПФР"],
          uninclude: [
                      "Безлимитные консультации",
                      "Регламентные задания"]
    },
    {
      id: 3,
      name: "Все включено",
      price: "15000 руб / мес",
      description: "Профессиональный тарифный план",
          include: [
                      "Сдача отчетности",
                      "ФНС",
                      "ПФР",
                      "Безлимитные консультации",
                      "Регламентные задания"
                    ],
          uninclude: []
    }
  ]);//хук хранит инфу об Пакетах
  const [contacts, setContacts] = useState([
    {
      "telephone": "+79833113111",
      "email": "sibacadem@mail.ru",
      "addr": "Новосибирск, ул. Ленина д.11"
    }
  ]);//хук хранит инфу об контактах
  const [articles, setArticles] = useState([
    {
      id:"1",
      number:"1.1.",
      title:"Заголовок статьи",
      text:"В 1974 году клинический психолог Деннис Аппер находился в творческом кризисе. Что-то мешало ему сесть и написать требуемую статью и он решил провести над собой научный эксперимент в надежде преодолеть «писательский блок». Результат опубликовал в престижном журнале Journal of Applied Behavioral Analysis",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"2",
      number:"2.1.",
      title:"Заголовок статьи",
      text:"Требования к статьям журналами выдвигаются разные, что зависит и от его научного уровня, рейтинга, и от редакционной политики, и попросту от его предпочтений. Поэтому перед публикацией студенту следует не только ознакомиться с существом этих требований, но и с примерами уже опубликованных данным журналом научных статей. Требования журналов к научным статьям обычно публикуются на их официальных сайтах. И лишь в редких исключениях, если речь идет о вузовских сборниках, такие требования можно узнать лишь непосредственно в издательствах.",
      date:"10/01/2000",
      switch:true
    },
    {
      id:"3",
      number:"3.1.",
      title:"Заголовок статьи",
      text:"Учитывайте также, что бесплатно в eLIBRARY.RU можно ознакомиться с текстами статей далеко не всех журналов, а только тех, что имеют зеленый цвет иконки. Но и этого для студентов, как правило, бывает достаточно, ведь большинство журналов и сборников, принимающих студенческие статьи, там представлены в свободном доступе. Найти примеры статей из интересующего вас журнала на eLIBRARY.RU можно двумя способами",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"4",
      number:"4.1.",
      title:"Заголовок статьи",
      text:"В примере показано создание маркированного списка, где в качестве значка маркера используется небольшой однотонный квадрат. Хотя количество значений ограничено тремя, это не значит, что в нашем распоряжении всего три вида маркера. Существует множество спецсимволов, которые с успехом могут выступать в качестве значка маркера. «Прикрутить» их непосредственно к <li> не получится, поэтому придётся действовать в обход. Для этого прячем маркеры списка с помощью свойства list-style со значением none и в тексте перед содержимым <li> добавляем свой собственный символ с помощью псевдоэлемента ::before. В примере 2 в качестве такого маркера выступает треугольник.",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"5",
      number:"5.1.",
      title:"Заголовок статьи",
      text:"Результат данного примера показан на рис. 2. Поскольку использование свойства list-style со значением none не убирает маркеры совсем, а только скрывает их от просмотра, то список получается смещённым вправо. Чтобы избавиться от этой особенности, в примере добавляется свойство text-indent с отрицательным значением. Его задача — переместить текст левее на один символ.",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"6",
      number:"6.1.",
      title:"Заголовок статьи",
      text:"Внутри фигурных скобок можно выполнять любые операции: арифметические, строковые и логические (и не ограничиваясь ими). Фактически, содержание этих скобок обрабатывается как JavaScript код. То есть можно даже записать {Math.sqrt(4)} и на месте скобок будет выведено число 2 (результат взятия квадратного корня из 4). Так как содержание скобок обрабатывается как JavaScript, то можно использовать и массивы, и объекты.",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"7",
      number:"7.1.",
      title:"Заголовок статьи",
      text:"В редких случаях, возможно, вам потребуется скрыть компонент, даже если он был отрисован другим компонентом. Для этого возвращаем null вместо вывода отрисовки. В приведённом ниже примере <WarningBanner /> отрисовывается в зависимости от значения свойства с названием warn. Если значение этого свойства равно false, то компонент не отрисовывается",
      date:"01/01/2000",
      switch:true
    },
    {
      id:"8",
      number:"8.1.",
      title:"Заголовок статьи",
      text:"Вы можете вставлять любые выражения в JSX, обертывая их фигурными фигурными скобками. Это включает в себя логический JavaScript-оператор &&. Это может быть удобно для условного включения элемента:Вы можете вставлять любые выражения в JSX, обёртывания их фигурными скобками. Это включает логический JavaScript-оператор &&. Это может быть удобно для условной отрисовки элемента:",
      date:"01/01/2000",
      switch:true
    }
  ]);//хук хранит инфу о статьях
  const [stocks, setStocks] = useState([]);//хук хранит инфу об акциях
  const [users, setUsers] = useState([
    {
      id:1,
      name: "Виталий",
      login: "Vital",
      password: "qwe",
      email: "vital@mail.ru",
      phone: 89999999999,
      role: "user"
    },
    {
      id:2,
      name:"Сергей",
      login:"Serg",
      password: "qwe",
      email: "serg@mail.ru",
      phone: 89999998888,
      role: "user"
    },
    {
      id:3,
      name:"Владыка",
      login:"owner",
      password: "admin",
      email: "serg@mail.ru",
      phone: 89999998888,
      role: "admin"
    },
]);//хук хранит инфу о пользователях
  window.onload = function() { 
    setPageWidth(window.innerWidth);
  }; 
  window.onresize = function() { 
    setPageWidth(window.innerWidth);
  };

  /* if (services.length===0 || packages.length===0 || contacts.length===0) {return <div className="App">Loading...</div>;} */
  if (isLoadingImg.length === images.length) {return <div className="App">Loading...</div>;}
  else{
  return (
    <AppContext.Provider
      value={{services, packages, contacts,
              pageWidth, setPageWidth,
              articles, setArticles,
              isAuthenticated,setIsAuthenticated,
              isLoadingImg,setIsLoadingImg, images}}>
      <div className='user-select-none'>
        <Router>
            <Header className='header'/>
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