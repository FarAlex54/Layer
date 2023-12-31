import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useEffect, useState, useRef } from 'react'
import Header from './components/Header';
import SelfFooter from './components/SelfFooter';
import Footer from './components/Footer';
import {Route, Routes, BrowserRouter as Router, useLocation, Link} from 'react-router-dom';
import Home from './components/Home';
import ServicesPage from './components/pages/ServicesPage';
import KnowsPage from './components/pages/KnowsPage';
import AboutPage from './components/pages/AboutPage';
import ContactsPage from './components/pages/ContactsPage';


export const AppContext = React.createContext({});
function App() {
    /* Определение размеров экрана для вычисления ориентации окна браузера */
        const [pageWidth, setPageWidth] = useState(document.documentElement.scrollWidth);
  const [showPic,setShowPic] = useState(false); /* Хук отображения картинок банера*/
  const [isAuthenticated,setIsAuthenticated] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false); //определение роли администратора
  const [showForHeader,setShowForHeader] = useState(false); //для модалки, конкретнее для формы Sign/Login
  const services = ([
    {
      id: 1,
      name: "Управленческий учет",
      description:
        [ {
            id: 1,
            value: "организация финансового учета"
          },
          {
            id: 2,
            value: "операционный контроль"
          },
          {
            id: 3,
            value: "повышение эффективности управление организаций"
          },
          {
            id: 4,
            value: "аудит управленческого учета"
          }
        ],
      path: "/img/icons8-6.png"
  },
  {
      id: 2,
      name: "Экономическая безопасность",
      description:
        [{
          id: 1,
          value: "сбор и формирование досье на контрагентов"
          },
          {
            id: 2,
            value: "анализ бизнеса на риски уголовного преследования"
          }
        ],
      path: "/img/icons8-2.png"
  },
  {
      id: 3,
      name: "Бухгалтерский аутсорсинг",
      description: 
        [{
          id: 1,
          value: "ведение бухгалтерского и налогового учета"
         },
         {
          idc: 2,
          value: "ведение бухгалтерского и налогового учета"
         },
         {
          idc: 3,
          value: "восстановление бухгалтерского учета"
         }],
      path: "/img/icons8-1.png"
  },
  {
      id: 4,
      name: "Налоговая оптимизация",
      description:
        [{
          id: 1,
          value: "информационные консультационные услуги в сфере налогооблажения"
         }, 
         {
          id: 2,
          value: "налоговое планирование"
         },
         {
          id: 3,
          value: "законные схемы уменьшения налоговой нагрузки"
         }],
      path: "/img/icons8-3.png"
  },
  {
      id: 5,
      name: "Налоговые проверки",
      description:
        [{
          id: 1,
          value: "оспаривание ненормативных актов налоговых органов"
         },
         {
          id: 2,
          value: "сопровождение налоговых проверок"
         },  
         {
          id: 3,
          value: "судебное и досудебное сопровождение налоговых споров"
         },  
         {
          id: 4,
          value: "предпроверочный анализ на риски проведение выездных налоговых проверок"
         }],
      path: "/img/icons8-4.png"
  },
  {
      id: 6,
      name: "Обучение",
      description:
          [{
            id: 1,
            value: "шаблоны"
          },
          {
            id: 2,
            value: "лекции"
          },  
          {
            id: 3,
            value: "семинарв"
          }],
      path: "/img/icons8-5.png"
  }
  ]);// хранит инфу об Услугах
  const packages = ([
    {
      id: 1,
      name: "Старт",
      price: "7000 руб / мес",
      description: "Базовый тарифный план",
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
      description: "Оптимальный тарифный план",
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
  ]);// хранит инфу об Пакетах
  const contacts = ([
    {
      id: 1,
      name:'Телефон',
      path:'/img/phoneIcon.png',
      value:'+8800000000'
    },
    {
      id: 2,
      name:'Почта',
      path:'/img/phoneIcon.png',
      value:'buisnes@mail.ru'
    },
    {
      id: 3,
      name:'Адрес',
      path:'/img/phoneIcon.png',
      value:'Екатеринбург, ул.Ленина д.11'
    }
  ]);//хранит инфу об контактах
  const articles = ([
    {
      id: 1,
      number:"1.1.",
      title:"Заголовок статьи",
      text:"В 1974 году клинический психолог Деннис Аппер находился в творческом кризисе. Что-то мешало ему сесть и написать требуемую статью и он решил провести над собой научный эксперимент в надежде преодолеть «писательский блок». Результат опубликовал в престижном журнале Journal of Applied Behavioral Analysis",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 2,
      number:"2.1.",
      title:"Заголовок статьи",
      text:"Требования к статьям журналами выдвигаются разные, что зависит и от его научного уровня, рейтинга, и от редакционной политики, и попросту от его предпочтений. Поэтому перед публикацией студенту следует не только ознакомиться с существом этих требований, но и с примерами уже опубликованных данным журналом научных статей. Требования журналов к научным статьям обычно публикуются на их официальных сайтах. И лишь в редких исключениях, если речь идет о вузовских сборниках, такие требования можно узнать лишь непосредственно в издательствах.",
      date:"10/01/2000",
      switch:true
    },
    {
      id: 3,
      number:"3.1.",
      title:"Заголовок статьи",
      text:"Учитывайте также, что бесплатно в eLIBRARY.RU можно ознакомиться с текстами статей далеко не всех журналов, а только тех, что имеют зеленый цвет иконки. Но и этого для студентов, как правило, бывает достаточно, ведь большинство журналов и сборников, принимающих студенческие статьи, там представлены в свободном доступе. Найти примеры статей из интересующего вас журнала на eLIBRARY.RU можно двумя способами",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 4,
      number:"4.1.",
      title:"Заголовок статьи",
      text:"В примере показано создание маркированного списка, где в качестве значка маркера используется небольшой однотонный квадрат. Хотя количество значений ограничено тремя, это не значит, что в нашем распоряжении всего три вида маркера. Существует множество спецсимволов, которые с успехом могут выступать в качестве значка маркера. «Прикрутить» их непосредственно к <li> не получится, поэтому придётся действовать в обход. Для этого прячем маркеры списка с помощью свойства list-style со значением none и в тексте перед содержимым <li> добавляем свой собственный символ с помощью псевдоэлемента ::before. В примере 2 в качестве такого маркера выступает треугольник.",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 5,
      number:"5.1.",
      title:"Заголовок статьи",
      text:"Результат данного примера показан на рис. 2. Поскольку использование свойства list-style со значением none не убирает маркеры совсем, а только скрывает их от просмотра, то список получается смещённым вправо. Чтобы избавиться от этой особенности, в примере добавляется свойство text-indent с отрицательным значением. Его задача — переместить текст левее на один символ.",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 6,
      number:"6.1.",
      title:"Заголовок статьи",
      text:"Внутри фигурных скобок можно выполнять любые операции: арифметические, строковые и логические (и не ограничиваясь ими). Фактически, содержание этих скобок обрабатывается как JavaScript код. То есть можно даже записать {Math.sqrt(4)} и на месте скобок будет выведено число 2 (результат взятия квадратного корня из 4). Так как содержание скобок обрабатывается как JavaScript, то можно использовать и массивы, и объекты.",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 7,
      number:"7.1.",
      title:"Заголовок статьи",
      text:"В редких случаях, возможно, вам потребуется скрыть компонент, даже если он был отрисован другим компонентом. Для этого возвращаем null вместо вывода отрисовки. В приведённом ниже примере <WarningBanner /> отрисовывается в зависимости от значения свойства с названием warn. Если значение этого свойства равно false, то компонент не отрисовывается",
      date:"01/01/2000",
      switch:true
    },
    {
      id: 8,
      number:"8.1.",
      title:"Заголовок статьи",
      text:"Вы можете вставлять любые выражения в JSX, обертывая их фигурными фигурными скобками. Это включает в себя логический JavaScript-оператор &&. Это может быть удобно для условного включения элемента:Вы можете вставлять любые выражения в JSX, обёртывания их фигурными скобками. Это включает логический JavaScript-оператор &&. Это может быть удобно для условной отрисовки элемента:",
      date:"01/01/2000",
      switch:true
    }
  ]);//хук хранит инфу о статьях
  const stocks = ([
    {
      id:"1",
      title:"Первые 3 месяца скидка 30%",
      text:"Готовы стать нашим клиентом и получить полноценное обслуживание? При заключении договора с нами мы подарим вам скидку 30% от стоимости услуг на первые 3 месяца.",
      path:'/img/stock-1.png'    
    },
    {
      id:"2",
      title:"Восстановление учета скидка 50%",
      text:"Если вы ведете бухгалтерия и у вас появились грубые нарушения, то мы предлагаем вам решить это проблемы и воспользоваться услугой Восстаносление бухгалтерского учета.",
      path:'/img/stock-2.png' 
    }
  ]);//хранит инфу об акциях
  const [users, setUsers] = useState([
    {
      id:1,
      name: "Виталий",
      login: "vit",
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
      login:"admin",
      password: "admin",
      email: "serg@mail.ru",
      phone: 89999998888,
      role: "admin"
    },
  ]);//хук хранит инфу о пользователях
  const about = ([
    {id: 1,
     title: 'Специализация компании',
     description: 'Оказание комплексных юридических, финансовых, бухгалтерских и аудиторских услуг бизнесу.',
     pathIcon: '/img/GroupPhones.png'
    },
    {id: 2,
     title: 'Компетенции компании',
     description: 'Cоздание бизнеса Клиента, построение его оптимальной структуры ; аккуратное и легальное сопровождение прекращения бизнеса Клиента или выхода из него.',
     pathIcon: '/img/GroupPhones.png'
    },
    {id: 3,
      title: 'Цели компании',
      description: 'Комплексное и эффективное правовое, бухгалтерское и налоговое сопровождение бизнеса клиентов в целях его развития.',
      pathIcon: '/img/GroupPhones.png'
    },
    {id: 4,
      title: 'Клиенты компании',
      description: 'Управляющими партнерами выстроены долгосрочные отношения с клиентами. Нас рекомендуют, мы не проводим активных рекламных кампаний и рассылок и чаще всего работаем по рекомендации.',
      pathIcon: '/img/GroupPhones.png'
    },
    {id: 5,
      title: 'Конфиденциальность',
      description: 'Неразглашение данных о клиенте — четкое правило нашей работы, так как нам доверяют информацию.',
      pathIcon: '/img/GroupPhones.png'
    }
  ]);//хранит инфу о кампании
  const [themeHeader, setThemeHeader] = useState('light'); /* цветовая тема для хэдера */
  window.onload = function() { 
    setPageWidth(window.innerWidth);
  }; 
  /*window.onresize = function() { 
    setPageWidth(window.innerWidth);
  }; */

  
  const [scrollPosition, setScrollPosition] = useState(0); /* Значение скрола */
  useEffect(() =>{
    window.addEventListener('scroll',()=>{setScrollPosition(window.scrollY)})
  },[])


  if (services.length===0 || packages.length===0 || contacts.length===0) {return <div className="App">Loading...</div>;}

  else{
  return (
    <AppContext.Provider
      value={{services, packages, contacts, stocks, about,
              pageWidth, 
              articles,
              isAuthenticated,setIsAuthenticated,
              themeHeader, setThemeHeader,
              showPic,setShowPic,
              users, setUsers,
              isAdmin, setIsAdmin,
              showForHeader,setShowForHeader
              }}>
      <div className='user-select-none'> 
        <Router>          
            <div className='navbar_sticky'> {/* Залипательный navbar контента */}
              <div className='navbar_absolute' style={(scrollPosition>50 & pageWidth>768)? {animation: 'ani_on 0.5s forwards'}:{animation: 'ani_off 0.8s forwards'}}> {/* Поверх всего контента */}
                <Header theme='dark'/>
              </div>
            </div>
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