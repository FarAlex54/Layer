import 'bootstrap/dist/css/bootstrap.min.css';
import { Tab, Tabs, Button, ButtonGroup, Modal } from 'react-bootstrap';
import { useState } from 'react';
import data from './base.json';
import data_teach from './teaching.json';
import data_stocks from './stocks.json';
import data_package from './packagedb.json';

function AdminLk() {
    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
  
    //*****выбор статьи
    const [selectedArticle, setSelectedArticle] = useState(null);
    const [selectedArticleName, setSelectedArticleName] = useState('');
    const [selectedArticleDescription, setSelectedArticleDescription] = useState('');
  
    const handleShowEditModal = () => {
      if (selectedArticle) {
        setShowEditModal(true);
      }
    };
  
    const handleArticleClick = (article) => {
      setSelectedArticle(article);
      // действия при выборе статьи
      const selectedArticleData = data.find((item) => item.name === article);
      setSelectedArticleName(selectedArticleData.name);
      setSelectedArticleDescription(selectedArticleData.description);
    };
  
    const handleCloseEditModal = () => setShowEditModal(false);
    const handleShowAddModal = () => setShowAddModal(true);
    const handleCloseAddModal = () => setShowAddModal(false);
  
  
    //*****выбор обучения
    const [showEditModalTeach, setShowEditModalTeach] = useState(false);
    const [showAddModalTeach, setShowAddModalTeach] = useState(false);
  
    const [selectTeach, setSelectTeach] = useState(null)
    const [selectedTeachName, setSelectedTeachName] = useState('');
    const [selectedTeachDescription, setSelectedTeachDescription] = useState('');
    const [selectedTeachPrice, setSelectedTeachPrice] = useState('');
  
    const handleShowEditModalTeach = () => {
      if (selectTeach) {
        setShowEditModalTeach(true);
      }
    };
  
    const handleTeachClick = (article) => {
      setSelectTeach(article);
      // действия при выборе обучения
      const selectedTeachData = data_teach.find((item) => item.name === article);
      setSelectedTeachName(selectedTeachData.name);
      setSelectedTeachDescription(selectedTeachData.description);
      setSelectedTeachPrice(selectedTeachData.price);
    };
    const handleCloseEditModalTeach = () => setShowEditModalTeach(false);
    const handleShowAddModalTeach = () => setShowAddModalTeach(true);
    const handleCloseAddModalTeach = () => setShowAddModalTeach(false);
  
  
    //*****выбор акции
    const [showEditModalStocks, setShowEditModalStocks] = useState(false);
    const [showAddModalStocks, setShowAddModalStocks] = useState(false);
  
    const [selectedStocks, setSelectedStocks] = useState(null);
    const [selectedStocksName, setSelectedStocksName] = useState('');
    const [selectedStocksDescription, setSelectedStocksDescription] = useState('');
  
    const handleShowEditModalStocks = () => {
      if (selectedStocks) {
        setShowEditModalStocks(true);
      }
    };
  
    const handleStocksClick = (article) => {
      setSelectedStocks(article);
      // действия при выборе акции
      const selectedStocksData = data_stocks.find((item) => item.name === article);
      setSelectedStocksName(selectedStocksData.name);
      setSelectedStocksDescription(selectedStocksData.description);
    };
  
    const handleCloseEditModalStocks = () => setShowEditModalStocks(false);
    const handleShowAddModalStocks = () => setShowAddModalStocks(true);
    const handleCloseAddModalStocks = () => setShowAddModalStocks(false);
  
      //*****выбор пакета
      const [showEditModalPackage, setShowEditModalPackage] = useState(false);
      const [showAddModalPackage, setShowAddModalPackage] = useState(false);
    
      const [selectPackage, setSelectPackage] = useState(null)
      const [selectedPackageName, setSelectedPackageName] = useState('');
      const [selectedPackageDescription, setSelectedPackageDescription] = useState('');
      const [selectedPackagePrice, setSelectedPackagePrice] = useState('');
      const [selectedPackagePage1, setSelectedPackagePage1] = useState('');
      const [selectedPackagePage2, setSelectedPackagePage2] = useState('');
      const [selectedPackagePage3, setSelectedPackagePage3] = useState('');
      const [selectedPackagePage4, setSelectedPackagePage4] = useState('');
      const [selectedPackagePage5, setSelectedPackagePage5] = useState('');
    
      const handleShowEditModalPackage = () => {
        if (selectPackage) {
          setShowEditModalPackage(true);
        }
      };
    
      const handlePackageClick = (article) => {
        setSelectPackage(article);
        // действия при выборе пакета
        const selectedPackageData = data_package.find((item) => item.name === article);
        setSelectedPackageName(selectedPackageData.name);
        setSelectedPackageDescription(selectedPackageData.description);
        setSelectedPackagePrice(selectedPackageData.price);
        setSelectedPackagePage1(selectedPackageData.page1);
        setSelectedPackagePage2(selectedPackageData.page2);
        setSelectedPackagePage3(selectedPackageData.page3);
        setSelectedPackagePage4(selectedPackageData.page4);
        setSelectedPackagePage5(selectedPackageData.page5);
      };
      const handleCloseEditModalPackage = () => setShowEditModalPackage(false);
      const handleShowAddModalPackage = () => setShowAddModalPackage(true);
      const handleCloseAddModalPackage = () => setShowAddModalPackage(false);
  
    return (
      <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example" className="mb-3">
        
        {/* *************БАЗА ЗНАНИЙ************** */}
        <Tab eventKey="base" title="База знаний">
          <div style={{ height: '400px', overflow: 'scroll' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {data.map((article) => (
                <li
                  key={article.id}
                  onClick={() => handleArticleClick(article.name)}
                  style={{ background: selectedArticle === article.name ? 'yellow' : 'none' }}
                >
                  {article.name}
                </li>
              ))}
            </ul>
          </div>
  
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" disabled={!selectedArticle}>Удалить</Button>
            <Button variant="secondary" onClick={handleShowEditModal} disabled={!selectedArticle}>Редактировать</Button>
            <Modal size="lg" show={showEditModal} onHide={handleCloseEditModal} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Редактировать</Modal.Title>
              </Modal.Header>
              <Modal.Body><div>
                <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                <textarea
                  id="name"
                  style={{ width: '100%', height: '40px' }}
                  value={selectedArticleName}
                  onChange={(e) => setSelectedArticleName(e.target.value)}
                ></textarea>
              </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea
                    id="description"
                    style={{ width: '100%', minHeight: '300px' }}
                    value={selectedArticleDescription}
                    onChange={(e) => setSelectedArticleDescription(e.target.value)}
                  ></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModal}>Отмена</Button>
                <Button variant="primary">Сох</Button>
              </Modal.Footer>
            </Modal>
  
            <Button variant="secondary" onClick={handleShowAddModal}>Добавить</Button>
            <Modal size="lg" show={showAddModal} onHide={handleCloseAddModal} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Добавить</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea id="name" style={{ width: '100%', height: '40px' }}></textarea>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea id="description" style={{ width: '100%', minHeight: '300px' }}></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddModal}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
          </ButtonGroup>
        </Tab>
  
  {/* *************УСЛКГИ/ОБУЧЕНИЕ************** */}
        <Tab eventKey="services" title="Услуги/Обучение">
          <div style={{ height: '400px', overflow: 'scroll' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {data_teach.map((article) => (
                <li
                  key={article.id}
                  onClick={() => handleTeachClick(article.name)}
                  style={{ background: selectTeach === article.name ? 'yellow' : 'none' }}
                >
                  {article.name}
                </li>
              ))}
            </ul>
          </div>
  
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" disabled={!selectTeach}>Удалить</Button>
            <Button variant="secondary" onClick={handleShowEditModalTeach} disabled={!selectTeach}>Редактировать</Button>
            <Modal size="lg" show={showEditModalTeach} onHide={handleCloseEditModalTeach} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Редактировать</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea
                    id="name"
                    style={{ width: '100%', height: '40px' }}
                    value={selectedTeachName}
                    onChange={(e) => setSelectedTeachName(e.target.value)}
                  ></textarea>
                </div>
  
                <div>
                  <label htmlFor="price">Цена</label>
                  <div>
                    <input
                      type="number"
                      id="price"
                      style={{ width: '100%'}}
                      value={selectedTeachPrice}
                      onChange={(e) => setSelectedTeachPrice(e.target.value)}
                    /></div>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea
                    id="description"
                    style={{ width: '100%', minHeight: '300px' }}
                    value={selectedTeachDescription}
                    onChange={(e) => setSelectedTeachDescription(e.target.value)}
                  ></textarea>
                </div>
  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModalTeach}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
  
            <Button variant="secondary" onClick={handleShowAddModalTeach}>Добавить</Button>
            <Modal size="lg" show={showAddModalTeach} onHide={handleCloseAddModalTeach} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Добавить</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea id="name" style={{ width: '100%', height: '40px' }}></textarea>
                </div>
  
                <div>
                  <label for="price">Цена</label>
                  <div>
                    <input
                      type="number"
                      id="price"
                      style={{ width: '100%' }}
                    /></div>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea id="description" style={{ width: '100%', minHeight: '300px' }}></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddModalTeach}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
          </ButtonGroup>
        </Tab>
  
  {/* *************АКЦИИ************** */}
        <Tab eventKey="stocks" title="Акции">
        <div style={{ height: '400px', overflow: 'scroll' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {data_stocks.map((article) => (
                <li
                  key={article.id}
                  onClick={() => handleStocksClick(article.name)}
                  style={{ background: selectedStocks === article.name ? 'yellow' : 'none' }}
                >
                  {article.name}
                </li>
              ))}
            </ul>
          </div>
  
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" disabled={!selectedStocks}>Удалить</Button>
            <Button variant="secondary" onClick={handleShowEditModalStocks} disabled={!selectedStocks}>Редактировать</Button>
            <Modal size="lg" show={showEditModalStocks} onHide={handleCloseEditModalStocks} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Редактировать</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea
                    id="name"
                    style={{ width: '100%', height: '40px' }}
                    value={selectedStocksName}
                    onChange={(e) => setSelectedStocksName(e.target.value)}
                  ></textarea>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea
                    id="description"
                    style={{ width: '100%', minHeight: '300px' }}
                    value={selectedStocksDescription}
                    onChange={(e) => setSelectedStocksDescription(e.target.value)}
                  ></textarea>
                </div>
  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModalStocks}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
  
            <Button variant="secondary" onClick={handleShowAddModalStocks}>Добавить</Button>
            <Modal size="lg" show={showAddModalStocks} onHide={handleCloseAddModalStocks} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Добавить</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea id="name" style={{ width: '100%', height: '40px' }}></textarea>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea id="description" style={{ width: '100%', minHeight: '300px' }}></textarea>
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddModalStocks}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
          </ButtonGroup>
        </Tab>
  
  {/* *************ПАКЕТЫ УСЛУГ************** */}
  
        <Tab eventKey="packeges" title="Пакеты">
          <div style={{ height: '400px', overflow: 'scroll' }}>
            <ul style={{ listStyleType: 'none', padding: 0 }}>
              {data_package.map((article) => (
                <li
                  key={article.id}
                  onClick={() => handlePackageClick(article.name)}
                  style={{ background: selectPackage === article.name ? 'yellow' : 'none' }}
                >
                  {article.name}
                </li>
              ))}
            </ul>
          </div>
  
          <ButtonGroup aria-label="Basic example">
            <Button variant="secondary" disabled={!selectPackage}>Удалить</Button>
            <Button variant="secondary" onClick={handleShowEditModalPackage} disabled={!selectPackage}>Редактировать</Button>
            <Modal size="lg" show={showEditModalPackage} onHide={handleCloseEditModalPackage} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Редактировать</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea
                    id="name"
                    style={{ width: '100%', height: '40px' }}
                    value={selectedPackageName}
                    onChange={(e) => setSelectedPackageName(e.target.value)}
                  ></textarea>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px',  }}>Описание</label>
                  <textarea
                    id="description"
                    style={{ width: '100%', height: '40px' }}
                    value={selectedPackageDescription}
                    onChange={(e) => setSelectedPackageDescription(e.target.value)}
                  ></textarea>
                </div>
  
                <div>
                  <label htmlFor="price">Цена</label>
                  <div>
                    <input
                      type="number"
                      id="price"
                      style={{ width: '100%'}}
                      value={selectedPackagePrice}
                      onChange={(e) => setSelectedPackagePrice(e.target.value)}
                    /></div>
                </div>
  
                <label htmlFor="page1">Что входит/не входит</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor="page1"></label>
                  <input
                    type="checkbox"
                    id="page1"
                    style={{ margin: '0 15px' }} // Добавляем отступы между чекбоксом и полем ввода
                    checked={selectedPackagePage1} // Здесь использовать значение из состояния
                    onChange={(e) => setSelectedPackagePage1(e.target.checked)} // Обработчик изменения для обновления состояния
                  />
                  <input
                    id="page1"
                    style={{ width: '100%' }}
                    value={selectedPackagePage1}
                    onChange={(e) => setSelectedPackagePage1(e.target.value)}
                  />
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor="page2"></label>
                  <input
                    type="checkbox"
                    id="page2"
                    style={{ margin: '0 15px' }} // Добавляем отступы между чекбоксом и полем ввода
                    checked={selectedPackagePage2} // Здесь использовать значение из состояния
                    onChange={(e) => setSelectedPackagePage2(e.target.checked)} // Обработчик изменения для обновления состояния
                  />
                  <input
                    id="page2"
                    style={{ width: '100%' }}
                    value={selectedPackagePage2}
                    onChange={(e) => setSelectedPackagePage2(e.target.value)}
                  />
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor="page3"></label>
                  <input
                    type="checkbox"
                    id="page3"
                    style={{ margin: '0 15px' }} // Добавляем отступы между чекбоксом и полем ввода
                    checked={selectedPackagePage3} // Здесь использовать значение из состояния
                    onChange={(e) => setSelectedPackagePage3(e.target.checked)} // Обработчик изменения для обновления состояния
                  />
                  <input
                    id="page3"
                    style={{ width: '100%' }}
                    value={selectedPackagePage3}
                    onChange={(e) => setSelectedPackagePage3(e.target.value)}
                  />
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor="page4"></label>
                  <input
                    type="checkbox"
                    id="page4"
                    style={{ margin: '0 15px' }} // Добавляем отступы между чекбоксом и полем ввода
                    checked={selectedPackagePage4} // Здесь использовать значение из состояния
                    onChange={(e) => setSelectedPackagePage4(e.target.checked)} // Обработчик изменения для обновления состояния
                  />
                  <input
                    id="page4"
                    style={{ width: '100%' }}
                    value={selectedPackagePage4}
                    onChange={(e) => setSelectedPackagePage4(e.target.value)}
                  />
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <label htmlFor="page5"></label>
                  <input
                    type="checkbox"
                    id="page5"
                    style={{ margin: '0 15px' }} // Добавляем отступы между чекбоксом и полем ввода
                    checked={selectedPackagePage5} // Здесь использовать значение из состояния
                    onChange={(e) => setSelectedPackagePage5(e.target.checked)} // Обработчик изменения для обновления состояния
                  />
                  <input
                    id="page5"
                    style={{ width: '100%' }}
                    value={selectedPackagePage5}
                    onChange={(e) => setSelectedPackagePage5(e.target.value)}
                  />
                </div>
  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseEditModalPackage}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
  
            <Button variant="secondary" onClick={handleShowAddModalPackage}>Добавить</Button>
            <Modal size="lg" show={showAddModalPackage} onHide={handleCloseAddModalPackage} aria-labelledby="example-modal-sizes-title-lg">
              <Modal.Header closeButton>
                <Modal.Title>Добавить</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <div>
                  <label htmlFor="name" style={{ display: 'block' }}>Название</label>
                  <textarea id="name" style={{ width: '100%', height: '40px' }}></textarea>
                </div>
  
                <div>
                  <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Описание</label>
                  <textarea id="description" style={{ width: '100%', height: '40px' }}></textarea>
                </div>
  
                <div>
                  <label for="price">Цена</label>
                  <div>
                    <input
                      type="number"
                      id="price"
                      style={{ width: '100%' }}
                    /></div>
                </div>
  
                <label htmlFor="description" style={{ display: 'block', width: '100%', marginBottom: '10px' }}>Что входит/не входит</label>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="page1" style={{ margin: '0 15px' }}></input>
                  <input id="page1" type="text" style={{ width: '100%', height: '40px' }}></input>
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="page2" style={{ margin: '0 15px' }}></input>
                  <input id="page2" style={{ width: '100%', height: '40px' }}></input>
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="page3" style={{ margin: '0 15px' }}></input>
                  <input id="page3" style={{ width: '100%', height: '40px' }}></input>
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="page4" style={{ margin: '0 15px' }}></input>
                  <input id="page4" style={{ width: '100%', height: '40px' }}></input>
                </div>
  
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <input type="checkbox" id="page5" style={{ margin: '0 15px' }}></input>
                  <input id="page5" style={{ width: '100%', height: '40px' }}></input>
                </div>
  
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleCloseAddModalPackage}>Отмена</Button>
                <Button variant="primary">Сохранить</Button>
              </Modal.Footer>
            </Modal>
          </ButtonGroup>
        </Tab>
  
      </Tabs>
      
    );
}

export default AdminLk;