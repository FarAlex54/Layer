import React from 'react'
import { AppContext } from '../App';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image';
import { color } from 'framer-motion';

const Stocks = () => {
  const StocksContext = React.useContext(AppContext);
  return (
    <Container className='pt-5' fluid>
      <div className='geolocation_map px-5 align-self-start' style={{width:'100%', marginLeft: '86px', marginBottom: '48px'}}>Акции компании</div>
      <Row className='justify-content-evenly'>
        <Col xxl={4} xl={5} lg={5} md={5} sm={5} xs={5} className=''>
          <Image className='stock_img' src='/img/stock-1.png' fluid/>
          <div className='stock_card p-2'>
            <p className='text-light text-center font_h'  style={{padding: '16px'}}>{StocksContext.stocks[0].title}</p>
            <p className='text-center font_p'  style={{paddingLeft: '26px',paddingRight: '26px', color: 'white'}}>{StocksContext.stocks[0].text}</p>
          </div>
        </Col>
        <Col xxl={4} xl={5} lg={5} md={5} sm={5} xs={5} className=''>
          <Image className='stock_img' src='/img/stock-2.png' fluid/>
          <div className='stock_card p-2'>
            <p className='text-light text-center font_h' style={{padding: '16px'}}>{StocksContext.stocks[1].title}</p>
            <p className='text-center font_p'style={{paddingLeft: '26px',paddingRight: '26px', color: 'white'}}>{StocksContext.stocks[1].text}</p>
          </div>
        </Col>
      </Row>
    </Container>
  )
}

export default Stocks