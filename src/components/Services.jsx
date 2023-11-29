import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import CardForServices from './cards/CardForServices';
import { AppContext } from '../App';


const Services = () => {
  const ServicesContext = React.useContext(AppContext);
  return (
    <div className='py-3' style={{background:'#444856'}}>
      <Container className=''>
        <Row className="">
            {[...Array(Object.keys(ServicesContext.services).length)].map((obj,i)=>{
                      return  <Col xs={6} sm={6} md={6} lg={4} xl={4} xxl={4} className='py-2'>
                                  <CardForServices
                                                  id={ServicesContext.services[i].id_serv}
                                                  name={ServicesContext.services[i].name_serv}
                                                  path={ServicesContext.services[i].path_serv}
                                                  description={ServicesContext.services[i].description_serv}
                                  />
                              </Col>
            })}
        </Row>
      </Container>
    </div>
  )
}

export default Services