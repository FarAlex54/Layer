import React, { useState, useEffect, useLayoutEffect } from 'react'
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AppContext } from '../../App';
import { useLocation } from "react-router";

const KnowsPage = () => {
  const KnowsPageContext = React.useContext(AppContext);
  const [article,setArticle] = useState({});
  const [show,setShow] = useState(false);
  const handleClose = () => setShow(false);
  const location = useLocation();

  function handleClick(obj,e){
    e.preventDefault();
    setShow(true);
    setArticle(obj);
  }
  useLayoutEffect(() => {
    if(location.pathname==='/knows'){KnowsPageContext.setThemeHeader('dark')}
  }, []);

  return (
    <div >
      {KnowsPageContext.articles.map((obj)=>
        <div key={obj.id} >
          <div className='py-3' style={{backgroundColor: '#444856', paddingLeft: '66px'}}>
            <Container className='knows_page_article_header' >
              <a href="" onClick={(e)=>handleClick(obj,e)}><span>Статья {obj.number} {obj.title}</span></a>
            </Container>
          </div>
            <Container className='' style={{ paddingLeft: '66px'}}>
              <p className='knows_page_p pt-2 pb-4'>{obj.text}</p>
            </Container>
        </div>
      )}
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{article.number} {article.title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>{article.text}</Modal.Body>
        <Modal.Footer>
          <div>дата публикации: {article.date}</div>
          <Button variant="primary" onClick={handleClose}>
            Закрыть
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default KnowsPage